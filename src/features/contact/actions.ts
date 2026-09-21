"use server";

import { submitWeb3Form } from "@/lib/web3Form";

export async function submitContactEnquiry(formData: FormData) {
  const data = {
    purpose: formData.get("purpose") as string,
    fullName: formData.get("fullName") as string,
    organisation: formData.get("organisation") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };

  if (!data.purpose || !data.fullName || !data.email || !data.message) {
    return { success: false, error: "Missing required fields." };
  }

  const subject = `New Contact Enquiry from ${data.fullName}`;
  
  const result = await submitWeb3Form(data, subject);
  
  if (result.success) {
    return { success: true };
  } else {
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
