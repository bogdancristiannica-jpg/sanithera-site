import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { spital, email, telefon, mesaj } = await req.json();

    if (!spital || !email) {
      return NextResponse.json(
        { success: false, error: "Câmpuri obligatorii lipsă" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Sanithera Site" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
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
