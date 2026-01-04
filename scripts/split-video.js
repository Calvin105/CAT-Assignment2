import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_VIDEO = path.join(__dirname, '../public/Meowieeee.mp4');
const OUTPUT_DIR = path.join(__dirname, '../public/videos');
const CHUNK_SIZE = 20 * 1024 * 1024; // 20MB

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

if (!fs.existsSync(SOURCE_VIDEO)) {
    console.error(`Source video not found at: ${SOURCE_VIDEO}`);
    process.exit(1);
}

const fileBuffer = fs.readFileSync(SOURCE_VIDEO);
const totalSize = fileBuffer.length;
const totalChunks = Math.ceil(totalSize / CHUNK_SIZE);

console.log(`Processing ${path.basename(SOURCE_VIDEO)}`);
console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Chunk size: ${(CHUNK_SIZE / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total chunks to generate: ${totalChunks}`);

// Manifest to store chunk info
const manifest = {
    totalChunks: totalChunks,
    chunks: [],
    fileName: 'Meowieeee.mp4',
    mimeType: 'video/mp4'
};

for (let i = 0; i < totalChunks; i++) {
    const start = i * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, totalSize);
    const chunkBuffer = fileBuffer.slice(start, end);

    const chunkName = `Meowieeee_part_${i}`;
    const chunkPath = path.join(OUTPUT_DIR, chunkName);

    fs.writeFileSync(chunkPath, chunkBuffer);

    manifest.chunks.push(chunkName);
    console.log(`Created chunk ${i + 1}/${totalChunks}: ${chunkName} (${(chunkBuffer.length / 1024 / 1024).toFixed(2)} MB)`);
}

// Write manifest file
fs.writeFileSync(path.join(OUTPUT_DIR, 'video-manifest.json'), JSON.stringify(manifest, null, 2));
console.log('Done! Manifest written to video-manifest.json');
