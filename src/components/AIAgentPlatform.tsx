'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  TrendingUp,
  PhoneCall,
  MessageSquare,
  Calendar,
  Mail,
  Users,
  Phone,
  Bot,
  Send,
  MessageCircle,
  X,
} from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, role: 'assistant', content: 'Hello! How can I help you today?' },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [twilioStatus, setTwilioStatus] = useState('Disconnected');
  const [isConnecting, setIsConnecting] = useState(false);

  const connectTwilio = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setTwilioStatus('Connected');
      setIsConnecting(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { id: prev.length + 1, role: 'user', content: currentMessage },
    ]);
    setCurrentMessage('');
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          role: 'assistant',
          content: "Thanks! I'll get back to you shortly.",
        },
      ]);
    }, 600);
  };

  return (
    <div className="p-6">
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
                          <p className="text-sm">
                            Hi! I am your AI assistant. I can help with customer inquiries,
                            book appointments, and manage leads. Try asking me something!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      className="flex-1"
                      onKeyPress={(e) =>
                        e.key === 'Enter' &&
                        alert(`Demo: AI would respond to: ${(e.target as HTMLInputElement).value}`)
                      }
                    />
                    <Button onClick={() => alert('Demo: AI agent conversation started!')}>
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
                    className={`flex ${
                      message.role === 'user'
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
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
  );
}