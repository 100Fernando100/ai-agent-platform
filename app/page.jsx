'use client';
import React, { useState, useEffect } from 'react';
import { 
  Phone, Calendar, Mail, Users, Database, Mic, Bot, 
  Play, Globe, Menu, X, Check, Star, ChevronRight,
  Shield, Zap, Clock, BarChart3, MessageSquare, 
  Building2, Rocket, ArrowRight
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
      badge: "Trusted by 500+ companies worldwide",
      title: "Complete AI Agent Solution",
      subtitle: "Integrate voice, SMS, appointments, email notifications, and lead capture with powerful AI automation. Manage everything from one unified platform.",
      cta1: "Start Free Trial",
      cta2: "Watch Video",
      stats: {
        services: { value: "11+", label: "Services Integrated" },
        availability: { value: "24/7", label: "AI Availability" },
        uptime: { value: "99.9%", label: "Uptime Guarantee" },
        languages: { value: "50+", label: "Languages Supported" }
      }
    },
    services: {
      title: "Everything you need in one platform",
      subtitle: "Powerful AI-driven tools to automate and scale your business communications",
      items: {
        voiceSms: {
          title: "Voice & SMS",
          desc: "Twilio-powered calls and messaging with AI conversation capabilities",
          features: ["Automated voice calls", "Two-way SMS conversations", "Call recording & transcription", "Multi-language support"]
        },
        appointments: {
          title: "Appointments",
          desc: "Calendly integration for seamless booking and scheduling",
          features: ["Automated scheduling", "Calendar sync", "Reminder notifications", "Timezone management"]
        },
        email: {
          title: "Email Automation",
          desc: "SendGrid integration for powerful email campaigns",
          features: ["Automated campaigns", "Personalization", "Analytics & tracking", "Template library"]
        },
        leads: {
          title: "Lead Capture",
          desc: "Web forms and lead management system",
          features: ["Custom forms", "Lead scoring", "CRM integration", "Conversion tracking"]
        },
        database: {
          title: "Database Sync",
          desc: "Airtable & Google Sheets integration",
          features: ["Real-time sync", "Data validation", "Automated backups", "Custom workflows"]
        },
        voiceAI: {
          title: "Voice AI (Vapi)",
          desc: "Advanced conversational AI with Vapi technology",
          features: ["Natural conversations", "Context awareness", "Custom training", "24/7 availability"]
        },
        assistant: {
          title: "AI Assistant",
          desc: "Your intelligent business companion",
          features: ["Task automation", "Smart insights", "Learning capabilities", "Multi-channel support"]
        },
        heyGen: {
          title: "HeyGen Integration",
          desc: "AI video generation for personalized content",
          features: ["Personalized videos", "Multi-language", "Brand templates", "Automated creation"]
        }
      }
    },
    dashboard: {
      title: "Live Dashboard Preview",
      subtitle: "See your AI agents in action",
      phoneNumbers: "Phone Numbers",
      recentConversations: "Recent Conversations",
      metrics: {
        activeAgents: "Active Agents",
        todaysCalls: "Today's Calls",
        responseTime: "Avg Response Time",
        satisfaction: "Satisfaction Rate"
      }
    },
    features: {
      title: "Built for modern businesses",
      subtitle: "Enterprise-grade features designed to scale with your growth",
      items: [
        {
          title: "Enterprise Security",
          desc: "Bank-level encryption and compliance with industry standards"
        },
        {
          title: "Advanced Analytics",
          desc: "Real-time insights and detailed performance metrics"
        },
        {
          title: "Seamless Integration",
          desc: "Connect with your existing tools and workflows"
        },
        {
          title: "Instant Deployment",
          desc: "Get up and running in minutes, not weeks"
        }
      ]
    },
    pricing: {
      title: "Choose the plan that fits your business needs",
      subtitle: "All plans include core features. Scale as you grow.",
      plans: {
        starter: {
          name: "Starter",
          price: "$297",
          period: "/month",
          desc: "Perfect for small businesses getting started",
          features: [
            "Up to 1,000 conversations/month",
            "Basic AI assistant",
            "Email & SMS automation",
            "Standard support",
            "5 team members"
          ]
        },
        professional: {
          name: "Professional",
          price: "$797",
          period: "/month",
          desc: "For growing teams that need more power",
          popular: true,
          features: [
            "Up to 10,000 conversations/month",
            "Advanced AI with custom training",
            "All integrations included",
            "Priority support",
            "Unlimited team members",
            "API access"
          ]
        },
        enterprise: {
          name: "Enterprise",
          price: "Custom",
          period: "",
          desc: "Tailored solutions for large organizations",
          features: [
            "Unlimited conversations",
            "Dedicated AI instances",
            "Custom integrations",
            "24/7 phone support",
            "SLA guarantee",
            "On-premise option"
          ]
        }
      },
      cta: "Start Free Trial"
    },
    testimonials: {
      title: "Trusted by industry leaders",
      items: [
        {
          text: "This platform revolutionized our customer service. Response times dropped by 80% while satisfaction soared.",
          author: "Sarah Chen",
          role: "CEO, TechVentures",
          rating: 5
        },
        {
          text: "The AI capabilities are incredible. It's like having a team of 50 agents working 24/7.",
          author: "Michael Rodriguez",
          role: "COO, GlobalReach",
          rating: 5
        },
        {
          text: "Integration was seamless. We were up and running in less than a day.",
          author: "Emma Thompson",
          role: "CTO, InnovateCorp",
          rating: 5
        }
      ]
    },
    footer: {
      tagline: "Empowering businesses with intelligent automation",
      product: "Product",
      company: "Company",
      resources: "Resources",
      legal: "Legal",
      copyright: "© 2025 AI Agent Platform. All rights reserved."
    }
  },
  es: {
    nav: {
      dashboard: "Panel",
      aiAgent: "Agente IA",
      voiceSms: "Voz y SMS",
      appointments: "Citas",
      email: "Correo",
      leads: "Prospectos",
      integrations: "Integraciones",
      investorRelations: "Relación con Inversores",
      nextProject: "Próximamente"
    },
    hero: {
      badge: "Confiado por más de 500 empresas en todo el mundo",
      title: "Solución Completa de Agente IA",
      subtitle: "Integra voz, SMS, citas, notificaciones por correo y captura de leads con potente automatización IA. Gestiona todo desde una plataforma unificada.",
      cta1: "Prueba Gratuita",
      cta2: "Ver Video",
      stats: {
        services: { value: "11+", label: "Servicios Integrados" },
        availability: { value: "24/7", label: "Disponibilidad IA" },
        uptime: { value: "99.9%", label: "Tiempo de Actividad" },
        languages: { value: "50+", label: "Idiomas Soportados" }
      }
    },
    services: {
      title: "Todo lo que necesitas en una plataforma",
      subtitle: "Herramientas potentes impulsadas por IA para automatizar y escalar tus comunicaciones empresariales",
      items: {
        voiceSms: {
          title: "Voz y SMS",
          desc: "Llamadas y mensajería con Twilio e IA conversacional",
          features: ["Llamadas de voz automatizadas", "Conversaciones SMS bidireccionales", "Grabación y transcripción", "Soporte multiidioma"]
        },
        appointments: {
          title: "Citas",
          desc: "Integración con Calendly para reservas sin problemas",
          features: ["Programación automatizada", "Sincronización de calendario", "Notificaciones de recordatorio", "Gestión de zonas horarias"]
        },
        email: {
          title: "Automatización de Correo",
          desc: "Integración con SendGrid para campañas potentes",
          features: ["Campañas automatizadas", "Personalización", "Análisis y seguimiento", "Biblioteca de plantillas"]
        },
        leads: {
          title: "Captura de Leads",
          desc: "Formularios web y sistema de gestión de leads",
          features: ["Formularios personalizados", "Puntuación de leads", "Integración CRM", "Seguimiento de conversiones"]
        },
        database: {
          title: "Sincronización de BD",
          desc: "Integración con Airtable y Google Sheets",
          features: ["Sincronización en tiempo real", "Validación de datos", "Copias de seguridad automáticas", "Flujos personalizados"]
        },
        voiceAI: {
          title: "IA de Voz (Vapi)",
          desc: "IA conversacional avanzada con tecnología Vapi",
          features: ["Conversaciones naturales", "Conciencia del contexto", "Entrenamiento personalizado", "Disponibilidad 24/7"]
        },
        assistant: {
          title: "Asistente IA",
          desc: "Tu compañero de negocios inteligente",
          features: ["Automatización de tareas", "Insights inteligentes", "Capacidades de aprendizaje", "Soporte multicanal"]
        },
        heyGen: {
          title: "Integración HeyGen",
          desc: "Generación de video IA para contenido personalizado",
          features: ["Videos personalizados", "Multiidioma", "Plantillas de marca", "Creación automatizada"]
        }
      }
    },
    dashboard: {
      title: "Vista Previa del Panel en Vivo",
      subtitle: "Ve tus agentes IA en acción",
      phoneNumbers: "Números de Teléfono",
      recentConversations: "Conversaciones Recientes",
      metrics: {
        activeAgents: "Agentes Activos",
        todaysCalls: "Llamadas de Hoy",
        responseTime: "Tiempo de Respuesta",
        satisfaction: "Satisfacción"
      }
    },
    features: {
      title: "Construido para empresas modernas",
      subtitle: "Características de nivel empresarial diseñadas para escalar con tu crecimiento",
      items: [
        {
          title: "Seguridad Empresarial",
          desc: "Encriptación de nivel bancario y cumplimiento con estándares de la industria"
        },
        {
          title: "Análisis Avanzados",
          desc: "Insights en tiempo real y métricas detalladas de rendimiento"
        },
        {
          title: "Integración Sin Problemas",
          desc: "Conecta con tus herramientas y flujos de trabajo existentes"
        },
        {
          title: "Despliegue Instantáneo",
          desc: "Ponte en marcha en minutos, no en semanas"
        }
      ]
    },
    pricing: {
      title: "Elige el plan que se adapte a tu negocio",
      subtitle: "Todos los planes incluyen características principales. Escala según crezcas.",
      plans: {
        starter: {
          name: "Inicial",
          price: "$297",
          period: "/mes",
          desc: "Perfecto para pequeñas empresas que comienzan",
          features: [
            "Hasta 1,000 conversaciones/mes",
            "Asistente IA básico",
            "Automatización de correo y SMS",
            "Soporte estándar",
            "5 miembros del equipo"
          ]
        },
        professional: {
          name: "Profesional",
          price: "$797",
          period: "/mes",
          desc: "Para equipos en crecimiento que necesitan más poder",
          popular: true,
          features: [
            "Hasta 10,000 conversaciones/mes",
            "IA avanzada con entrenamiento personalizado",
            "Todas las integraciones incluidas",
            "Soporte prioritario",
            "Miembros ilimitados del equipo",
            "Acceso API"
          ]
        },
        enterprise: {
          name: "Empresa",
          price: "Personalizado",
          period: "",
          desc: "Soluciones a medida para grandes organizaciones",
          features: [
            "Conversaciones ilimitadas",
            "Instancias IA dedicadas",
            "Integraciones personalizadas",
            "Soporte telefónico 24/7",
            "Garantía SLA",
            "Opción en las instalaciones"
          ]
        }
      },
      cta: "Comenzar Prueba Gratuita"
    },
    testimonials: {
      title: "Confiado por líderes de la industria",
      items: [
        {
          text: "Esta plataforma revolucionó nuestro servicio al cliente. Los tiempos de respuesta cayeron un 80% mientras la satisfacción se disparó.",
          author: "Sarah Chen",
          role: "CEO, TechVentures",
          rating: 5
        },
        {
          text: "Las capacidades de IA son increíbles. Es como tener un equipo de 50 agentes trabajando 24/7.",
          author: "Michael Rodriguez",
          role: "COO, GlobalReach",
          rating: 5
        },
        {
          text: "La integración fue perfecta. Estuvimos funcionando en menos de un día.",
          author: "Emma Thompson",
          role: "CTO, InnovateCorp",
          rating: 5
        }
      ]
    },
    footer: {
      tagline: "Empoderando negocios con automatización inteligente",
      product: "Producto",
      company: "Empresa",
      resources: "Recursos",
      legal: "Legal",
      copyright: "© 2025 AI Agent Platform. Todos los derechos reservados."
    }
  }
};

