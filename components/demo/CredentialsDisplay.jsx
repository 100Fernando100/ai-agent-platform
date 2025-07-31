// /components/demo/CredentialsDisplay.jsx
import { useState } from 'react';
import { config } from '../../lib/config';

export function CredentialsDisplay() {
  const [showCredentials, setShowCredentials] = useState(false);

  const maskCredential = (credential, visibleChars = 6) => {
    if (!credential) return 'Not configured';
    if (config.isDemoMode) return credential; // Show full in demo mode
    
    const start = credential.substring(0, visibleChars);
    const masked = '*'.repeat(Math.max(0, credential.length - visibleChars));
    return `${start}${masked}`;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">API Credentials</h3>
        <button
          onClick={() => setShowCredentials(!showCredentials)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {showCredentials ? 'Hide' : 'Show'} Credentials
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-700">Twilio Account SID</label>
          <input
            type={showCredentials ? "text" : "password"}
            value={maskCredential(config.twilio.accountSid)}
            readOnly
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">OpenAI API Key</label>
          <input
            type={showCredentials ? "text" : "password"}
            value={maskCredential(config.openai.apiKey)}
            readOnly
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Calendly API Key</label>
          <input
            type={showCredentials ? "text" : "password"}
            value={maskCredential(config.calendly.apiKey)}
            readOnly
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {config.isDemoMode && (
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-700">
            ℹ️ Demo mode is active. These are sample credentials for demonstration.
          </p>
        </div>
      )}
    </div>
  );
}
