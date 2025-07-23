'use client'
import SMSForm from '@/components/SMSForm';

export default function VoiceSMSPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📞 Voice & SMS</h1>
      <p className="mb-8">Conecta con Twilio, Vapi y gestiona mensajes o llamadas.</p>
      
      <SMSForm />
    </div>
  );
}