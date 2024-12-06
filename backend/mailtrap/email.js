
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{email}];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
      category: "Email Verification",
    });
    console.log("Email sent successfully", response);
  }catch(error){
    console.error("Error sending verification", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
}

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{email}];

  try {
    const response = await mailtrapClient.send({
      from:sender,
      to:recipient,
      template_uuid: "34ba8aa7-91ea-426e-8a8f-85c3fc922d67",
      template_variables : {
        name: name,
      },
    });
    console.log("Welcome email sent successfully", response);
  }catch(err) {
    console.error("Error sending welcome email", error);
    throw new Error("Error sending welcome email ", err);
  }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{email}];
  try{
    const response = await mailtrapClient.send({
      from : sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
      category: "Password Reset",
    });
    console.log("Password reset mail send successfully", response);
  }catch(err){
    console.error("Error sending password reset email", err);
    throw new Error(`Error sending password reset email: ${err}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{email}];
  try{
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    console.log("Password Reset email send succefully", response);
  }catch(err){
    console.error("Error sending passsword reset success email", err);
    throw new Error(`Error sending password reset success email: ${err}`);
  }
}