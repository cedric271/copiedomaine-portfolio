import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const CONTACT_EMAIL = "cedric@copiedomaine.com";

export const POST: APIRoute = async ({ request }) => {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Copiedomaine <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nouvelle demande de contact — ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return new Response(JSON.stringify({ error: "Send failed" }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
