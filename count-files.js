const fs = require('fs');
const path = require('path');

// Función para contar archivos recursivamente
function countFiles(dir, fileCount = {}) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Ignorar node_modules y .next
    if (file === 'node_modules' || file === '.next' || file === '.git') {
      return;
    }
    
    if (stat.isDirectory()) {
      countFiles(filePath, fileCount);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext) {
        fileCount[ext] = (fileCount[ext] || 0) + 1;
      }
    }
  });
  
  return fileCount;
}

// Ejecutar el contador
console.log('Contando archivos en tu proyecto...\n');

const projectPath = process.cwd();
const results = countFiles(projectPath);

// Mostrar resultados ordenados
console.log('📊 RESUMEN DE ARCHIVOS:\n');
console.log('='.repeat(30));

// Archivos de código principales
const codeFiles = {
  '.ts': results['.ts'] || 0,
  '.tsx': results['.tsx'] || 0,
  '.js': results['.js'] || 0,
  '.jsx': results['.jsx'] || 0
};

Object.entries(codeFiles).forEach(([ext, count]) => {
  if (count > 0) {
    console.log(`${ext.padEnd(6)} : ${count} archivos`);
  }
});

console.log('='.repeat(30));

// Decisión
const tsFiles = (results['.ts'] || 0) + (results['.tsx'] || 0);
const jsFiles = (results['.js'] || 0) + (results['.jsx'] || 0);

console.log(`\n📌 RECOMENDACIÓN:`);
if (tsFiles > jsFiles) {
  console.log(`✅ Usa TypeScript (.tsx/.ts)`);
  console.log(`   Tienes ${tsFiles} archivos TS vs ${jsFiles} archivos JS`);
} else if (jsFiles > tsFiles) {
  console.log(`✅ Usa JavaScript (.jsx/.js)`);
  console.log(`   Tienes ${jsFiles} archivos JS vs ${tsFiles} archivos TS`);
} else {
  console.log(`⚠️  Mismo número de archivos. Revisa tu tsconfig.json`);
}

// Mostrar todos los demás tipos de archivo
console.log(`\n📁 Otros archivos encontrados:`);
Object.entries(results).forEach(([ext, count]) => {
  if (!['.ts', '.tsx', '.js', '.jsx'].includes(ext) && count > 0) {
    console.log(`${ext.padEnd(6)} : ${count}`);
  }
});