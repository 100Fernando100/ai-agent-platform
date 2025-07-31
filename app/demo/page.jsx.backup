
'use client';

import { useState } from 'react';
import { CredentialsDisplay } from '../../components/demo/CredentialsDisplay';
import { serviceFactory } from '../../lib/services/factory';

export default function DemoPage() {
  const [callStatus, setCallStatus] = useState('');
  const [smsStatus, setSmsStatus] = useState('');
  const [appointmentStatus, setAppointmentStatus] = useState('');

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

  return (
    <div className="min-h-screen bg-gray-50">
         
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">AI Agent Platform - Demo Mode</h1>
        
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
              
              {/* SMS Test */}
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
              
              {/* Appointment Test */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
