// src/components/Contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const FORM_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || "";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

const validateEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i.test(
    email
  );

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!validateEmail(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    if (!validate()) return;
    setSending(true);

    try {
      if (FORM_ENDPOINT) {
        // Formspree accepts FormData or JSON; we'll send FormData for widest support.
        const fd = new FormData();
        fd.append("name", form.name);
        fd.append("email", form.email);
        fd.append("message", form.message);

        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" },
        });

        if (!res.ok) throw new Error("Failed to send message");
        setStatusMessage("Thanks — your message has been sent.");
        setForm(initialState);
      } else {
        // No server endpoint configured: open mail client as fallback.
        const subject = encodeURIComponent(`Contact from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        setStatusMessage("Opened mail client as a fallback.");
      }
    } catch (err) {
      setStatusMessage("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={styles.wrapper} aria-labelledby="contactHeading">
      <div className={styles.container}>
        <h2 id="contactHeading" className={styles.title}>
          Contact Me
        </h2>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className={`${styles.input} ${errors.name ? styles.invalid : ""}`}
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <div id="name-error" className={styles.error} role="alert">
                {errors.name}
              </div>
            )}

            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@domain.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div id="email-error" className={styles.error} role="alert">
                {errors.email}
              </div>
            )}

            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`${styles.textarea} ${errors.message ? styles.invalid : ""}`}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or question..."
              rows={6}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <div id="message-error" className={styles.error} role="alert">
                {errors.message}
              </div>
            )}

            <div className={styles.actions}>
              <button className={styles.button} type="submit" disabled={sending} aria-busy={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>

            <div className={styles.status} aria-live="polite">
              {statusMessage}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
