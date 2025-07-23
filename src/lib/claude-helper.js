// lib/claude-helper.js
// Helper para usar Claude desde cualquier parte de tu app

export async function askClaude(input, options = {}) {
  const {
    context = '',
    systemPrompt = 'Eres un asistente experto en desarrollo.',
    maxTokens = 4096,
    temperature = 0.3
  } = options

  try {
    const response = await fetch('/api/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input,
        context,
        systemPrompt,
        maxTokens,
        temperature
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Error calling Claude API')
    }

    return {
      success: true,
      response: data.response,
      usage: data.usage
    }
  } catch (error) {
    console.error('Claude Helper Error:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Función específica para debugging
export async function debugWithClaude(error, codeContext = '') {
  return askClaude(error, {
    context: `Código relevante:\n${codeContext}`,
    systemPrompt: 'Eres un experto en debugging. Analiza el error y proporciona una solución clara y concisa.',
    temperature: 0.1 // Muy determinístico para debugging
  })
}

// Función para generar código
export async function generateCode(description, techStack = '') {
  return askClaude(description, {
    context: `Tech stack: ${techStack}`,
    systemPrompt: 'Eres un experto programador. Genera código limpio, eficiente y bien comentado.',
    temperature: 0.5
  })
}