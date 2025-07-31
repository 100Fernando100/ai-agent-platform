import { config } from '../config';

// Mock services
import { MockTwilioService } from './demo/mockTwilio';
import { MockCalendlyService } from './demo/mockCalendly';
import { MockOpenAIService } from './demo/mockOpenAI';
import { MockAirtableService } from './demo/mockAirtable';
import { MockSendGridService } from './demo/mockSendGrid';
import { MockHeyGenService } from './demo/mockHeyGen';
import { MockVAPIService } from './demo/mockVAPI';

// Real services (you'll create these later for production)
// import { TwilioService } from './twilio';
// import { CalendlyService } from './calendly';
// import { OpenAIService } from './openai';
// import { AirtableService } from './airtable';
// import { SendGridService } from './sendgrid';
// import { HeyGenService } from './heygen';
// import { VAPIService } from './vapi';

class ServiceFactory {
  constructor() {
    this.services = {};
  }

  getTwilioService() {
    if (!this.services.twilio) {
      this.services.twilio = config.isDemoMode 
        ? new MockTwilioService()
        : new MockTwilioService(); // Use mock for now until real service is created
    }
    return this.services.twilio;
  }

  getCalendlyService() {
    if (!this.services.calendly) {
      this.services.calendly = config.isDemoMode
        ? new MockCalendlyService()
        : new MockCalendlyService(); // Use mock for now
    }
    return this.services.calendly;
  }

  getOpenAIService() {
    if (!this.services.openai) {
      this.services.openai = config.isDemoMode
        ? new MockOpenAIService()
        : new MockOpenAIService(); // Use mock for now
    }
    return this.services.openai;
  }

  getAirtableService() {
    if (!this.services.airtable) {
      this.services.airtable = config.isDemoMode
        ? new MockAirtableService()
        : new MockAirtableService(); // Use mock for now
    }
    return this.services.airtable;
  }

  getSendGridService() {
    if (!this.services.sendgrid) {
      this.services.sendgrid = config.isDemoMode
        ? new MockSendGridService()
        : new MockSendGridService(); // Use mock for now
    }
    return this.services.sendgrid;
  }

  getHeyGenService() {
    if (!this.services.heygen) {
      this.services.heygen = config.isDemoMode
        ? new MockHeyGenService()
        : new MockHeyGenService(); // Use mock for now
    }
    return this.services.heygen;
  }

  getVAPIService() {
    if (!this.services.vapi) {
      this.services.vapi = config.isDemoMode
        ? new MockVAPIService()
        : new MockVAPIService(); // Use mock for now
    }
    return this.services.vapi;
  }
}

export const serviceFactory = new ServiceFactory();