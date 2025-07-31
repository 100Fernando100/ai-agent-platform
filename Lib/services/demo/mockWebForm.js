export class MockWebFormService {
  constructor() {
    this.submissions = [];
    this.forms = [
      { id: 'contact-form', name: 'Contact Us', fields: ['name', 'email', 'message'] },
      { id: 'lead-form', name: 'Get Quote', fields: ['name', 'email', 'phone', 'service', 'budget'] },
      { id: 'support-form', name: 'Support Request', fields: ['name', 'email', 'issue', 'priority'] }
    ];
  }

  async submitForm(formId, data) {
    console.log(`[DEMO] Form submission received: ${formId}`, data);
    
    const submission = {
      id: `form_${Date.now()}`,
      formId: formId,
      data: data,
      status: 'received',
      submittedAt: new Date().toISOString(),
      ip: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Demo)',
      source: 'website'
    };
    
    this.submissions.push(submission);
    
    // Simulate processing
    setTimeout(() => {
      submission.status = 'processed';
      submission.processedAt = new Date().toISOString();
      
      // Simulate auto-response
      submission.autoResponse = {
        sent: true,
        email: data.email,
        subject: 'Thank you for contacting us',
        sentAt: new Date().toISOString()
      };
      
      console.log(`[DEMO] Form processed and auto-response sent`);
    }, 2000);
    
    return {
      success: true,
      submissionId: submission.id,
      message: 'Thank you! We\'ll get back to you within 24 hours.'
    };
  }

  async getSubmissions(formId = null) {
    if (formId) {
      return this.submissions.filter(s => s.formId === formId);
    }
    return this.submissions;
  }

  async createForm(config) {
    const form = {
      id: `form_${Date.now()}`,
      name: config.name,
      fields: config.fields,
      webhook: config.webhook || null,
      notifications: config.notifications || { email: 'admin@demo.com' },
      createdAt: new Date().toISOString()
    };
    
    this.forms.push(form);
    return form;
  }

  async getFormAnalytics(formId) {
    const submissions = this.submissions.filter(s => s.formId === formId);
    
    return {
      totalSubmissions: submissions.length,
      conversionRate: '2.5%',
      averageTimeToComplete: '45 seconds',
      topSources: ['organic', 'social', 'direct'],
      recentSubmissions: submissions.slice(-5)
    };
  }
}
