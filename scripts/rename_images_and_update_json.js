// Script para padronizar nomes de arquivos de imagem e atualizar o products.json
// Uso: node scripts/rename_images_and_update_json.js

const fs = require('fs');
const path = require('path');

const imagesDir = path.resolve(__dirname, '../public/produtos-colchoes-itajai');
const productsJsonPath = path.resolve(__dirname, '../src/data/products.json');

function normalizeFilename(filename) {
  // Remove acentos, substitui espaços por '-', minúsculas
  const ext = path.extname(filename);
  let name = path.basename(filename, ext);
  name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // remove acentos
  name = name.replace(/\s+/g, '-'); // espaços por hífen
  name = name.replace(/[^a-zA-Z0-9._-]/g, ''); // remove caracteres especiais
  name = name.toLowerCase();
  return name + ext.toLowerCase();
}

// 1. Renomear arquivos de imagem
const files = fs.readdirSync(imagesDir);
const nameMap = {};
files.forEach((file) => {
  const normalized = normalizeFilename(file);
  if (file !== normalized && normalized.length > 0) {
    fs.renameSync(path.join(imagesDir, file), path.join(imagesDir, normalized));
  }
  nameMap[file] = normalized;
});

// 2. Atualizar products.json
const products = JSON.parse(fs.readFileSync(productsJsonPath, 'utf-8'));
products.forEach((product) => {
  if (product.imagens && Array.isArray(product.imagens)) {
    product.imagens = product.imagens.map(img => nameMap[img] || normalizeFilename(img));
  }
});
fs.writeFileSync(productsJsonPath, JSON.stringify(products, null, 2), 'utf-8');

console.log('Renomeação e atualização concluídas!');
