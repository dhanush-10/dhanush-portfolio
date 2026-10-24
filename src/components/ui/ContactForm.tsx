"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

interface Fields { name: string; email: string; subject: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Enter your name.";
  if (!emailRe.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "Enter a subject.";
  if (f.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

/**
 * Honest form: it opens the visitor's own email client with a pre-filled message.
 * Nothing is sent to or stored by this website.
 */
export function ContactForm() {
  const [f, setF] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const set = (k: keyof Fields) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: ev.target.value }));

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length > 0) { setOpened(false); return; }
    const body = `${f.message.trim()}\n\n${f.name.trim()}\n${f.email.trim()}`;
    window.location.href = `mailto:${profile.social.email}?subject=${encodeURIComponent(f.subject.trim())}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const field = "mt-1.5 w-full rounded-lg border border-line bg-bg-2 px-3 py-2.5 text-sm text-fg placeholder:text-zinc-600";
  const err = (id: string, m?: string) => (m ? <p id={id} className="mt-1 text-sm text-err">{m}</p> : null);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby="form-note">
      <p id="form-note" className="text-sm text-muted">This opens your email app with the message filled in. Nothing is stored on this site.</p>
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" autoComplete="name" value={f.name} onChange={set("name")} className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        {err("name-err", errors.name)}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Your email</label>
        <input id="email" type="email" autoComplete="email" value={f.email} onChange={set("email")} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
        {err("email-err", errors.email)}
      </div>
      <div>
        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
        <input id="subject" value={f.subject} onChange={set("subject")} className={field} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-err" : undefined} />
        {err("subject-err", errors.subject)}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" rows={6} value={f.message} onChange={set("message")} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        {err("message-err", errors.message)}
      </div>
      <button type="submit" className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 text-sm font-medium text-bg hover:bg-[#b5f04a]">Open in email app</button>
      <p role="status" className="text-sm text-ok">{opened ? "Your email app should have opened. If not, write to the address on this page." : ""}</p>
    </form>
  );
}
