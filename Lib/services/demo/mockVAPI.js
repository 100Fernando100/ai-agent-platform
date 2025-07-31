export class MockVAPIService {
  constructor() {
    this.calls = [];
    this.assistants = [
      { 
        id: 'asst1', 
        name: 'Sales Assistant',
        voice: 'jennifer',
        firstMessage: 'Hi! I\'m calling from AI Agent Platform. How can I help you today?',
        model: 'gpt-4'
      },
      { 
        id: 'asst2', 
        name: 'Support Assistant',
        voice: 'matthew',
        firstMessage: 'Hello, this is customer support. What can I assist you with?',
        model: 'gpt-4'
      }
    ];
    this.phoneNumbers = ['+1-555-DEMO-001', '+1-555-DEMO-002'];
  }

  async createPhoneCall(options) {
    console.log(`[DEMO] Initiating VAPI call to ${options.phoneNumber}`);
    
    const call = {
      id: `call_${Date.now()}`,
      assistantId: options.assistantId,
      customerPhoneNumber: options.phoneNumber,
      status: 'queued',
      direction: 'outbound',
      startedAt: null,
      endedAt: null,
      duration: null,
      recording: null,
      transcript: [],
      metadata: options.metadata || {}
    };
    
    this.calls.push(call);
    
    setTimeout(() => {
      call.status = 'ringing';
      console.log(`[DEMO] VAPI call ${call.id} is ringing`);
    }, 1000);
    
    setTimeout(() => {
      call.status = 'connected';
      call.startedAt = new Date().toISOString();
      console.log(`[DEMO] VAPI call ${call.id} connected`);
      
      this.simulateConversation(call);
    }, 3000);
    
    return call;
  }

  simulateConversation(call) {
    const messages = [
      { role: 'assistant', content: 'Hi! I\'m calling from AI Agent Platform. How can I help you today?' },
      { role: 'user', content: 'Oh hi, what is this about?' },
      { role: 'assistant', content: 'I\'m reaching out to see if you\'d be interested in learning about our AI automation services.' },
      { role: 'user', content: 'Sure, tell me more.' },
      { role: 'assistant', content: 'We help businesses automate their customer interactions using AI. Would you like to schedule a demo?' },
      { role: 'user', content: 'Yes, that sounds interesting.' },
      { role: 'assistant', content: 'Great! I can schedule you for next Tuesday at 2 PM. Does that work for you?' },
      { role: 'user', content: 'Perfect!' },
      { role: 'assistant', content: 'Excellent! I\'ve scheduled your demo. You\'ll receive a confirmation email shortly. Have a great day!' }
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        call.transcript.push({
          ...messages[index],
          timestamp: new Date().toISOString()
        });
        index++;
      } else {
        clearInterval(interval);
        call.status = 'completed';
        call.endedAt = new Date().toISOString();
        call.duration = 45;
        call.recording = `https://demo.vapi.ai/recordings/${call.id}.mp3`;
        console.log(`[DEMO] VAPI call ${call.id} completed`);
      }
    }, 2000);
  }

  async getCall(callId) {
    const call = this.calls.find(c => c.id === callId);
    return call || { error: 'Call not found' };
  }

  async endCall(callId) {
    const call = this.calls.find(c => c.id === callId);
    
    if (call && call.status === 'connected') {
      call.status = 'completed';
      call.endedAt = new Date().toISOString();
      call.duration = Math.floor((new Date() - new Date(call.startedAt)) / 1000);
      console.log(`[DEMO] VAPI call ${callId} ended by user`);
    }
    
    return call;
  }

  async listAssistants() {
    console.log(`[DEMO] Fetching VAPI assistants`);
    return { assistants: this.assistants };
  }

  async createAssistant(config) {
    console.log(`[DEMO] Creating new VAPI assistant`);
    
    const assistant = {
      id: `asst_${Date.now()}`,
      name: config.name,
      voice: config.voice || 'jennifer',
      firstMessage: config.firstMessage,
      model: config.model || 'gpt-4',
      createdAt: new Date().toISOString()
    };
    
    this.assistants.push(assistant);
    return assistant;
  }

  async handleWebhook(event) {
    console.log(`[DEMO] VAPI webhook received:`, event.type);
    
    return {
      received: true,
      eventType: event.type,
      processedAt: new Date().toISOString()
    };
  }
}
