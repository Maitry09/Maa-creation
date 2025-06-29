require('dotenv').config();
const express = require("express")
const path = require("path")
const ejsMate = require("ejs-mate")
const app = express()
const PORT = process.env.PORT || 8080
const {hero} = require("./details/hero")
const {service} = require("./details/service")
const {portfolio} = require("./details/portfolio")
const {contact} = require("./details/contact")
const {footer} = require("./details/footer")
const {packages} = require("./details/pricing")
const { categoryImages } = require('./details/category');
const { reels } = require('./details/reels');
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
});

// Set EJS as templating engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.engine("ejs",ejsMate);

// Serve static files
app.use(express.static(path.join(__dirname,"/public")));
// Routes
app.get("/", (req, res) => {
  const pageData = {
    currentPage: "home",
    hero: hero, 
    services: service, 
    contact: contact,
    footer: footer,
  }
  res.render("index", pageData)
})

app.get("/portfolio", (req, res) => {
  const signedPortfolio = portfolio.items.map(item => {
    const signedUrl = cloudinary.url(item.image, {
      type: "authenticated",
      resource_type: "image",
      sign_url: true,
      expires_at: Math.floor(Date.now() / 1000) + 600, // 10 minutes
      transformation: [
        { quality: "auto:best" },
        { fetch_format: "auto" }
      ]
    });

    return {
      ...item,
      image: signedUrl
    };
  });

  res.render("sections/portfolio", {
    portfolio: {
      categories: portfolio.categories,
      items: signedPortfolio
    },
    footer
  });
})

app.get("/contact", (req, res) => {
  res.render("sections/contact", {contact, footer,})
})

// API Routes
app.post("/contact",async(req, res) => {
  const { name, email, phone, service, message } = req.body
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maitry2127@gmail.com',
      pass: 'ocqpokasbxwjgbmm'
    }})

    // Email content
    const mailOptions = {
      from: email,
      to: 'mahakalivideo29@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `
    };
    
    // Send the email
    try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Thank you for contacting us!" });
  } catch (error) {
    console.error("Email error:", error);
    res.json({ success: false, message: "There was an error sending your message. Please try again later." });
  }
})

app.get("/pricing", (req, res) => {
  res.render("sections/pricing", {packages,footer})  
})

app.get("/session", (req, res) => {
  res.render("sections/session", {footer})
})

app.post("/session",async(req, res) => {
  const { name,email, phone,event,date, message } = req.body;
   // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maitry2127@gmail.com',
      pass: 'ocqpokasbxwjgbmm'
    }})

    // Email content
    const mailOptions = {
      from: email,
      to: 'mahakalivideo29@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        event: ${event}       
        Date: ${date}
        Message: ${message}
      `
    };
    
    // Send the email
    try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Your session is booked!!' });
  } catch (error) {
    console.error("Email error:", error);
    res.json({ success: false, message: "There was an error sending your message. Please try again later." });
  }
})

app.get("/reels", (req, res) => {
  const signedReels = reels.map(reel => {
    const signedUrl = cloudinary.url(reel.src, {
      type: 'authenticated',
      resource_type: 'video',
      sign_url: true,
      transformation: [
        { quality: "auto" },
        { fetch_format: "auto" }
      ],
      expires_at: Math.floor(Date.now() / 1000) + 300, // valid for 5 mins
    });

    return { src: signedUrl };
  });
  res.render("sections/reel", { signedReels, footer });
})

app.get('/category/:name', (req, res) => {
  const category = req.params.name;
  const publicIds = categoryImages[category];
  
  if (!publicIds) {
    return res.status(404).send('Category not found');
  }

  const images = publicIds.map(id => {
    const signedUrl = cloudinary.url(id, {
      type: 'authenticated',
      resource_type: 'image',
      sign_url: true,
      transformation: [
        { quality: 50 }, // compress
        { fetch_format: "auto" } // serve WebP/AVIF if supported
      ],
    });

    return signedUrl;
  });
  res.render('sections/category', { category, images, footer });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
