"use server";

import { Resend } from "resend";

export async function sendEventEmail(name: string, email: string, nomineeName: string, nomineeEmail: string, message: string, link: string) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "annie@amwebstudio.net",
      to: ["annie@amwebstudio.net"],
      subject: `New message from ${name}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Nominee Name: ${nomineeName}</p><p>Nominee E-mail: ${nomineeEmail}</p><p>Message: ${message}</p><p>Nominee Link: ${link}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
