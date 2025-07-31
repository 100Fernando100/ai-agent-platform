export class MockSendGridService {
  constructor() {
    this.sentEmails = [];
    this.templates = [
      { id: 'welcome-template', name: 'Welcome Email' },
      { id: 'appointment-reminder', name: 'Appointment Reminder' },
      { id: 'follow-up', name: 'Follow Up Email' }
    ];
  }

  async sendEmail(options) {
    console.log(`[DEMO] Sending email to ${options.to}`);
    
    const email = {
      messageId: `msg_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      to: options.to,
      from: options.from || 'demo@aiagent.com',
      subject: options.subject,
      text: options.text,
      html: options.html,
      templateId: options.templateId,
      status: 'sent',
      timestamp: new Date().toISOString()
    };
    
    this.sentEmails.push(email);
    
    setTimeout(() => {
      email.status = 'delivered';
      console.log(`[DEMO] Email delivered to ${options.to}`);
    }, 2000);
    
    return {
      messageId: email.messageId,
      status: 'accepted'
    };
  }

  async sendBulkEmails(recipients, template) {
    console.log(`[DEMO] Sending bulk emails to ${recipients.length} recipients`);
    
    const results = await Promise.all(
      recipients.map(recipient => 
        this.sendEmail({
          to: recipient.email,
          subject: template.subject,
          html: template.html,
          templateId: template.id
        })
      )
    );
    
    return {
      sent: results.length,
      messageIds: results.map(r => r.messageId)
    };
  }

  async getEmailStatus(messageId) {
    const email = this.sentEmails.find(e => e.messageId === messageId);
    
    if (!email) {
      return { status: 'not_found' };
    }
    
    return {
      messageId: email.messageId,
      status: email.status,
      to: email.to,
      subject: email.subject,
      timestamp: email.timestamp
    };
  }

  async getTemplates() {
    console.log(`[DEMO] Fetching email templates`);
    return { templates: this.templates };
  }
}
