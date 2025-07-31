// /lib/services/factory.js
import { config } from '../config';
import { MockTwilioService } from './demo/mockTwilio';
import { MockCalendlyService } from './demo/mockCalendly';
import { MockOpenAIService } from './demo/mockOpenAI';

// Real service imports (create these based on your actual implementations)
// import { TwilioService } from './twilio';
// import { CalendlyService } from './calendly';
// import { OpenAIService } from './openai';

class ServiceFactory {
  constructor() {
    this.services = {};
  }

  getTwilioService() {
    if (!this.services.twilio) {
      this.services.twilio = new config.isDemoMode 
        ? new MockTwilioService()
        : new TwilioService(config.twilio);
    }
    return this.services.twilio;
  }

  getCalendlyService() {
    if (!this.services.calendly) {
      this.services.calendly = new config.isDemoMode
        ? new MockCalendlyService()
        : new CalendlyService(config.calendly);
    }
    return this.services.calendly;
  }

  getOpenAIService() {
    if (!this.services.openai) {
      this.services.openai = new config.isDemoMode
        ? new MockOpenAIService()
        : new OpenAIService(config.openai);
    }
    return this.services.openai;
  }
}

export const serviceFactory = new ServiceFactory();