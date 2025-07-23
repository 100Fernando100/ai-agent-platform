// app/api/claude/route.js (para App Router)
// O pages/api/claude.js (para Pages Router)

import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request) {
  try {
    const { 
      input, 
      context = '', 
      systemPrompt = 'Eres un asistente experto en desarrollo y debugging.',
      maxTokens = 4096,
      temperature = 0.3
    } = await request.json()

    // Validar input
    if (!input) {
      return Response.json(
        { error: 'Input is required' },
        { status: 400 }
      )
    }

    // Llamar a Claude
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: maxTokens,
      temperature: temperature,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: context ? `${context}\n\n${input}` : input
        }
      ]
    })

    // Extraer la respuesta
    const response = message.content[0].text

    return Response.json({
      success: true,
      response: response,
      usage: {
        input_tokens: message.usage.input_tokens,
        output_tokens: message.usage.output_tokens,
        total_tokens: message.usage.input_tokens + message.usage.output_tokens
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Claude API Error:', error)
    
    // Manejo de errores específicos
    if (error.status === 401) {
      return Response.json(
        { error: 'Invalid API key' },
        { status: 401 }
      )
    }
    
    if (error.status === 429) {
      return Response.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      )
    }

    return Response.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}

// Si usas Pages Router, exporta como default
// export default async function handler(req, res) { ... }