"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { submitContactEnquiry } from "./actions";

interface FormErrors {
  purpose?: string;
  fullName?: string;
  email?: string;
  message?: string;
}

export function ContactForm({ className }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const [values, setValues] = useState({
    purpose: "",
    fullName: "",
    organisation: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (name: string, value: string): string => {
    switch (name) {
      case "purpose":
        return !value ? "Please select an option." : "";
      case "fullName":
        return !value.trim() ? "Please enter your full name." : "";
      case "email":
        if (!value.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
        return "";
      case "message":
        if (!value.trim()) return "Please enter a message.";
        if (value.trim().length < 10) return "Message must be at least 10 characters long.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const isFormValid = () => {
    return (
      values.purpose &&
      values.fullName.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
      values.message.trim().length >= 10
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields on submit
    const newErrors = {
      purpose: validate("purpose", values.purpose),
      fullName: validate("fullName", values.fullName),
      email: validate("email", values.email),
      message: validate("message", values.message)
    };
    
    setErrors(newErrors);
    setTouched({ purpose: true, fullName: true, email: true, message: true });

    if (Object.values(newErrors).some(err => err !== "")) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));
    
    const result = await submitContactEnquiry(formData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSuccess(true);
    } else {
      setSubmitError(result.error || "An unexpected error occurred. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("p-8 border border-accent-blue/20 bg-accent-blue/5 rounded-2xl text-center", className)}>
        <CheckCircle2 className="w-12 h-12 text-accent-blue mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-foreground">Message Sent</h3>
        <p className="text-muted-foreground mb-8">Thanks — we'll be in touch within 2–3 business days.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center justify-center rounded-full px-6 py-2 bg-accent-blue hover:bg-accent-blue/90 text-white border-0 transition-all duration-150 ease-in-out hover:scale-[1.02] motion-reduce:transform-none">
            Back to Home
          </Link>
          <Button onClick={() => {
            setIsSuccess(false);
            setValues({ purpose: "", fullName: "", organisation: "", email: "", phone: "", message: "" });
            setTouched({});
            setErrors({});
          }} variant="outline" className="rounded-full px-6 bg-transparent transition-all duration-150 ease-in-out hover:scale-[1.02] motion-reduce:transform-none">
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  const InputError = ({ message, id }: { message?: string, id: string }) => {
    if (!message) return null;
    return <p className="text-destructive text-sm mt-1" id={`${id}-error`} role="alert">{message}</p>;
  };

  return (
    <form className={cn("space-y-6", className)} onSubmit={handleSubmit} noValidate>
      {submitError && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{submitError}</p>
        </div>
      )}
      <div className="space-y-2">
        <label htmlFor="purpose" className="block text-sm font-medium text-foreground">I am a... <span className="text-destructive">*</span></label>
        <select 
          id="purpose" 
          name="purpose"
          value={values.purpose}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={!!errors.purpose}
          aria-describedby={errors.purpose ? "purpose-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 min-h-[44px] transition-colors",
            errors.purpose ? "border-destructive focus:ring-destructive/50" : "border-border hover:border-accent-blue/50"
          )}
        >
          <option value="" disabled>Select an option</option>
          <option value="gov">Government/Development Partner</option>
          <option value="corporate">Corporate Partner</option>
          <option value="startup">Startup/Innovator</option>
          <option value="msme">MSME/Entrepreneur</option>
          <option value="participant">Prospective Participant</option>
          <option value="media">Media/Press</option>
          <option value="other">Other</option>
        </select>
        <InputError message={errors.purpose} id="purpose" />
      </div>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground">Full name <span className="text-destructive">*</span></label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder="Jane Doe"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 min-h-[44px] transition-colors",
              errors.fullName ? "border-destructive focus:ring-destructive/50" : "border-border hover:border-accent-blue/50"
            )} 
          />
          <InputError message={errors.fullName} id="fullName" />
        </div>
        <div className="space-y-2">
          <label htmlFor="organisation" className="block text-sm font-medium text-foreground">Organisation <span className="text-muted-foreground font-normal">(Optional)</span></label>
          <input 
            type="text" 
            id="organisation" 
            name="organisation"
            value={values.organisation}
            onChange={handleChange}
            placeholder="Company or Entity"
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 min-h-[44px] hover:border-accent-blue/50 transition-colors" 
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">Email <span className="text-destructive">*</span></label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder="you@organisation.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 min-h-[44px] transition-colors",
              errors.email ? "border-destructive focus:ring-destructive/50" : "border-border hover:border-accent-blue/50"
            )} 
          />
          <InputError message={errors.email} id="email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone <span className="text-muted-foreground font-normal">(Optional)</span></label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 min-h-[44px] hover:border-accent-blue/50 transition-colors" 
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">Message <span className="text-destructive">*</span></label>
        <textarea 
          id="message" 
          name="message"
          rows={5} 
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          placeholder="How can we partner with you?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-colors",
            errors.message ? "border-destructive focus:ring-destructive/50" : "border-border hover:border-accent-blue/50"
          )}
        ></textarea>
        <InputError message={errors.message} id="message" />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting || !isFormValid()}
        className="w-full sm:w-auto px-8 py-6 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white border-0 font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] transition-all duration-150 ease-in-out"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
