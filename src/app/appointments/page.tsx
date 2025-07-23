'use client'
import { useState } from 'react'

export default function AppointmentsPage() {
  const [status, setStatus] = useState('')
  
  const testCalendly = async () => {
    const res = await fetch('/api/calendly')
    const data = await res.json()
    setStatus(data.hasApiKey ? '✅ API Key configurada' : '❌ Falta API Key')
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📅 Appointments</h1>
      <button onClick={testCalendly} className="bg-blue-500 text-white px-4 py-2 rounded">
        Test Calendly Connection
      </button>
      {status && <p className="mt-4">{status}</p>}
    </div>
  )
}