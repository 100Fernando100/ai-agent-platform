export async function GET() {
  return Response.json({ hasApiKey: !!process.env.CALENDLY_API_KEY });
}