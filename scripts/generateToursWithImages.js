import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "./public/");
const dataDir = path.join(process.cwd(), "./dictionaries/");

// idiomas
const languages = ["en", "pt-BR", "zh-CN"];

languages.forEach(lang => {
  const filePath = path.join(dataDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Arquivo não encontrado: ${lang}.json`);
    return;
  }

  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const tours = jsonData.ToursData;

  tours.forEach(tour => {
    const tourDir = path.join(baseDir, tour.slug);

    if (fs.existsSync(tourDir)) {
      const files = fs
        .readdirSync(tourDir)
        .filter(file => /\.(jpe?g|png|jfif)$/i.test(file))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

      tour.img = files.map((file, index) => ({
        src: `${tour.slug}/${file}`,
        alt: `${tour.name} photo ${index + 1}`,
        index
      }));
    } else {
      console.warn(`⚠️ Pasta não encontrada para: ${tour.slug}`);
      tour.img = [];
    }
  });

  const outputPath = path.join(dataDir, `${lang}_toursData_with_images.json`);
  fs.writeFileSync(outputPath, JSON.stringify({ ToursData: tours }, null, 2));

  console.log(`✅ Gerado: ${outputPath}`);
});

console.log("✨ Todos os idiomas foram atualizados com sucesso!");
