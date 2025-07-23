 
'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  MessageSquare,
  Calendar,
  Mail,
  Database,
  Bot,
  Users,
  TrendingUp,
  Settings,
  Play,
  Mic,
  PhoneCall,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  X,
  MessageCircle
} from "lucide-react"


export default function AIAgentPlatform() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: "1", role: "assistant", content: "👋 Hi! I'm your AI assistant. How can I help you today?" }
  ])
  const [currentMessage, setCurrentMessage] = useState("")
const [twilioStatus, setTwilioStatus] = useState<string>('Not connected');
const [isConnecting, setIsConnecting] = useState(false);

const connectTwilio = async () => {
  setIsConnecting(true);
  try {
    const response = await fetch('/api/twilio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'test-connection' })
    });
    
    const data = await response.json();
    if (data.success) {
      setTwilioStatus(`Connected: ${data.accountName}`);
      alert(`✅ ${data.message}`);
    } else {
      setTwilioStatus('Connection failed');
      alert(`❌ Error: ${data.error}`);
    }
  } catch (error) {
    console.log(error);
    setTwilioStatus('Connection failed');
    alert('❌ Connection error');
}
  setIsConnecting(false);
};

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setChatMessages([...chatMessages,
        { id: Date.now().toString(), role: "user", content: currentMessage },
        { id: (Date.now() + 1).toString(), role: "assistant", content: "Thanks for your message! This is a demo response. In the full version, I'd provide intelligent responses based on your inquiry." }
      ])
      setCurrentMessage("")
    }
  }

  const handleViewDemo = () => {
    window.open("https://www.loom.com/share/demo-ai-agent-platform", "_blank")
  }

  const handleStartTrial = () => {
    alert("🚀 Welcome! Your free trial is starting. Check your email for setup instructions!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Agent Platform
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              Live
            </Badge>
import Link from "next/link";

<Link href="/settings">
  <Button variant="outline" size="sm">
    <Settings className="w-4 h-4 mr-2" />
    Settings
  </Button>
</Link>


          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Complete AI Agent Solution
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Integrate voice, SMS, appointments, email notifications, and lead capture
            with powerful AI automation. Manage everything from one unified platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600"
              onClick={handleViewDemo}
            >
              <Play className="w-5 h-5 mr-2" />
              View Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleStartTrial}
            >
              Start Free Trial
            </Button>
          </div>
        </section>

        {/* Feature Overview Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("voice-sms")}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Phone className="w-6 h-6 text-blue-600" />
                <CardTitle>Voice & SMS</CardTitle>
              </div>
              <CardDescription>
                Twilio integration for phone calls and text messaging
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Active Numbers</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Messages Today</span>
                  <Badge variant="secondary">127</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Calls Today</span>
                  <Badge variant="secondary">23</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("appointments")}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-green-600" />
                <CardTitle>Appointments</CardTitle>
              </div>
              <CardDescription>
                Calendly integration for booking and management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Today Bookings</span>
                  <Badge variant="secondary">8</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">This Week</span>
                  <Badge variant="secondary">34</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Completion Rate</span>
                  <Badge variant="secondary">94%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("email")}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Mail className="w-6 h-6 text-purple-600" />
                <CardTitle>Email Automation</CardTitle>
              </div>
              <CardDescription>
                SendGrid integration for email campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Emails Sent</span>
                  <Badge variant="secondary">1,247</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Open Rate</span>
                  <Badge variant="secondary">67%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Click Rate</span>
                  <Badge variant="secondary">23%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("leads")}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-orange-600" />
                <CardTitle>Lead Capture</CardTitle>
              </div>
              <CardDescription>
                Web forms and lead management system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">New Leads</span>
                  <Badge variant="secondary">47</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Conversion Rate</span>
                  <Badge variant="secondary">31%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Active Forms</span>
                  <Badge variant="secondary">12</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("integrations")}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-red-600" />
                <CardTitle>Database Sync</CardTitle>
              </div>
              <CardDescription>
                Airtable & Google Sheets integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Connected DBs</span>
                  <Badge variant="secondary">4</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Records Synced</span>
                  <Badge variant="secondary">3,421</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Last Sync</span>
                  <Badge variant="secondary">2m ago</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("agent")}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Mic className="w-6 h-6 text-indigo-600" />
                <CardTitle>Voice AI (Vapi)</CardTitle>
              </div>
              <CardDescription>
                Advanced voice capabilities and AI conversations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Voice Sessions</span>
                  <Badge variant="secondary">156</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Avg Duration</span>
                  <Badge variant="secondary">4.2m</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Satisfaction</span>
                  <Badge variant="secondary">4.8/5</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="agent">AI Agent</TabsTrigger>
            <TabsTrigger value="voice-sms">Voice & SMS</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Performance Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Interactions</span>
                      <span className="text-2xl font-bold text-blue-600">2,487</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Success Rate</span>
                      <span className="text-2xl font-bold text-green-600">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Response Time</span>
                      <span className="text-2xl font-bold text-purple-600">1.3s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <PhoneCall className="w-4 h-4 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Voice call completed</p>
                        <p className="text-xs text-slate-500">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-4 h-4 text-green-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">SMS conversation started</p>
                        <p className="text-xs text-slate-500">5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Appointment booked</p>
                        <p className="text-xs text-slate-500">12 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-orange-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Email campaign sent</p>
                        <p className="text-xs text-slate-500">25 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agent" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>AI Agent Console</CardTitle>
                  <CardDescription>
                    Chat with your AI agent and configure its behavior
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 h-64 overflow-y-auto bg-slate-50">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Bot className="w-6 h-6 text-blue-600 mt-1" />
                          <div className="bg-white rounded-lg p-3 max-w-xs">
                            <p className="text-sm">Hi! I am your AI assistant. I can help with customer inquiries, book appointments, and manage leads. Try asking me something!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type your message..."
                        className="flex-1"
                        onKeyPress={(e) => e.key === 'Enter' && alert(`Demo: AI would respond to: ${(e.target as HTMLInputElement).value}`)}
                      />
                      <Button onClick={() => alert("Demo: AI agent conversation started!")}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Agent Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Agent Name</label>
                      <Input defaultValue="AI Assistant" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Personality</label>
                      <select className="w-full p-2 border rounded">
                        <option>Professional & Friendly</option>
                        <option>Casual & Helpful</option>
                        <option>Formal & Knowledgeable</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Response Style</label>
                      <Textarea placeholder="Define how the agent should respond to customers..." />
                    </div>
                    <Button className="w-full">Save Configuration</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
<TabsContent value="voice-sms" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Voice & SMS Configuration
                </CardTitle>
                <CardDescription>Configure Twilio integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Twilio Account SID" />
                <Input placeholder="Twilio Auth Token" type="password" />
                <Input placeholder="Phone Number" />
                <Button onClick={connectTwilio} disabled={isConnecting}>
  {isConnecting ? 'Connecting...' : 'Connect Twilio'}
</Button>
<p className="text-sm text-gray-600">Status: {twilioStatus}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
 	<TabsContent value="appointments" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Appointment Booking
                </CardTitle>
                <CardDescription>Manage your calendar integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Calendly API Key" type="password" />
                <Button>Connect Calendar</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
	<TabsContent value="email" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Configuration
                </CardTitle>
                <CardDescription>Configure SendGrid integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="SendGrid API Key" type="password" />
                <Input placeholder="From Email" />
                <Button>Connect SendGrid</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Lead Management
                </CardTitle>
                <CardDescription>Manage your lead capture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Lead management tools and analytics</p>
                <Button>View All Leads</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Airtable</CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="Airtable API Key" type="password" />
                <Button className="mt-2">Connect</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vapi</CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="Vapi API Key" type="password" />
                <Button className="mt-2">Connect</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Heygen</CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="Heygen API Key" type="password" />
                <Button className="mt-2">Connect</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
</Tabs>
      </main>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <Button
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        ) : (
          <Card className="w-80 h-96 shadow-xl">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-sm">AI Assistant</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsChatOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-56 overflow-y-auto mb-4 space-y-2">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-2 rounded-lg text-sm ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-900'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
