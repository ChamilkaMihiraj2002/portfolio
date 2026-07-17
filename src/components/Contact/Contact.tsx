import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";
import styles from "./Contact.module.css";

const FORM_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || "";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!validateEmail(form.email)) nextErrors.email = "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    if (!validate()) return;
    setSending(true);

    try {
      if (FORM_ENDPOINT) {
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
        setStatusMessage("Thanks, your message has been sent.");
        setForm(initialState);
      } else {
        const subject = encodeURIComponent(`Contact from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
        window.location.href = `mailto:chamilka2002@gmail.com?subject=${subject}&body=${body}`;
        setStatusMessage("Opened your mail client as a fallback.");
      }
    } catch (error) {
      void error;
      setStatusMessage("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={styles.wrapper} aria-labelledby="contactHeading">
      <div className={styles.container}>
        <div className="section-heading">
          <div>
            <span className="section-kicker">Get In Touch</span>
            <h2 id="contactHeading" className="section-title">
              Let&apos;s build something useful together.
            </h2>
            <p className="section-copy">
              Open to internship opportunities, software engineering roles, collaborations, and thoughtful AI engineering dialogue.
            </p>
          </div>
          <div className="section-icon">
            {React.createElement(FaEnvelopeOpenText as any, { "aria-hidden": true })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={styles.content}
        >
          <div className={styles.contactInfo}>
            <h3 className={styles.contactInfoTitle}>Contact Information</h3>
            <p className={styles.introText}>
              If you have a product development idea, research task, or job opening in mind, feel free to send a message.
            </p>

            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className={styles.contactDetails}>
                <h4>Address</h4>
                <p>No. 32 Walauwaththa, Dankotuwa, Sri Lanka</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className={styles.contactDetails}>
                <h4>Phone</h4>
                <p><a href="tel:+94772326005">+94 (77) 232 6005</a></p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className={styles.contactDetails}>
                <h4>Email</h4>
                <p><a href="mailto:chamilka2002@gmail.com">chamilka2002@gmail.com</a></p>
              </div>
            </div>

            <div className={styles.cvDownloadWrapper}>
              <a
                href="/cv.pdf"
                download
                className={styles.cvDownloadButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume PDF"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV / Resume
              </a>
            </div>
          </div>

          <div>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div>
                <label className={styles.label} htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  className={`${styles.input} ${errors.name ? styles.invalid : ""}`}
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <div id="name-error" className={styles.error} role="alert">
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label className={styles.label} htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <div id="email-error" className={styles.error} role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.textarea} ${errors.message ? styles.invalid : ""}`}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to collaborate on..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <div id="message-error" className={styles.error} role="alert">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className={styles.actions}>
                <button className={styles.button} type="submit" disabled={sending} aria-busy={sending}>
                  {sending ? "Sending Message..." : "Send Message"}
                </button>
              </div>

              {statusMessage && (
                <div className={styles.status} aria-live="polite">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
