"use server";

import { Resend } from "resend";

export async function sendEmail(name: string, email: string, message: string) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "annie@amwebstudio.net",
      to: ["annie@amwebstudio.net"],
      subject: `New message from ${name}`,
      html: `<p>${message}</p><p>${email}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
