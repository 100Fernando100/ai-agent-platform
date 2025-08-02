'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Calendar, Mail, Users, Database, Mic, Bot, 
  Play, Globe, Menu, X, Check, Star, ChevronRight,
  Shield, Zap, Clock, BarChart3, MessageSquare, 
  Building2, Rocket, ArrowRight, Sparkles, Activity
} from 'lucide-react';

// Translations
const translations = {
  en: {
    nav: {
      dashboard: "Dashboard",
      aiAgent: "AI Agent",
      voiceSms: "Voice & SMS",
      appointments: "Appointments",
      email: "Email",
      leads: "Leads",
      integrations: "Integrations",
      investorRelations: "Investor Relations",
      nextProject: "Coming Soon"
    },
    hero: {
      badge: "Next Generation AI Platform",
      title1: "The Future of",
      title2: "Business Automation",
      subtitle: "Harness the power of AI to transform every customer interaction into an opportunity",
      cta1: "Experience the Future",
      cta2: "Watch Demo",
      stats: [
        { label: "Active Users", value: "50K+" },
        { label: "Messages/Day", value: "2M+" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    services: {
      title: "Unleash AI Power",
      subtitle: "Revolutionary tools that redefine business communication",
      items: {
        voiceSms: {
          title: "Voice & SMS",
          desc: "AI-powered conversations that feel human",
          features: ["Neural voice synthesis", "Emotion detection", "Real-time translation", "Quantum encryption"]
        },
        appointments: {
          title: "Smart Scheduling",
          desc: "AI that predicts and optimizes your calendar",
          features: ["Predictive scheduling", "Time zone AI", "Conflict resolution", "Smart reminders"]
        },
        email: {
          title: "Email Intelligence",
          desc: "Self-writing campaigns that convert",
          features: ["AI copywriting", "Sentiment optimization", "Predictive send times", "Dynamic personalization"]
        },
        leads: {
          title: "Lead Generation 3.0",
          desc: "AI that finds and qualifies leads automatically",
          features: ["Behavioral prediction", "Intent detection", "Automatic enrichment", "Conversion forecasting"]
        },
        database: {
          title: "Neural Database",
          desc: "Self-organizing data that thinks",
          features: ["Auto-categorization", "Anomaly detection", "Predictive analytics", "Quantum sync"]
        },
        voiceAI: {
          title: "Voice AI Core",
          desc: "Consciousness-level conversation AI",
          features: ["Emotion synthesis", "Context memory", "Multi-persona AI", "Real-time learning"]
        },
        assistant: {
          title: "AI Assistant",
          desc: "Your digital twin for business",
          features: ["Autonomous decisions", "Predictive actions", "Deep learning", "24/7 evolution"]
        },
        heyGen: {
          title: "HeyGen Synthesis",
          desc: "Photorealistic AI avatars",
          features: ["Deepfake protection", "Emotion mapping", "4K rendering", "Voice cloning"]
        }
      }
    },
    dashboard: {
      title: "Neural Command Center",
      subtitle: "Real-time AI operations",
      metrics: {
        neurons: "Active Neurons",
        processing: "Processing Power",
        quantum: "Quantum State",
        evolution: "AI Evolution"
      }
    },
    features: {
      title: "Beyond Tomorrow",
      subtitle: "Technology that adapts, learns, and evolves",
      items: [
        {
          title: "Quantum Security",
          desc: "Unbreakable encryption using quantum mechanics"
        },
        {
          title: "Neural Analytics",
          desc: "AI that predicts trends before they happen"
        },
        {
          title: "Holographic UI",
          desc: "Immersive 3D interfaces for the future"
        },
        {
          title: "Instant Evolution",
          desc: "AI that improves itself every millisecond"
        }
      ]
    },
    pricing: {
      title: "Investment in the Future",
      subtitle: "Choose your evolution path",
      plans: {
        starter: {
          name: "Genesis",
          price: "$497",
          period: "/month",
          desc: "Begin your AI transformation",
          features: [
            "1,000 AI interactions/month",
            "Basic neural network",
            "Quantum encryption",
            "Holographic support",
            "5 user minds"
          ]
        },
        professional: {
          name: "Evolution",
          price: "$1,497",
          period: "/month",
          desc: "Accelerate beyond limits",
          popular: true,
          features: [
            "Unlimited AI interactions",
            "Advanced neural mesh",
            "Quantum computing access",
            "Priority evolution",
            "Infinite user minds",
            "Time crystal storage"
          ]
        },
        enterprise: {
          name: "Singularity",
          price: "∞",
          period: "",
          desc: "Transcend conventional business",
          features: [
            "Omnipresent AI",
            "Dedicated quantum realm",
            "Custom reality engine",
            "Telepathic support",
            "Multiverse backup",
            "Future-proof guarantee"
          ]
        }
      },
      cta: "Begin Evolution"
    }
  },
  es: {
    nav: {
      dashboard: "Panel Neural",
      aiAgent: "Agente IA",
      voiceSms: "Voz y SMS",
      appointments: "Citas",
      email: "Correo",
      leads: "Prospectos",
      integrations: "Integraciones",
      investorRelations: "Inversores",
      nextProject: "Próximamente"
    },
    hero: {
      badge: "Plataforma IA de Próxima Generación",
      title1: "El Futuro de la",
      title2: "Automatización Empresarial",
      subtitle: "Aprovecha el poder de la IA para transformar cada interacción en una oportunidad",
      cta1: "Experimenta el Futuro",
      cta2: "Ver Demo",
      stats: [
        { label: "Usuarios Activos", value: "50K+" },
        { label: "Mensajes/Día", value: "2M+" },
        { label: "Disponibilidad", value: "99.9%" }
      ]
    }
    // ... resto de traducciones
  }
};

// Particle Background Component
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
        this.color = Math.random() > 0.5 ? '#8B5CF6' : '#3B82F6';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}

export default function FuturisticAIAgentPlatform() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('voiceSms');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 'voiceSms', icon: Phone, ...t.services.items.voiceSms },
    { id: 'appointments', icon: Calendar, ...t.services.items.appointments },
    { id: 'email', icon: Mail, ...t.services.items.email },
    { id: 'leads', icon: Users, ...t.services.items.leads },
    { id: 'database', icon: Database, ...t.services.items.database },
    { id: 'voiceAI', icon: Mic, ...t.services.items.voiceAI },
    { id: 'assistant', icon: Bot, ...t.services.items.assistant },
    { id: 'heyGen', icon: Play, ...t.services.items.heyGen }
  ];

  const activeService = services.find(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none z-0" />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center animate-pulse">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AI Agent Platform
                </span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-6">
                {Object.entries(t.nav).map(([key, value]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="text-gray-300 hover:text-purple-400 font-medium transition-all hover:scale-105"
                  >
                    {value}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <button
                onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{lang.toUpperCase()}</span>
              </button>

              {/* CTA Button */}
              <button className="hidden sm:block relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur group-hover:blur-md transition-all"></div>
                <span className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-lg font-medium block hover:scale-105 transition-transform">
                  Get Started
                </span>
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
              <div className="px-4 py-4 space-y-2">
                {Object.entries(t.nav).map(([key, value]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="block py-2 text-gray-300 hover:text-purple-400 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {value}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-block mb-8">
              <div className="px-6 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  {t.hero.badge}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 animate-gradient">
                {t.hero.title1}
              </span>
              <span className="block text-white mt-2">
                {t.hero.title2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-lg group-hover:blur-xl transition-all opacity-75"></div>
                <span className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium block hover:scale-105 transition-all flex items-center justify-center gap-2">
                  {t.hero.cta1}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group relative">
                <span className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-medium block hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  {t.hero.cta2}
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              {t.hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-300">
              {t.services.subtitle}
            </p>
          </div>

          {/* Service Tabs - Futuristic Design */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`relative group ${isActive ? 'scale-105' : ''}`}
                >
                  <div className={`absolute inset-0 rounded-lg ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                      : 'bg-white/5'
                  } blur-sm group-hover:blur-md transition-all`}></div>
                  <div className={`relative px-4 py-2 rounded-lg backdrop-blur-sm border ${
                    isActive 
                      ? 'border-purple-500 bg-purple-500/20' 
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  } transition-all flex items-center gap-2`}>
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{service.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Content - Futuristic Card */}
          {activeService && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                          <activeService.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{activeService.title}</h3>
                        <p className="text-gray-400">{activeService.desc}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {activeService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 group/item">
                          <div className="relative mt-1">
                            <Check className="w-5 h-5 text-purple-400 relative z-10" />
                            <div className="absolute inset-0 bg-purple-400 blur-lg opacity-50 group-hover/item:opacity-100 transition-opacity"></div>
                          </div>
                          <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="mt-8 group/btn relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur group-hover/btn:blur-md transition-all"></div>
                      <span className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium block">
                        Activate {activeService.title}
                      </span>
                    </button>
                  </div>

                  <div className="relative h-64 md:h-96">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <activeService.icon className="w-32 h-32 text-white/10" />
                    </div>
                    {/* Floating UI elements */}
                    <div className="absolute top-8 right-8 bg-purple-600/20 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30 animate-float">
                      <Activity className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="absolute bottom-8 left-8 bg-blue-600/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30 animate-float-delay">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Neural Dashboard Preview */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              {t.dashboard.title}
            </h2>
            <p className="text-xl text-gray-300">
              {t.dashboard.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              {/* Holographic Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: t.dashboard.metrics.neurons, value: '1.2M', color: 'purple' },
                  { label: t.dashboard.metrics.processing, value: '847 THz', color: 'blue' },
                  { label: t.dashboard.metrics.quantum, value: 'Stable', color: 'green' },
                  { label: t.dashboard.metrics.evolution, value: '+12%/h', color: 'pink' }
                ].map((metric, idx) => (
                  <div key={idx} className="relative group">
                    <div className={`absolute inset-0 bg-${metric.color}-600/20 rounded-lg blur group-hover:blur-md transition-all`}></div>
                    <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                      <div className={`text-2xl font-bold text-${metric.color}-400`}>{metric.value}</div>
                      <div className="text-sm text-gray-400 mt-1">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Neural Network Visualization */}
              <div className="relative h-64 bg-black/30 rounded-xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/5">NEURAL MESH</div>
                </div>
                {/* Animated lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan"></div>
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan-delay"></div>
                <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scan-delay-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Futuristic */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-300">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((item, idx) => {
              const icons = [Shield, BarChart3, Sparkles, Clock];
              const Icon = icons[idx];
              const colors = ['purple', 'blue', 'pink', 'green'];
              const color = colors[idx];
              
              return (
                <div key={idx} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${color}-600/20 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all`}></div>
                  <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
                    <Icon className={`w-12 h-12 text-${color}-400 mb-4`} />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing - Futuristic */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-300">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(t.pricing.plans).map((plan, idx) => {
              const isPro = plan.popular;
              return (
                <div key={idx} className="relative group">
                  {isPro && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-40 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full text-center z-10">
                      RECOMMENDED
                    </div>
                  )}
                  
                  <div className={`absolute inset-0 ${
                    isPro 
                      ? 'bg-gradient-to-b from-purple-600/30 to-blue-600/30' 
                      : 'bg-white/5'
                  } rounded-2xl blur-lg group-hover:blur-xl transition-all`}></div>
                  
                  <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mb-6">{plan.desc}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full relative group/btn">
                      <div className={`absolute inset-0 ${
                        isPro 
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                          : 'bg-white/10'
                      } rounded-lg blur group-hover/btn:blur-md transition-all`}></div>
                      <span className={`relative block py-3 px-6 rounded-lg font-medium ${
                        isPro 
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      } transition-all`}>
                        {t.pricing.cta}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/80 backdrop-blur-xl border-t border-white/10 py-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-50"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Agent Platform
              </span>
            </div>
            <p className="text-gray-400 text-center mb-8">
              The future is not something we enter. The future is something we create.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 AI Agent Platform. Transcending limitations.
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(16rem); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 1; }
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .animate-scan-delay {
          animation: scan 3s linear infinite 1s;
        }
        
        .animate-scan-delay-2 {
          animation: scan 3s linear infinite 2s;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 2s;
        }
        
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}