import { Resend } from "resend";
import { redirect } from "next/navigation";

// EMAIL SENDING FUNCTIONALITY
// ADD RESEND_API_KEY IN YOUR .ENV FILE
const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message") as string | null;
  const name = formdata.get("name") as string | null;
  const senderEmail = formdata.get("SenderEmail") as string | null;

  // Validate required fields
  if (!message || !name || !senderEmail) {
    return { error: "All fields are required." };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "adildotes@gmail.com",
      subject: `${name} from Contact Form`,
      reply_to: senderEmail,
      text: `Sender email: ${senderEmail}\n\n${message}`,
    });

    redirect("/"); // Throws an exception, so it's placed last
  } catch (error) {
    console.error("Email sending failed:", error);
    return { error: "Failed to send email. Please try again later." };
  }
};