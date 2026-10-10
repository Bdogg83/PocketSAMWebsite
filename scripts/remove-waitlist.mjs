/**
 * Remove one stored waitlist contact.
 *
 * Requires WAITLIST_ADMIN_TOKEN and RESEND_API_KEY on the server that hosts
 * the site. This script does not print the token.
 *
 *   $env:WAITLIST_ADMIN_TOKEN = "<server token>"
 *   node scripts/remove-waitlist.mjs person@example.com
 *   node scripts/remove-waitlist.mjs person@example.com http://localhost:3457
 */
const email = process.argv[2]?.trim().toLowerCase();
const baseUrl = (process.argv[3] || "https://pocketsam.com").replace(/\/$/, "");
const token = process.env.WAITLIST_ADMIN_TOKEN?.trim();

if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  console.error("Usage: node scripts/remove-waitlist.mjs <email> [baseUrl]");
  process.exit(1);
}

if (!token) {
  console.error("WAITLIST_ADMIN_TOKEN is not set in this shell.");
  process.exit(1);
}

const response = await fetch(`${baseUrl}/api/waitlist`, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email }),
});

const body = await response.json().catch(() => ({}));
if (!response.ok) {
  console.error(`Removal failed (${response.status}).`);
  if (typeof body.error === "string") console.error(body.error);
  process.exit(1);
}

console.log(body.removed ? `Removed ${email}.` : `No stored waitlist contact for ${email}.`);
