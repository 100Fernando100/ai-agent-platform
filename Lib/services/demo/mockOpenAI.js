// /lib/services/demo/mockOpenAI.js
export class MockOpenAIService {
  constructor() {
    this.responses = {
      greeting: [
        "Hello! I'm your AI assistant. How can I help you today?",
        "Hi there! I'm here to assist you. What can I do for you?",
        "Welcome! I'm your virtual assistant. How may I help you?"
      ],
      appointment: [
        "I'd be happy to help you schedule an appointment. Let me check the available slots for you.",
        "Sure, I can help you book a meeting. What dates work best for you?",
        "I'll assist you with scheduling. When would you prefer to meet?"
      ],
      general: [
        "I understand your request. Let me help you with that.",
        "I'll be glad to assist you with this matter.",
        "Let me process that information for you."
      ]
    };
  }

  async createChatCompletion(messages, options = {}) {
    console.log(`[DEMO] OpenAI Chat Request:`, messages);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Determine response type based on last message
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
    let response;
    
    if (lastMessage.includes('appointment') || lastMessage.includes('schedule') || lastMessage.includes('meeting')) {
      response = this.getRandomResponse('appointment');
    } else if (lastMessage.includes('hello') || lastMessage.includes('hi') || lastMessage.includes('hey')) {
      response = this.getRandomResponse('greeting');
    } else {
      response = this.getRandomResponse('general');
    }
    
    return {
      id: `demo-${Date.now()}`,
      object: 'chat.completion',
      created: Date.now(),
      model: 'gpt-4',
      choices: [{
        index: 0,
        message: {
          role: 'assistant',
          content: response
        },
        finish_reason: 'stop'
      }],
      usage: {
        prompt_tokens: 50,
        completion_tokens: 30,
        total_tokens: 80
      }
    };
  }

  getRandomResponse(type) {
    const responses = this.responses[type] || this.responses.general;
    return responses[Math.floor(Math.random() * responses.length)];
  }

  async createTranscription(audioFile) {
    console.log(`[DEMO] Transcribing audio file`);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      text: "This is a demo transcription of the audio file. In a real scenario, this would be the actual transcribed text from the audio."
    };
  }
}