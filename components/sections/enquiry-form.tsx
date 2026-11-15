"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/icon";

type FormValues = {
  name: string;
  phone: string;
  requirement: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  phone: "",
  requirement: "",
  website: "",
};

export function EnquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!values.name.trim()) {
      setError(site.enquiry.validation.name);
      return;
    }

    const phoneDigits = values.phone.replace(/\D/g, "").length;
    if (phoneDigits < 8 || phoneDigits > 15) {
      setError(site.enquiry.validation.phone);
      return;
    }

    if (!values.requirement.trim()) {
      setError(site.enquiry.validation.requirement);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (!response.ok) throw new Error("Enquiry request failed.");

      setIsSubmitted(true);
      trackEvent("form_submit");
    } catch {
      setError(site.enquiry.validation.generic);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    const message = site.enquiry.whatsappMessage
      .replace("{name}", values.name)
      .replace("{phone}", values.phone)
      .replace("{requirement}", values.requirement);

    return (
      <div aria-live="polite" className="form-success" role="status">
        <span className="success-icon">
          <Icon name="check" />
        </span>
        <h3>{site.enquiry.successTitle}</h3>
        <p>{site.enquiry.successDescription}</p>
        <a
          className="button button-whatsapp"
          href={getWhatsAppUrl(message)}
          onClick={(event) => {
            if (event.currentTarget.href.startsWith("https://wa.me/")) {
              trackEvent("whatsapp_click");
            }
          }}
        >
          <Icon name="chat" />
          {site.enquiry.whatsappAction}
        </a>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <label aria-hidden="true" className="honeypot-field">
        {site.enquiry.fields.honeypot.label}
        <input
          autoComplete="off"
          name="website"
          tabIndex={-1}
          value={values.website}
          onChange={(event) =>
            setValues({ ...values, website: event.target.value })
          }
        />
      </label>
      <label>
        <span>{site.enquiry.fields.name.label}</span>
        <input
          autoComplete="name"
          name="name"
          placeholder={site.enquiry.fields.name.placeholder}
          required
          value={values.name}
          onChange={(event) =>
            setValues({ ...values, name: event.target.value })
          }
        />
      </label>
      <label>
        <span>{site.enquiry.fields.phone.label}</span>
        <input
          autoComplete="tel"
          inputMode="tel"
          name="phone"
          placeholder={site.enquiry.fields.phone.placeholder}
          required
          type="tel"
          value={values.phone}
          onChange={(event) =>
            setValues({ ...values, phone: event.target.value })
          }
        />
      </label>
      <label>
        <span>{site.enquiry.fields.requirement.label}</span>
        <textarea
          name="requirement"
          placeholder={site.enquiry.fields.requirement.placeholder}
          required
          rows={4}
          value={values.requirement}
          onChange={(event) =>
            setValues({ ...values, requirement: event.target.value })
          }
        />
      </label>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="button button-primary form-submit"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting
          ? site.enquiry.submittingLabel
          : site.enquiry.submitLabel}
        <Icon name="arrow" />
      </button>
      <p className="form-privacy">{site.enquiry.privacyNote}</p>
    </form>
  );
}