export default function AIAgentPlatform() {
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">AI Agent Platform</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-6">
                {Object.entries(t.nav).map(([key, value]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
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
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{lang.toUpperCase()}</span>
              </button>

              {/* CTA Button */}
              <button className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Started
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="px-4 py-4 space-y-2">
                {Object.entries(t.nav).map(([key, value]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {value}
                  </a>
                ))}
                <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              {t.hero.badge}
            </span>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                <span>{t.hero.cta1}</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all">
                <Play className="w-5 h-5 mr-2" />
                <span>{t.hero.cta2}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.values(t.hero.stats).map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === service.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Content */}
          {activeService && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <activeService.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{activeService.title}</h3>
                      <p className="text-gray-600">{activeService.desc}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
                    <activeService.icon className="w-32 h-32 text-blue-600 opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.dashboard.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.dashboard.subtitle}
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Phone Numbers */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">{t.dashboard.phoneNumbers}</h3>
                <div className="space-y-3">
                  {['+1 (555) 123-4567', '+1 (555) 987-6543'].map((phone, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <span>{phone}</span>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Conversations */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">{t.dashboard.recentConversations}</h3>
                <div className="space-y-3">
                  {[
                    { name: 'John Smith', message: 'Thanks for booking my appointment!', time: '2 min ago' },
                    { name: 'Sarah Johnson', message: "I'd like to schedule a consultation.", time: '15 min ago' }
                  ].map((conv, idx) => (
                    <div key={idx} className="p-3 bg-gray-700 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">{conv.name}</span>
                        <span className="text-xs text-gray-400">{conv.time}</span>
                      </div>
                      <p className="text-sm text-gray-300">{conv.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: t.dashboard.metrics.activeAgents, value: '8' },
                { label: t.dashboard.metrics.todaysCalls, value: '127' },
                { label: t.dashboard.metrics.responseTime, value: '0.3s' },
                { label: t.dashboard.metrics.satisfaction, value: '98%' }
              ].map((metric, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{metric.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((item, idx) => {
              const icons = [Shield, BarChart3, Zap, Clock];
              const Icon = icons[idx];
              return (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(t.pricing.plans).map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                  plan.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full text-center">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {t.pricing.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.testimonials.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{item.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{item.author}</p>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">AI Agent Platform</span>
              </div>
              <p className="text-gray-400">
                {t.footer.tagline}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.resources}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Hidden Sections for Navigation */}
      <div id="investorRelations" className="hidden">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <Building2 className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t.nav.investorRelations}</h2>
            <p className="text-xl text-gray-600">Coming soon. Contact us for investment opportunities.</p>
          </div>
        </section>
      </div>

      <div id="nextProject" className="hidden">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <Rocket className="w-20 h-20 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t.nav.nextProject}</h2>
            <p className="text-xl text-gray-600">Exciting new features are on the way. Stay tuned!</p>
          </div>
        </section>
      </div>
    </div>
  );
}