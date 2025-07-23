// config/twilio.js
// Export function instead of object to avoid build-time execution
export const getTwilioConfig = () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !phoneNumber) {
    throw new Error('Twilio configuration missing. Please check your environment variables.');
  }

  if (!accountSid.startsWith('AC')) {
    throw new Error('Invalid Twilio Account SID format. Must start with "AC".');
  }

  return {
    accountSid,
    authToken,
    phoneNumber
  };
};