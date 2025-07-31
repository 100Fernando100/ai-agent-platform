export class MockWhatsAppService {
  constructor() {
    this.messages = [];
    this.conversations = [];
  }

  async sendMessage(to, message, mediaUrl = null) {
    console.log(`[DEMO] Sending WhatsApp message to ${to}: ${message}`);
    
    const whatsappMessage = {
      id: `wa_msg_${Date.now()}`,
      to: to,
      from: 'whatsapp:+14155238886', // Twilio WhatsApp sandbox number
      body: message,
      mediaUrl: mediaUrl,
      status: 'queued',
      timestamp: new Date().toISOString()
    };
    
    this.messages.push(whatsappMessage);
    
    // Simulate delivery
    setTimeout(() => {
      whatsappMessage.status = 'sent';
      console.log(`[DEMO] WhatsApp message sent to ${to}`);
    }, 1000);
    
    setTimeout(() => {
      whatsappMessage.status = 'delivered';
      whatsappMessage.deliveredAt = new Date().toISOString();
      console.log(`[DEMO] WhatsApp message delivered to ${to}`);
    }, 2000);
    
    setTimeout(() => {
      whatsappMessage.status = 'read';
      whatsappMessage.readAt = new Date().toISOString();
      console.log(`[DEMO] WhatsApp message read by ${to}`);
    }, 3000);
    
    return whatsappMessage;
  }

  async sendTemplate(to, templateName, parameters = []) {
    console.log(`[DEMO] Sending WhatsApp template "${templateName}" to ${to}`);
    
    const templates = {
      'appointment_reminder': 'Hi {{1}}, this is a reminder about your appointment on {{2}} at {{3}}.',
      'order_confirmation': 'Your order #{{1}} has been confirmed! Total: ${{2}}',
      'welcome': 'Welcome {{1}}! Thank you for joining our service.'
    };
    
    let body = templates[templateName] || 'Default message';
    parameters.forEach((param, index) => {
      body = body.replace(`{{${index + 1}}}`, param);
    });
    
    return this.sendMessage(to, body);
  }

  async createBusinessProfile() {
    return {
      displayName: 'AI Agent Demo Business',
      about: 'Demo WhatsApp Business Account',
      address: '123 Demo Street',
      description: 'AI-powered customer service',
      email: 'demo@aiagent.com',
      websites: ['https://demo.aiagent.com'],
      profilePictureUrl: 'https://demo.aiagent.com/logo.png'
    };
  }
}
