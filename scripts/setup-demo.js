const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up demo mode...\n');

// Copy .env.demo to .env
const envDemoPath = path.join(__dirname, '..', '.env.demo');
const envPath = path.join(__dirname, '..', '.env');

if (fs.existsSync(envDemoPath)) {
  fs.copyFileSync(envDemoPath, envPath);
  console.log('✅ Copied .env.demo to .env');
} else {
  console.error('❌ .env.demo file not found!');
  process.exit(1);
}

console.log('\n🎉 Demo mode setup complete!');
console.log('Run "npm run dev" to start the application in demo mode.');