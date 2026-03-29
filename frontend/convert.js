import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_DIR = path.join(__dirname, 'Template', 'Template');
const PAGES_DIR = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

function toPascalCase(str) {
  return str
    .replace(/\.html$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function convertHtmlToJsx(html) {
  let jsx = html;

  // Extract <main> content if it exists
  const mainMatch = jsx.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    jsx = mainMatch[1];
  } else {
    // If no main, just take body content and hope htmlFor the best, but remove script/style tags
    const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      jsx = bodyMatch[1];
    }
  }

  // Quick replacements
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/charset=/g, 'charSet=');
  jsx = jsx.replace(/tabindex=/g, 'tabIndex=');
  
  // Convert comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Convert internal links to React Router Links
  jsx = jsx.replace(/<a([^>]*?)href="([^"]*\.html)"([^>]*?)>([\s\S]*?)<\/a>/gi, (match, p1, p2, p3, p4) => {
    let to = p2.replace('.html', '').toLowerCase();
    if (to === 'index') to = '/';
    else to = '/' + to;
    return `<Link${p1}to="${to}"${p3}>${p4}</Link>`;
  });

  // Fix camel case SVG properties
  const svgProps = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'stroke-miterlimit', 'stop-color', 'stop-opacity'];
  svgProps.forEach(prop => {
    const camelCase = prop.replace(/-([a-z])/g, g => g[1].toUpperCase());
    const regex = new RegExp(`${prop}=`, 'gi');
    jsx = jsx.replace(regex, `${camelCase}=`);
  });

  // Common React attribute fixes
  jsx = jsx.replace(/crossorigin=/gi, 'crossOrigin=');
  jsx = jsx.replace(/novalidate=""/gi, 'noValidate');
  jsx = jsx.replace(/autocomplete=/gi, 'autoComplete=');

  // Self close common void tags
  jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
  jsx = jsx.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
  jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');
  jsx = jsx.replace(/<link([^>]*?)(?<!\/)>/g, '<link$1 />');
  jsx = jsx.replace(/<meta([^>]*?)(?<!\/)>/g, '<meta$1 />');

  // Replace style="width: 90%" with style={{ width: '90%' }} - naive regex (handles basic styles)
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styles = styleString.split(';').filter(s => s.trim() !== '');
    const styleObj = {};
    styles.forEach(s => {
      let [key, value] = s.split(':');
      if (key && value) {
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[key] = value.trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  return jsx;
}

const files = fs.readdirSync(TEMPLATE_DIR).filter(file => file.endsWith('.html'));

const components = [];

files.forEach(file => {
  const filePath = path.join(TEMPLATE_DIR, file);
  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  
  const componentName = toPascalCase(file);
  // Special exception htmlFor Home routes if necessary, but we'll just follow the name.
  
  console.log(`Converting ${file} to ${componentName}.jsx ...`);
  const jsxContent = convertHtmlToJsx(htmlContent);
  
  // Include Link import only if used
  const hasLink = jsxContent.includes('<Link');
  const importLink = hasLink ? `import { Link } from 'react-router-dom';\n` : '';

  const finalComponent = `import React from 'react';
${importLink}
export default function ${componentName}() {
  return (
    <>
${jsxContent}
    </>
  );
}
`;

  fs.writeFileSync(path.join(PAGES_DIR, `${componentName}.jsx`), finalComponent, 'utf-8');
  components.push({ name: componentName, file: `${componentName}.jsx` });
});

console.log('Conversion Complete. Processed ' + components.length + ' files.');

// Also generate the routes HTML wrapper just to help out
let routesCode = '';
let importsCode = '';

components.forEach(comp => {
  importsCode += `import ${comp.name} from './pages/${comp.name}';\n`;
  
  // create path based on filename
  let pathName = comp.name === 'Index' ? '/' : `/${comp.name.toLowerCase()}`;
  if (pathName === '/index') pathName = '/'; // double check
  
  routesCode += `        <Route path="${pathName}" element={<${comp.name} />} />\n`;
});

const appJsxHelp = `
// ==========================================
// IMPORT THESE INTO App.jsx
// ==========================================
${importsCode}

// ==========================================
// ADD THESE ROUTES IN App.jsx
// ==========================================
${routesCode}
`;

fs.writeFileSync(path.join(__dirname, 'routes-help.txt'), appJsxHelp, 'utf-8');
console.log('Generated routes-help.txt htmlFor App.jsx updates.');
