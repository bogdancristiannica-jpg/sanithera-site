import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { spital, email, telefon, mesaj, website } = await req.json();

    // Honeypot: utilizatorii reali nu văd câmpul „website"; bot-urile îl completează.
    // Răspundem 200 OK (fake success) ca bot-ul să nu retry-uiască.
    if (website) {
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Eroare la trimiterea emailului" },
      { status: 500 }
    );
  }
}
