import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const resultsDir = path.join(projectRoot, "public", "results");
const thumbsDir = path.join(resultsDir, "thumbs");
const webpDir = path.join(resultsDir, "webp");

const entries = await readdir(resultsDir, { withFileTypes: true });
const resultFiles = entries
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".png"))
  .map((entry) => entry.name)
  .sort((left, right) => left.localeCompare(right));

await rm(thumbsDir, { recursive: true, force: true });
await rm(webpDir, { recursive: true, force: true });
await mkdir(thumbsDir, { recursive: true });
await mkdir(webpDir, { recursive: true });

await Promise.all(
  resultFiles.map(async (fileName) => {
    const baseName = path.basename(fileName, path.extname(fileName));
    const inputPath = path.join(resultsDir, fileName);
    const thumbOutputPath = path.join(thumbsDir, `${baseName}.webp`);
    const fullOutputPath = path.join(webpDir, `${baseName}.webp`);

    await sharp(inputPath)
      .resize({
        width: 360,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(thumbOutputPath);

    await sharp(inputPath)
      .resize({
        width: 800,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 82 })
      .toFile(fullOutputPath);
  }),
);

console.log(
  `Generated ${resultFiles.length} result thumbnails in public/results/thumbs and display posters in public/results/webp.`,
);
