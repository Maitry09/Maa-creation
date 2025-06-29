require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const reelsFolder = path.join(__dirname, '/public/data/reels');

(async () => {
  const files = fs.readdirSync(reelsFolder).filter(file => file.endsWith('.mp4'));

  for (const file of files) {
    const filePath = path.join(reelsFolder, file);
    const publicId = `reels/${path.parse(file).name}`;

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'reels',
        public_id: path.parse(file).name,
        resource_type: 'video',
        type: 'authenticated', // private access
        overwrite: true,
      });

      console.log(`Uploaded: ${result.public_id}`);
    } catch (err) {
      console.error(`Upload failed for ${file}:`, err);
    }
  }
})();
