// /lib/services/demo/mockTwilio.js
export class MockTwilioService {
  constructor() {
    this.calls = [];
    this.messages = [];
  }

  async makeCall(to, from, options = {}) {
    console.log(`[DEMO] Making call to ${to} from ${from}`);
    
    const call = {
      sid: `CA${Math.random().toString(36).substring(2, 15)}`,
      to,
      from,
      status: 'initiated',
      direction: 'outbound',
      dateCreated: new Date(),
      ...options
    };
    
    this.calls.push(call);
    
    // Simulate call progress
    setTimeout(() => {
      call.status = 'ringing';
      console.log(`[DEMO] Call ${call.sid} is ringing`);
    }, 1000);
    
    setTimeout(() => {
      call.status = 'in-progress';
      console.log(`[DEMO] Call ${call.sid} answered`);
    }, 3000);
    
    return call;
  }

  async sendSMS(to, body, from) {
    console.log(`[DEMO] Sending SMS to ${to}: ${body}`);
    
    const message = {
      sid: `SM${Math.random().toString(36).substring(2, 15)}`,
      to,
      from,
      body,
      status: 'sent',
      dateCreated: new Date()
    };
    
    this.messages.push(message);
    return message;
  }

  async endCall(callSid) {
    const call = this.calls.find(c => c.sid === callSid);
    if (call) {
      call.status = 'completed';
      call.duration = Math.floor(Math.random() * 300) + 30; // Random duration 30-330 seconds
    }
    return call;
  }
}