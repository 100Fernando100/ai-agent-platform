const fs = require('fs');
const path = require('path');

// Lista de archivos a arreglar
const filesToFix = [
  'src/app/email/page.tsx',
  'src/app/integrations/page.tsx',
  'src/app/leads/page.tsx',
  'src/app/settings/page.tsx',
  'src/app/voice-sms/page.tsx'
];

console.log('🔧 Arreglando archivos con problemas de estilo...\n');

filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Reemplazar style={{ padding: "2rem" }} con className
    content = content.replace(
      'style={{ padding: "2rem" }}',
      'className="p-8"'
    );
    
    // También arreglar otros estilos inline si existen
    content = content.replace(
      'style={{ fontSize: "24px", fontWeight: "bold" }}',
      'className="text-2xl font-bold"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Arreglado: ${filePath}`);
  } catch (err) {
    console.log(`❌ Error en: ${filePath} - ${err.message}`);
  }
});

console.log('\n✨ ¡Listo! Ahora ejecuta: npm run dev');