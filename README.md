# 📸 Maa Creation

![GitHub repo size](https://img.shields.io/github/repo-size/Maitry09/Maa-creation?color=blueviolet&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Maitry09/Maa-creation?color=orange&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Templating-b4ca65?style=flat-square)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media%20Cloud-3448C5?style=flat-square&logo=cloudinary&logoColor=white)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)


## 🏛️ About

Maa Creation is a professional photo and videography studio based in Anand, Gujarat, dedicated to capturing life's most cherished moments with creativity and precision. From intimate portraits and wedding ceremonies to cinematic reels and creative shoots, we bring your vision to life through the art of visual storytelling. Every frame is crafted with passion, attention to detail, and a personal touch — because your memories deserve nothing less than the best.
🌐 Live Website: mahakali-studio.onrender.com

---

## 🚀 Features

- 🖼️ **Portfolio Gallery** — Showcases photography and videography work
- 🎬 **Reels Section** — Displays video reels with Cloudinary integration
- 📧 **Contact Form** — Sends client inquiries via Nodemailer
- ☁️ **Cloud Media Management** — Images and videos hosted on Cloudinary
- 🎨 **EJS Templating** — Dynamic, reusable views with `ejs-mate` layouts
- 📱 **Responsive Design** — Clean, studio-quality frontend with custom CSS

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Runtime     | Node.js                           |
| Framework   | Express.js                        |
| Templating  | EJS + ejs-mate                    |
| Media Cloud | Cloudinary                        |
| Email       | Nodemailer                        |
| Styling     | CSS (custom)                      |
| Dev Tool    | Nodemon                           |

---

## 📁 Project Structure

```
Maa-creation/
├── public/             # Static assets (CSS, images, JS)
├── views/              # EJS templates and layouts
├── details/            # Portfolio/reel data or content files
├── app.js              # Main Express app entry point
├── cloudConfig.js      # Cloudinary configuration
├── uploadPortfolio.js  # Portfolio image upload script
├── uploadReels.js      # Reels video upload script
├── .gitignore
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- A [Cloudinary](https://cloudinary.com/) account
- An email account for Nodemailer (e.g., Gmail with App Password)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Maitry09/Maa-creation.git
   cd Maa-creation
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret

   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

4. **Upload media to Cloudinary** *(if needed)*

   ```bash
   node uploadPortfolio.js
   node uploadReels.js
   ```

5. **Start the server**

   ```bash
   # Development (with auto-reload)
   npm run dev

   # Production
   npm start
   ```

6. **Open in your browser**

   ```
   http://localhost:3000
   ```

---

## 📜 Scripts

| Command       | Description                        |
|---------------|------------------------------------|
| `npm start`   | Start the server with Node.js      |
| `npm run dev` | Start with Nodemon (auto-reload)   |

---

## 🔐 Environment Variables

| Variable          | Description                        |
|-------------------|------------------------------------|
| `CLOUD_NAME`      | Cloudinary cloud name              |
| `CLOUD_API_KEY`   | Cloudinary API key                 |
| `CLOUD_API_SECRET`| Cloudinary API secret              |
| `EMAIL_USER`      | Email address for contact form     |
| `EMAIL_PASS`      | Email app password for Nodemailer  |

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 👩‍💻 Author

**Maitry Chauhan**
- GitHub: [@Maitry09](https://github.com/Maitry09)

---

## 📄 License

This project is licensed under the MIT License.
