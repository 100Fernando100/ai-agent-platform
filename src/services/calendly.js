// services/calendly.js
const axios = require('axios');

class CalendlyService {
  constructor() {
    this.apiKey = process.env.CALENDLY_API_KEY;
    this.baseURL = 'https://api.calendly.com';
  }

  async getScheduledEvents(organizationUri) {
    try {
      const response = await axios.get(`${this.baseURL}/scheduled_events`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        params: {
          organization: organizationUri
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Calendly events:', error);
      throw error;
    }
  }

  async createWebhook(url, events, organizationUri) {
    try {
      const response = await axios.post(`${this.baseURL}/webhook_subscriptions`, {
        url,
        events,
        organization: organizationUri
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating Calendly webhook:', error);
      throw error;
    }
  }
}

module.exports = new CalendlyService();