// Utilitário para ler e converter os arquivos .md em um array de produtos
import fs from "fs";
import path from "path";

const catalogFiles = [
  "Catálogo de Bases Ortobom para Windsurf.markdown",
  "Catálogo de Cabeceiras Ortobom para Windsurf.markdown",
  "Catálogo de Colchões Ortobom para Windsurf.markdown",
  "Catálogo de Móveis Ortobom para Windsurf.markdown",
  "Catálogo de Roupa de Cama Ortobom para Windsurf.markdown",
  "Catálogo de Travesseiros Ortobom para Windsurf.markdown"
];

const parseMarkdownTable = (content) => {
  const lines = content.split("\n").filter(Boolean);
  const headerIdx = lines.findIndex(l => l.includes("| Nome do Produto "));
  if (headerIdx === -1) return [];
  const headers = lines[headerIdx].split("|").map(h => h.trim()).filter(Boolean);
  const products = [];
  for (let i = headerIdx + 2; i < lines.length; i++) {
    const row = lines[i].split("|").map(h => h.trim());
    if (row.length < headers.length) continue;
    // Monta objeto ignorando preços
    const obj = {};
    headers.forEach((h, idx) => {
      if (!h.toLowerCase().includes("preço") && !h.toLowerCase().includes("desconto") && !h.toLowerCase().includes("parcelamento") && !h.toLowerCase().includes("economia")) {
        obj[h] = row[idx];
      }
    });
    if (obj["Nome do Produto"]) products.push(obj);
  }
  return products;
};

export function getCatalogProducts() {
  const basePath = path.resolve(__dirname, "../../../");
  let allProducts = [];
  for (const file of catalogFiles) {
    const fullPath = path.join(basePath, file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, "utf8");
      allProducts = allProducts.concat(parseMarkdownTable(content));
    }
  }
  return allProducts;
}
