import calendlyService from '@/services/calendly';

export async function GET(request) {
  return Response.json({ hasApiKey: !!process.env.CALENDLY_API_KEY });
}