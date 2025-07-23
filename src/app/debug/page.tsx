// app/debug/page.jsx (o donde quieras integrarlo)
import ClaudeAnalyzer from '@/components/ClaudeAnalyzer'

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Debug Assistant
        </h1>
        
        <ClaudeAnalyzer />
        
        {/* Puedes agregar más herramientas aquí */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Ejemplos de uso:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Pegar errores de compilación para obtener soluciones</li>
            <li>• Preguntar sobre integraciones específicas</li>
            <li>• Solicitar código para features nuevas</li>
            <li>• Debugging de problemas con APIs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}