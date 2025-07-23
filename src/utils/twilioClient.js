import twilio from 'twilio';
import { getTwilioConfig } from '../config/twilio';

// Helper function to create client only when needed
const createTwilioClient = () => {
  const config = getTwilioConfig();
  return twilio(config.accountSid, config.authToken);
};

export const sendSMS = async (to, message) => {
  try {
    // Create client only when function is called
    const client = createTwilioClient();
    const config = getTwilioConfig();
    
    const response = await client.messages.create({
      body: message,
      from: config.phoneNumber,
      to: to
    });
    
    return response;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
};

export const makeCall = async (to, twimlUrl) => {
  try {
    // Create client only when function is called
    const client = createTwilioClient();
    const config = getTwilioConfig();
    
    const call = await client.calls.create({
      url: twimlUrl,
      to: to,
      from: config.phoneNumber
    });
    
    return call;
  } catch (error) {
    console.error('Error making call:', error);
    throw error;
  }
};