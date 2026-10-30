import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  const input = path.join(
    __dirname,
    "..",
    "public",
    "images",
    "favicon",
    "Gemini_Generated_Image_o1akw3o1akw3o1ak.jpg",
  );

  const left = 252;
  const top = 585;
  const size = 524;
  const radius = 70;

  const mask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white" />
    </svg>`,
  );

  const croppedBuffer = await sharp(input)
    .extract({ left, top, width: size, height: size })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  // 1. High-res 512x512 icon for Next.js App Router (src/app/icon.png)
  await sharp(croppedBuffer)
    .resize(512, 512, { fit: "contain" })
    .png()
    .toFile(path.join(__dirname, "..", "src", "app", "icon.png"));

  // 2. Apple touch icon 180x180 (src/app/apple-icon.png)
  await sharp(croppedBuffer)
    .resize(180, 180, { fit: "contain" })
    .png()
    .toFile(path.join(__dirname, "..", "src", "app", "apple-icon.png"));

  // 3. 32x32 PNG for favicon.ico replacement
  const ico32Buffer = await sharp(croppedBuffer)
    .resize(32, 32, { fit: "contain" })
    .png()
    .toBuffer();

  // Also write to public/icon.png for direct static access
  await sharp(croppedBuffer)
    .resize(192, 192, { fit: "contain" })
    .png()
    .toFile(path.join(__dirname, "..", "public", "icon.png"));

  fs.writeFileSync(
    path.join(__dirname, "..", "src", "app", "favicon.ico"),
    ico32Buffer,
  );
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "favicon.ico"),
    ico32Buffer,
  );

  console.log("Favicons generated successfully!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
