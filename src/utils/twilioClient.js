import twilio from 'twilio';
import { twilioConfig } from '../config/twilio';

const client = twilio(twilioConfig.accountSid, twilioConfig.authToken);

export const sendSMS = async (to, message) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: twilioConfig.phoneNumber,
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
    const call = await client.calls.create({
      url: twimlUrl,
      to: to,
      from: twilioConfig.phoneNumber
    });
    return call;
  } catch (error) {
    console.error('Error making call:', error);
    throw error;
  }
};