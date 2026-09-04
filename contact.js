export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { name, phone, goal, message } = req.body || {};
  if (!name || !phone) return res.status(400).json({ error: "Name and phone are required." });
  // Vercel-ready placeholder. Connect Resend/Email provider later via environment variables.
  return res.status(200).json({ ok: true, message: "Lead received", lead: { name, phone, goal, message } });
}