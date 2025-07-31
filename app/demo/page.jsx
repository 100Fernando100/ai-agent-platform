'use client';

import { useState } from 'react';
import { CredentialsDisplay } from '../../components/demo/CredentialsDisplay';
import { serviceFactory } from '../../lib/services/factory';

export default function DemoPage() {
  // Service enable/disable toggles
  const [enabledServices, setEnabledServices] = useState({
    twilio: true,
    sms: true,
    calendly: true,
    airtable: true,
    sendgrid: true,
    heygen: true,
    vapi: true
  });

  // Status states for each service
  const [callStatus, setCallStatus] = useState('');
  const [smsStatus, setSmsStatus] = useState('');
  const [appointmentStatus, setAppointmentStatus] = useState('');
  const [airtableStatus, setAirtableStatus] = useState('');
  const [sendgridStatus, setSendgridStatus] = useState('');
  const [heygenStatus, setHeygenStatus] = useState('');
  const [vapiStatus, setVapiStatus] = useState('');

  // Demo profiles for quick switching
  const demoProfiles = {
    basic: { twilio: true, sms: true, sendgrid: true, calendly: false, airtable: false, heygen: false, vapi: false },
    professional: { twilio: true, sms: true, calendly: true, airtable: true, sendgrid: true, heygen: false, vapi: false },
    enterprise: { twilio: true, sms: true, calendly: true, airtable: true, sendgrid: true, heygen: true, vapi: true }
  };

  const applyProfile = (profile) => {
    setEnabledServices(demoProfiles[profile]);
  };

  // Test functions
  const testCall = async () => {
    setCallStatus('Initiating call...');
    const twilioService = serviceFactory.getTwilioService();
    const call = await twilioService.makeCall('+1234567890', '+0987654321');
    setCallStatus(`Call initiated! SID: ${call.sid}`);
  };

  const testSMS = async () => {
    setSmsStatus('Sending SMS...');
    const twilioService = serviceFactory.getTwilioService();
    const message = await twilioService.sendSMS(
      '+1234567890', 
      'This is a demo SMS message!',
      '+0987654321'
    );
    setSmsStatus(`SMS sent! SID: ${message.sid}`);
  };

  const testAppointment = async () => {
    setAppointmentStatus('Checking available slots...');
    const calendlyService = serviceFactory.getCalendlyService();
    const slots = await calendlyService.getAvailableSlots('demo-event');
    setAppointmentStatus(`Found ${slots.collection.length} available slots!`);
  };

  const testAirtable = async () => {
    setAirtableStatus('Fetching database records...');
    const airtableService = serviceFactory.getAirtableService();
    const records = await airtableService.getRecords('demo-base', 'contacts');
    setAirtableStatus(`Found ${records.records.length} contacts in database!`);
  };

  const testSendGrid = async () => {
    setSendgridStatus('Sending test email...');
    const sendgridService = serviceFactory.getSendGridService();
    const email = await sendgridService.sendEmail({
      to: 'demo@example.com',
      subject: 'Demo Test Email',
      text: 'This is a test email from the AI Agent Platform demo!',
      html: '<p>This is a <strong>test email</strong> from the AI Agent Platform demo!</p>'
    });
    setSendgridStatus(`Email sent! Message ID: ${email.messageId}`);
  };

  const testHeyGen = async () => {
    setHeygenStatus('Creating avatar video...');
    const heygenService = serviceFactory.getHeyGenService();
    const video = await heygenService.createAvatar({
      text: 'Hello! This is a demo avatar video from the AI Agent Platform.',
      avatarId: 'avatar1',
      voice: 'voice1'
    });
    setHeygenStatus(`Video processing! ID: ${video.id} - Status: ${video.status}`);
    
    setTimeout(async () => {
      const status = await heygenService.getVideoStatus(video.id);
      setHeygenStatus(`Video ${status.status}! ${status.videoUrl ? 'URL: ' + status.videoUrl : ''}`);
    }, 6000);
  };

  const testVAPI = async () => {
    setVapiStatus('Initiating AI phone call...');
    const vapiService = serviceFactory.getVAPIService();
    const call = await vapiService.createPhoneCall({
      phoneNumber: '+1234567890',
      assistantId: 'asst1'
    });
    setVapiStatus(`AI call started! ID: ${call.id} - Status: ${call.status}`);
    
    setTimeout(async () => {
      const callStatus = await vapiService.getCall(call.id);
      setVapiStatus(`Call ${callStatus.status}. ${callStatus.transcript.length} messages exchanged.`);
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">AI Agent Platform - Demo Mode</h1>
        
        {/* Demo Profiles */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold mb-3">Quick Demo Profiles</h3>
          <div className="flex gap-4">
            <button
              onClick={() => applyProfile('basic')}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Basic Package
            </button>
            <button
              onClick={() => applyProfile('professional')}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Professional Package
            </button>
            <button
              onClick={() => applyProfile('enterprise')}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Enterprise Package
            </button>
          </div>
        </div>

        {/* Service Toggles */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold mb-4">Enabled Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enabledServices.twilio}
                onChange={(e) => setEnabledServices({...enabledServices, twilio: e.target.checked})}
                className="mr-2"
              />
              📞 Phone Calls
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enabledServices.sms}
                onChange={(e) => setEnabledServices({...enabledServices, sms: e.target.checked})}
                className="mr-2"
              />
              💬 SMS
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enabledServices.calendly}
                onChange={(e) => setEnabledServices({...enabledServices, calendly: e.target.checked})}
                className="mr-2"
              />
              📅 Calendly
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enabledServices.airtable}
                onChange={(e) => setEnabledServices({...enabledServices, airtable: e.target.checked})}
                className="mr-2"
              />
              📊 Airtable
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enabledServices.sendgrid}
                onChange={(e) => setEnabledServices({...enabledServices, sendgrid: e.target.checked})}
                className="mr-2"
              />
              📧 SendGrid
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enabledServices.heygen}
                onChange={(e) => setEnabledServices({...enabledServices, heygen: e.target.checked})}
                className="mr-2"
              />
              🎭 HeyGen
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={enabledServices.vapi}
                onChange={(e) => setEnabledServices({...enabledServices, vapi: e.target.checked})}
                className="mr-2"
              />
              🤖 VAPI AI
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Credentials Display */}
          <div>
            <CredentialsDisplay />
          </div>
          
          {/* Feature Testing */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Test Features</h3>
            
            <div className="space-y-4">
              {/* Call Test */}
              {enabledServices.twilio && (
                <div>
                  <button
                    onClick={testCall}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Test Phone Call
                  </button>
                  {callStatus && (
                    <p className="mt-2 text-sm text-gray-600">{callStatus}</p>
                  )}
                </div>
              )}
              
              {/* SMS Test */}
              {enabledServices.sms && (
                <div>
                  <button
                    onClick={testSMS}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                  >
                    Test SMS
                  </button>
                  {smsStatus && (
                    <p className="mt-2 text-sm text-gray-600">{smsStatus}</p>
                  )}
                </div>
              )}
              
              {/* Appointment Test */}
              {enabledServices.calendly && (
                <div>
                  <button
                    onClick={testAppointment}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                  >
                    Test Calendly Integration
                  </button>
                  {appointmentStatus && (
                    <p className="mt-2 text-sm text-gray-600">{appointmentStatus}</p>
                  )}
                </div>
              )}
              
              {/* Airtable Test */}
              {enabledServices.airtable && (
                <div>
                  <button
                    onClick={testAirtable}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
                  >
                    Test Airtable Database
                  </button>
                  {airtableStatus && (
                    <p className="mt-2 text-sm text-gray-600">{airtableStatus}</p>
                  )}
                </div>
              )}
              
              {/* SendGrid Test */}
              {enabledServices.sendgrid && (
                <div>
                  <button
                    onClick={testSendGrid}
                    className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Test SendGrid Email
                  </button>
                  {sendgridStatus && (
                    <p className="mt-2 text-sm text-gray-600">{sendgridStatus}</p>
                  )}
                </div>
              )}
              
              {/* HeyGen Test */}
              {enabledServices.heygen && (
                <div>
                  <button
                    onClick={testHeyGen}
                    className="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
                  >
                    Test HeyGen Avatar
                  </button>
                  {heygenStatus && (
                    <p className="mt-2 text-sm text-gray-600">{heygenStatus}</p>
                  )}
                </div>
              )}
              
              {/* VAPI Test */}
              {enabledServices.vapi && (
                <div>
                  <button
                    onClick={testVAPI}
                    className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
                  >
                    Test VAPI AI Call
                  </button>
                  {vapiStatus && (
                    <p className="mt-2 text-sm text-gray-600">{vapiStatus}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Activity Log */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Demo Activity Log</h3>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">
              All activities in demo mode are simulated and logged here...
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Services enabled: {Object.entries(enabledServices).filter(([_, enabled]) => enabled).map(([service, _]) => service).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
