'use client'
// components/ClaudeAnalyzer.jsx
import { useState } from 'react'

export default function ClaudeAnalyzer() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [usage, setUsage] = useState(null)

  const analyzeWithClaude = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: input,
          context: 'Estoy desarrollando una plataforma AI con integraciones de Twilio, Calendly, SendGrid.',
          systemPrompt: 'Eres un experto en desarrollo web, debugging y integraciones de APIs. Proporciona soluciones concretas y cÃ³digo cuando sea necesario.',
          temperature: 0.3 // MÃ¡s determinÃ­stico para cÃ³digo
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Error al analizar')
      }

      setResponse(data.response)
      setUsage(data.usage)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      analyzeWithClaude()
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Claude 3 Sonnet Analyzer</h2>
      
      {/* Input Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Pega tu error o pregunta:
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ejemplo: Failed to compile... o Â¿CÃ³mo integro Calendly?"
          className="w-full h-32 p-3 border rounded-lg resize-none"
          disabled={loading}
        />
        <p className="text-xs text-gray-500 mt-1">
          Tip: Ctrl+Enter para enviar
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={analyzeWithClaude}
        disabled={loading || !input.trim()}
        className={`
          px-6 py-2 rounded-lg font-medium transition-colors
          ${loading || !input.trim() 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600 text-white'}
        `}
      >
        {loading ? 'Analizando...' : 'Analizar con Claude'}
      </button>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}

      {/* Response Display */}
      {response && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Respuesta de Claude:</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {response}
            </pre>
          </div>
          
          {/* Usage Stats */}
          {usage && (
            <div className="mt-2 text-xs text-gray-500">
              Tokens usados: {usage.total_tokens} 
              (Input: {usage.input_tokens}, Output: {usage.output_tokens})
            </div>
          )}
        </div>
      )}
    </div>
  )
}
