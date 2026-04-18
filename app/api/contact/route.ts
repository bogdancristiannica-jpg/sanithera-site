import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkContactLimit } from "@/lib/ratelimit";

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

    const { success: rlOk, reason: rlReason } = await checkContactLimit(ip);
    if (!rlOk) {
      console.warn(`[contact] RATE_LIMITED ip=${ip} reason=${rlReason}`);
      return NextResponse.json(
        {
          success: false,
          error: "Prea multe cereri. Încercați din nou peste o oră sau scrieți-ne direct la office@sanithera.ro",
        },
        { status: 429 }
      );
    }

    const { spital, email, telefon, mesaj, website } = await req.json();

    // Honeypot: utilizatorii reali nu văd câmpul „website"; bot-urile îl completează.
    // Răspundem 200 OK (fake success) ca bot-ul să nu retry-uiască.
    if (website) {
      console.warn(`[contact] HONEYPOT ip=${ip} website=${website}`);
      return NextResponse.json({ success: true });
    }

    if (!spital || !email) {
      return NextResponse.json(
        { success: false, error: "Câmpuri obligatorii lipsă" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.protonmail.ch",
      port: 587,
      secure: false,
      auth: {
        user: process.env.PROTON_SMTP_USER,
        pass: process.env.PROTON_SMTP_TOKEN,
      },
    });

    const spitalSafe = String(spital).slice(0, 80);

    try {
      await transporter.sendMail({
        from: `"Sanithera Site" <${process.env.PROTON_SMTP_USER}>`,
        to: process.env.PROTON_SMTP_USER,
        replyTo: email,
        subject: `Cerere consultație - ${spital}`,
        text: [
          `Spital: ${spital}`,
          `Email: ${email}`,
          `Telefon: ${telefon || "necompletat"}`,
          `Mesaj: ${mesaj || "niciun mesaj"}`,
        ].join("\n"),
      });
    } catch (smtpErr) {
      console.error(
        `[contact] ${new Date().toISOString()} ip=${ip} spital="${spitalSafe}" status=FAIL`,
        smtpErr
      );
      return NextResponse.json(
        { success: false, error: "Eroare la trimiterea emailului" },
        { status: 500 }
      );
    }

    // Log minimalist GDPR: timestamp + IP + spital + OK. Fără email, fără mesaj.
    console.log(
      `[contact] ${new Date().toISOString()} ip=${ip} spital="${spitalSafe}" status=OK`
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Eroare la trimiterea emailului" },
      { status: 500 }
    );
  }
}
