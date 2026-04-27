import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const resultsDir = path.join(projectRoot, "public", "results");
const thumbsDir = path.join(resultsDir, "thumbs");

const entries = await readdir(resultsDir, { withFileTypes: true });
const resultFiles = entries
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".png"))
  .map((entry) => entry.name)
  .sort((left, right) => left.localeCompare(right));

await mkdir(thumbsDir, { recursive: true });

await Promise.all(
  resultFiles.map(async (fileName) => {
    const inputPath = path.join(resultsDir, fileName);
    const outputPath = path.join(
      thumbsDir,
      `${path.basename(fileName, path.extname(fileName))}.webp`,
    );

    await sharp(inputPath)
      .resize({
        width: 360,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
  }),
);

console.log(`Generated ${resultFiles.length} result thumbnails in public/results/thumbs.`);
