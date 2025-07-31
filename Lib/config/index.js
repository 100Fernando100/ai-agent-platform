// /lib/config/index.js
const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export const config = {
  isDemoMode,
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER,
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  calendly: {
    apiKey: process.env.CALENDLY_API_KEY,
    webhookToken: process.env.CALENDLY_WEBHOOK_TOKEN,
  },
  database: {
    url: process.env.DATABASE_URL,
  }
};

// Validate configuration
export function validateConfig() {
  const required = [
    'TWILIO_ACCOUNT_SID',
    'TWILIO_AUTH_TOKEN',
    'TWILIO_PHONE_NUMBER',
    'OPENAI_API_KEY'
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0 && !isDemoMode) {
    console.warn(`⚠️  Missing environment variables: ${missing.join(', ')}`);
  }
  
  return missing.length === 0 || isDemoMode;
}