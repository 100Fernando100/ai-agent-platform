const fs = require('fs');
const path = require('path');

function searchInFile(filePath, searchString) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchString)) {
        console.log(`\n✅ ENCONTRADO en: ${filePath}`);
        console.log(`   Línea ${i + 1}: ${lines[i].trim()}`);
        
        // Mostrar contexto
        console.log('\n   Contexto:');
        for (let j = Math.max(0, i - 2); j <= Math.min(lines.length - 1, i + 2); j++) {
          console.log(`   ${j + 1}: ${lines[j]}`);
        }
        return true;
      }
    }
  } catch (err) {
    // Ignorar errores de lectura
  }
  return false;
}

function searchInDirectory(dir, searchString) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Ignorar carpetas del sistema
    if (file === 'node_modules' || file === '.next' || file === '.git') {
      return;
    }
    
    if (stat.isDirectory()) {
      searchInDirectory(filePath, searchString);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      searchInFile(filePath, searchString);
    }
  });
}

console.log('🔍 Buscando archivos con style={{ padding: "2rem" }}...\n');
searchInDirectory('./src', 'style={{ padding: "2rem" }}');
console.log('\n✅ Búsqueda completada');