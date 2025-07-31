export class MockTranslationService {
  constructor() {
    this.languages = [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Spanish', flag: '🇪🇸' },
      { code: 'fr', name: 'French', flag: '🇫🇷' },
      { code: 'de', name: 'German', flag: '🇩🇪' },
      { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
      { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
      { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
      { code: 'ar', name: 'Arabic', flag: '🇸🇦' }
    ];
  }

  async translateText(text, targetLanguage, sourceLanguage = 'en') {
    console.log(`[DEMO] Translating from ${sourceLanguage} to ${targetLanguage}: "${text}"`);
    
    const translations = {
      'es': { 
        'Hello': 'Hola', 
        'Welcome to our service': 'Bienvenido a nuestro servicio',
        'Thank you': 'Gracias',
        'Contact us': 'Contáctanos'
      },
      'fr': { 
        'Hello': 'Bonjour', 
        'Welcome to our service': 'Bienvenue dans notre service',
        'Thank you': 'Merci',
        'Contact us': 'Contactez-nous'
      },
      'de': { 
        'Hello': 'Hallo', 
        'Welcome to our service': 'Willkommen bei unserem Service',
        'Thank you': 'Danke',
        'Contact us': 'Kontaktieren Sie uns'
      },
      'zh': {
        'Hello': '你好',
        'Welcome to our service': '欢迎使用我们的服务',
        'Thank you': '谢谢',
        'Contact us': '联系我们'
      }
    };
    
    const translation = {
      originalText: text,
      translatedText: translations[targetLanguage]?.[text] || `[${targetLanguage}] ${text}`,
      sourceLanguage,
      targetLanguage,
      confidence: 0.95,
      timestamp: new Date().toISOString()
    };
    
    return translation;
  }

  async detectLanguage(text) {
    console.log(`[DEMO] Detecting language for: "${text}"`);
    
    // Simple language detection simulation
    const languagePatterns = {
      'es': /hola|gracias|por favor|buenos días/i,
      'fr': /bonjour|merci|s'il vous plaît|bonsoir/i,
      'de': /hallo|danke|bitte|guten tag/i,
      'zh': /你好|谢谢|请|早上好/i
    };
    
    let detectedLang = 'en';
    for (const [lang, pattern] of Object.entries(languagePatterns)) {
      if (pattern.test(text)) {
        detectedLang = lang;
        break;
      }
    }
    
    return {
      detectedLanguage: detectedLang,
      confidence: 0.92,
      alternatives: [
        { language: 'es', confidence: 0.05 },
        { language: 'fr', confidence: 0.03 }
      ]
    };
  }

  async getSupportedLanguages() {
    return this.languages;
  }

  async translateWebsite(targetLanguage) {
    console.log(`[DEMO] Translating website to ${targetLanguage}`);
    
    return {
      language: targetLanguage,
      elementsTranslated: 47,
      status: 'completed',
      duration: '2.3s'
    };
  }
}
