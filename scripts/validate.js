#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating ExpressAid website files...');

// Check required files exist
const requiredFiles = [
  'index.html',
  'styles.css',
  'assets/'
];

let hasErrors = false;

// Validate required files
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ Found: ${file}`);
  } else {
    console.error(`❌ Missing: ${file}`);
    hasErrors = true;
  }
});

// Check HTML file structure
try {
  const htmlContent = fs.readFileSync('index.html', 'utf8');
  
  // Check for DOCTYPE
  if (!htmlContent.includes('<!DOCTYPE html>')) {
    console.error('❌ Missing DOCTYPE declaration');
    hasErrors = true;
  } else {
    console.log('✅ Valid DOCTYPE found');
  }
  
  // Check for viewport meta tag
  if (!htmlContent.includes('viewport')) {
    console.warn('⚠️  Missing viewport meta tag (recommended for mobile)');
  } else {
    console.log('✅ Viewport meta tag found');
  }
  
  // Check for title
  if (!htmlContent.includes('<title>')) {
    console.error('❌ Missing title tag');
    hasErrors = true;
  } else {
    console.log('✅ Title tag found');
  }
  
} catch (error) {
  console.error('❌ Error reading index.html:', error.message);
  hasErrors = true;
}

// Check CSS file
try {
  const cssContent = fs.readFileSync('styles.css', 'utf8');
  if (cssContent.length < 100) {
    console.warn('⚠️  CSS file seems small, check if it contains expected content');
  } else {
    console.log('✅ CSS file looks good');
  }
} catch (error) {
  console.error('❌ Error reading styles.css:', error.message);
  hasErrors = true;
}

// Check assets directory
try {
  const assets = fs.readdirSync('assets');
  if (assets.length === 0) {
    console.warn('⚠️  Assets directory is empty');
  } else {
    console.log(`✅ Found ${assets.length} files in assets directory`);
    assets.forEach(asset => {
      console.log(`   - ${asset}`);
    });
  }
} catch (error) {
  console.error('❌ Error reading assets directory:', error.message);
  hasErrors = true;
}

// Check for common image formats
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
const assets = fs.readdirSync('assets');
const imageFiles = assets.filter(file => 
  imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
);

if (imageFiles.length > 0) {
  console.log(`✅ Found ${imageFiles.length} image files`);
} else {
  console.warn('⚠️  No image files found in assets directory');
}

// Performance checks
try {
  const htmlSize = fs.statSync('index.html').size;
  const cssSize = fs.statSync('styles.css').size;
  
  if (htmlSize > 500000) { // 500KB
    console.warn('⚠️  HTML file is large, consider optimization');
  }
  
  if (cssSize > 200000) { // 200KB
    console.warn('⚠️  CSS file is large, consider optimization');
  }
  
  console.log(`📊 File sizes: HTML ${(htmlSize/1024).toFixed(1)}KB, CSS ${(cssSize/1024).toFixed(1)}KB`);
} catch (error) {
  console.error('❌ Error checking file sizes:', error.message);
}

// Summary
console.log('\n📋 Validation Summary:');
if (hasErrors) {
  console.error('❌ Validation failed - please fix the errors above');
  process.exit(1);
} else {
  console.log('✅ All validations passed!');
  console.log('🚀 Website is ready for deployment');
}

console.log('\n💡 Deployment Tips:');
console.log('   - Ensure Azure Static Web Apps is configured');
console.log('   - Set up custom domain if needed');
console.log('   - Configure SSL certificate');
console.log('   - Set up monitoring and analytics'); 