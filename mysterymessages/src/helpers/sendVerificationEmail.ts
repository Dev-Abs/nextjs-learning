// import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerficationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: email,
        subject: "Mystery Message | Verify your email",
        react: VerificationEmail({ username, otp: verifyCode }),
        });
    return {
        success: true,
        message: "Verification email sent",
        };
    }
  catch (emailError) {
    console.error("Error sending verification email: ", emailError);
    return {
        success: false,
        message: "Error sending verification email",
        };
  }
}
