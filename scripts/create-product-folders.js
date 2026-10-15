const fs = require("node:fs");
const path = require("node:path");

const products = [
  "Artigo",
  "Activ Go-Fort",
  "Dol Activ",
  "Mag 8B",
  "Mind7 Examen",
  "Isoline",
  "Lax-Activ",
  "Oil Activ",
  "Actifine",
  "MKM Brightening X4"
];

const outputDirectory = path.join(__dirname, "..", "assets", "images", "produits");

function toFolderName(name) {
  if (typeof name !== "string" || !name.trim()) {
    throw new TypeError(`Nom de produit invalide : ${name}`);
  }

  const folderName = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  if (!folderName) {
    throw new Error(`Le nom de produit ne contient aucun caractère utilisable : ${name}`);
  }

  return folderName;
}

try {
  fs.mkdirSync(outputDirectory, { recursive: true });

  for (const product of products) {
    const folderName = toFolderName(product);
    const folderPath = path.join(outputDirectory, folderName);

    if (fs.existsSync(folderPath)) {
      if (!fs.statSync(folderPath).isDirectory()) {
        throw new Error(`Un fichier existe déjà à la place du dossier : ${folderPath}`);
      }

      console.log(`Déjà présent : ${folderName}`);
      continue;
    }

    fs.mkdirSync(folderPath);
    console.log(`Dossier créé : ${folderName}`);
  }
} catch (error) {
  console.error("Impossible de créer les dossiers produits :", error.message);
  process.exitCode = 1;
}
