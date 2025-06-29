require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

// Folder to read from
const baseFolder = path.join(__dirname, '/public/data/portfolio');
const categories = ['wedding', 'portrait', 'haldi', 'mehndi', 'prewedding'];

(async () => {
  for (const category of categories) {
    const categoryPath = path.join(baseFolder, category);
    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const publicId = `portfolio/${category}/${path.parse(file).name}`;

      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: `portfolio/${category}`,
          public_id: path.parse(file).name,
          resource_type: 'image',
          type: 'authenticated', // Make file private
          overwrite: true,
        });

        console.log(`Uploaded: ${result.public_id}`);
      } catch (err) {
        console.error(`Failed: ${file}`, err);
      }
    }
  }
})();
