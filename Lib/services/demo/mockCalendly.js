// /lib/services/demo/mockCalendly.js
export class MockCalendlyService {
  constructor() {
    this.events = [];
    this.availableSlots = this.generateAvailableSlots();
  }

  generateAvailableSlots() {
    const slots = [];
    const now = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() + i);
      
      // Generate 4 time slots per day
      ['09:00', '11:00', '14:00', '16:00'].forEach(time => {
        slots.push({
          start_time: `${date.toISOString().split('T')[0]}T${time}:00Z`,
          end_time: `${date.toISOString().split('T')[0]}T${parseInt(time) + 1}:00:00Z`,
          status: 'available'
        });
      });
    }
    
    return slots;
  }

  async getAvailableSlots(eventType) {
    console.log(`[DEMO] Fetching available slots for ${eventType}`);
    return {
      collection: this.availableSlots.slice(0, 10),
      pagination: {
        count: 10,
        next_page: null
      }
    };
  }

  async createInvitee(eventUuid, data) {
    console.log(`[DEMO] Creating invitee for event ${eventUuid}`, data);
    
    const invitee = {
      uri: `https://api.calendly.com/scheduled_events/${eventUuid}/invitees/${Math.random().toString(36).substring(7)}`,
      email: data.email,
      name: data.name,
      status: 'active',
      created_at: new Date().toISOString(),
      event: eventUuid
    };
    
    this.events.push({
      ...invitee,
      start_time: data.start_time,
      end_time: data.end_time
    });
    
    return { resource: invitee };
  }

  async cancelEvent(eventUuid, reason) {
    console.log(`[DEMO] Cancelling event ${eventUuid}: ${reason}`);
    
    const event = this.events.find(e => e.event === eventUuid);
    if (event) {
      event.status = 'cancelled';
      event.cancellation_reason = reason;
    }
    
    return { success: true };
  }
}