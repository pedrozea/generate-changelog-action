// index.js
const { execSync } = require('child_process');

try {
  console.log('Generating Changelog...');
  
  // Ejecutar standard-version para generar el changelog
  execSync('npx standard-version', { stdio: 'inherit' });
  
  console.log('Changelog generated successfully.');
} catch (error) {
  console.error('Error generating changelog:', error);
  process.exit(1);
}
