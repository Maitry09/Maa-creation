// Website Data Management
class WebsiteData {
  constructor() {
    this.data = {
      // Hero Section Data
      hero: {
        title: "Capturing Life's",
        subtitle: "Beautiful Moments",
        description:
          "Professional photography and videography services with cutting-edge technology and artistic vision.",
        buttons: [
          { text: "View Portfolio", type: "primary", href: "#portfolio" },
          { text: "Watch Reel", type: "outline", href: "#", icon: "fas fa-play" },
        ],
      },

      // Services Data
      services: [
        {
          id: 1,
          icon: "fas fa-camera",
          title: "Wedding Photography",
          description: "Capture your special day with stunning, timeless photographs.",
          features: [
            "Pre-wedding consultation",
            "Full day coverage",
            "Edited high-resolution images",
            "Online gallery",
          ],
          basePrice: 25000,
          category: "wedding",
        },
        {
          id: 2,
          icon: "fas fa-video",
          title: "Event Videography",
          description: "Professional video production for weddings and events.",
          features: ["4K video recording", "Drone footage", "Professional editing", "Multiple format delivery"],
          basePrice: 30000,
          category: "videography",
        },
        {
          id: 3,
          icon: "fas fa-users",
          title: "Portrait Sessions",
          description: "Individual and family portraits with professional lighting.",
          features: [
            "Studio or outdoor sessions",
            "Professional lighting",
            "Wardrobe consultation",
            "Retouched images",
          ],
          basePrice: 8000,
          category: "portrait",
        },
        {
          id: 4,
          icon: "fas fa-building",
          title: "Commercial Photography",
          description: "High-quality images for businesses and marketing.",
          features: ["Product photography", "Corporate headshots", "Real estate photography", "Marketing materials"],
          basePrice: 15000,
          category: "commercial",
        },
      ],

      // Portfolio Data
      portfolio: {
        categories: ["All", "Wedding", "Portrait", "Commercial", "Event"],
        items: [
          {
            id: 1,
            title: "Sarah & John's Wedding",
            category: "wedding",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
            description: "A beautiful outdoor wedding ceremony captured in golden hour light.",
            date: "2024-03-15",
            location: "Garden Resort, Mumbai",
            tags: ["outdoor", "golden-hour", "ceremony"],
          },
          {
            id: 2,
            title: "Corporate Headshots",
            category: "commercial",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
            description: "Professional headshots for a tech startup team.",
            date: "2024-02-20",
            location: "Corporate Office, Delhi",
            tags: ["corporate", "headshots", "professional"],
          },
          {
            id: 3,
            title: "Family Portrait Session",
            category: "portrait",
            image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
            description: "Warm family portraits in a natural outdoor setting.",
            date: "2024-01-10",
            location: "City Park, Bangalore",
            tags: ["family", "outdoor", "natural"],
          },
          {
            id: 4,
            title: "Product Launch Event",
            category: "event",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
            description: "Dynamic event photography for a major product launch.",
            date: "2024-04-05",
            location: "Convention Center, Pune",
            tags: ["event", "corporate", "product-launch"],
          },
          {
            id: 5,
            title: "Engagement Session",
            category: "wedding",
            image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop",
            description: "Romantic engagement photos in an urban setting.",
            date: "2024-02-14",
            location: "City Center, Chennai",
            tags: ["engagement", "urban", "romantic"],
          },
          {
            id: 6,
            title: "Real Estate Photography",
            category: "commercial",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
            description: "Architectural photography showcasing luxury properties.",
            date: "2024-03-25",
            location: "Luxury Apartments, Gurgaon",
            tags: ["real-estate", "architecture", "luxury"],
          },
        ],
      },

      // Pricing Data
      pricing: {
        title: "Wedding Packages & Pricing",
        subtitle: "Choose the perfect package for your special day with transparent pricing and comprehensive coverage",

        // Wedding Packages
        weddingPackages: [
          {
            id: 1,
            name: "Premium Wedding Coverage",
            price: 125000,
            priceFormatted: "₹1,25,000",
            originalPrice: null,
            badge: "Most Popular",
            badgeColor: "primary",
            featured: true,
            includes: [
              "Ganesh Sthapna, Haldi, Wedding Ceremony",
              "1 Cinematic Video & 1 Candid Photo",
              "Traditional Video + Photo",
              "1 Day Drone (Wedding)",
              "Pre-wedding (1 day) – Video + Photo",
              "Pre-wedding teaser & 10 edited photos",
            ],
            deliverables: [
              "30 Sheets Photo Book Album (Approx. 250 Photos)",
              "1 × 64 GB Pendrive (Full HD Video – 4 hrs, Edited)",
            ],
            gifts: ["1 Mini Book", "1 16x20 Photo Frame", "1 Highlight Wedding Video"],
            extras: {
              photoSheet: 700,
              videoHour: 4000,
              description: "₹700/sheet, ₹4,000/hour (video)",
            },
            duration: "3-4 days",
            team: "2 Photographers + 2 Videographers",
            equipment: ["DSLR Cameras", "Drone", "Professional Lighting", "Stabilizers"],
          },
          {
            id: 2,
            name: "Standard Wedding + Pre-wedding",
            price: 100000,
            priceFormatted: "₹1,00,000",
            originalPrice: null,
            badge: "Best Value",
            badgeColor: "secondary",
            featured: false,
            includes: [
              "Ganesh Sthapna, Haldi, Wedding Ceremony",
              "1 Cinematic Video & 1 Traditional Photo",
              "1 Day Drone (Wedding)",
              "Pre-wedding (1 day) – Video + Photo",
              "Pre-wedding teaser",
            ],
            deliverables: [
              "30 Sheets Photo Book Album (Approx. 250 Photos)",
              "1 × 64 GB Pendrive (Full HD Video – 4 hrs, Edited)",
            ],
            gifts: ["1 Mini Book", "1 16x20 Photo Frame", "1 Highlight Wedding Video"],
            extras: {
              photoSheet: 700,
              videoHour: 4000,
              description: "₹700/sheet, ₹4,000/hour (video)",
            },
            duration: "2-3 days",
            team: "2 Photographers + 1 Videographer",
            equipment: ["DSLR Cameras", "Drone", "Professional Lighting"],
          },
          {
            id: 3,
            name: "Budget Wedding + Reception",
            price: 55000,
            priceFormatted: "₹55,000",
            originalPrice: null,
            badge: "Budget Friendly",
            badgeColor: "success",
            featured: false,
            includes: [
              "Ganesh Sthapna, Haldi, Wedding Ceremony, Reception",
              "1 Traditional Video & 1 Traditional Photo",
            ],
            deliverables: ["30 Sheets Photo Book Album", "1 × 64 GB Pendrive (4 hrs Edited Video)"],
            gifts: ["1 Mini Book", "1 16x20 Photo Frame"],
            extras: {
              photoSheet: 700,
              videoHour: 4000,
              description: "₹700/sheet, ₹4,000/hour (video)",
            },
            duration: "2 days",
            team: "1 Photographer + 1 Videographer",
            equipment: ["DSLR Cameras", "Basic Lighting"],
          },
          {
            id: 4,
            name: "Mid-Range Wedding + Reception",
            price: 65000,
            priceFormatted: "₹65,000",
            originalPrice: null,
            badge: null,
            badgeColor: null,
            featured: false,
            includes: ["Ganesh Sthapna, Haldi, Wedding Ceremony, Reception", "1 Cinematic Video & 1 Traditional Photo"],
            deliverables: ["30 Sheets Photo Book Album", "1 × 64 GB Pendrive (4 hrs Edited Video)"],
            gifts: ["1 Mini Book", "1 16x20 Photo Frame"],
            extras: {
              photoSheet: 700,
              videoHour: 4000,
              description: "₹700/sheet, ₹4,000/hour (video)",
            },
            duration: "2 days",
            team: "1 Photographer + 1 Videographer",
            equipment: ["DSLR Cameras", "Professional Lighting"],
          },
        ],

        // Other Events
        otherEvents: [
          {
            id: 1,
            name: "Engagement",
            services: "1 Traditional Video + 1 Traditional Photo",
            priceMin: 15000,
            priceMax: 20000,
            priceRange: "₹15,000 – ₹20,000",
            icon: "fas fa-heart",
            duration: "4-6 hours",
            team: "1 Photographer + 1 Videographer",
            deliverables: ["Edited Photos", "Highlight Video", "Online Gallery"],
            category: "celebration",
          },
          {
            id: 2,
            name: "Baby Shower",
            services: "1 Photographer + 1 Videographer, Edited Highlights",
            priceMin: 12000,
            priceMax: 18000,
            priceRange: "₹12,000 – ₹18,000",
            icon: "fas fa-baby",
            duration: "3-4 hours",
            team: "1 Photographer + 1 Videographer",
            deliverables: ["Photo Album", "Highlight Reel", "Digital Gallery"],
            category: "celebration",
          },
          {
            id: 3,
            name: "Birthday Party",
            services: "1 Photographer, Edited Album + Short Video Highlight",
            priceMin: 8000,
            priceMax: 15000,
            priceRange: "₹8,000 – ₹15,000",
            icon: "fas fa-birthday-cake",
            duration: "2-4 hours",
            team: "1 Photographer",
            deliverables: ["Photo Album", "Short Video", "Digital Copies"],
            category: "celebration",
          },
          {
            id: 4,
            name: "Pre-wedding Only",
            services: "1 Day Shoot – Video + Photos + Teaser (with editing)",
            priceMin: 25000,
            priceMax: 35000,
            priceRange: "₹25,000 – ₹35,000",
            icon: "fas fa-camera-retro",
            duration: "1 full day",
            team: "1 Photographer + 1 Videographer",
            deliverables: ["Edited Photos", "Cinematic Video", "Teaser", "Online Gallery"],
            category: "wedding",
          },
          {
            id: 5,
            name: "Reception Only",
            services: "1 Cinematic Video + 1 Traditional Photo",
            priceMin: 20000,
            priceMax: 30000,
            priceRange: "₹20,000 – ₹30,000",
            icon: "fas fa-glass-cheers",
            duration: "4-6 hours",
            team: "1 Photographer + 1 Videographer",
            deliverables: ["Photo Album", "Reception Video", "Highlight Reel"],
            category: "wedding",
          },
          {
            id: 6,
            name: "Corporate Event",
            services: "1 Photographer + 1 Videographer (4-6 hrs) + Highlight Clip",
            priceMin: 18000,
            priceMax: 30000,
            priceRange: "₹18,000 – ₹30,000",
            icon: "fas fa-building",
            duration: "4-6 hours",
            team: "1 Photographer + 1 Videographer",
            deliverables: ["Event Photos", "Highlight Video", "Digital Gallery"],
            category: "corporate",
          },
          {
            id: 7,
            name: "Drone Shoot (1 Day)",
            services: "Drone operator + Edited Drone Clips",
            priceMin: 10000,
            priceMax: 12000,
            priceRange: "₹10,000 – ₹12,000",
            icon: "fas fa-helicopter",
            duration: "4-8 hours",
            team: "1 Drone Operator",
            deliverables: ["Aerial Photos", "Drone Video", "Edited Clips"],
            category: "specialty",
          },
        ],

        // Add-on Services
        addOns: [
          {
            id: 1,
            name: "Extra Photo Sheets",
            price: 700,
            unit: "per sheet",
            description: "Additional photo sheets for your album",
          },
          {
            id: 2,
            name: "Extended Video Coverage",
            price: 4000,
            unit: "per hour",
            description: "Additional video recording time",
          },
          {
            id: 3,
            name: "Same Day Editing",
            price: 15000,
            unit: "flat rate",
            description: "Quick turnaround for urgent deliveries",
          },
          {
            id: 4,
            name: "Additional Photographer",
            price: 8000,
            unit: "per day",
            description: "Extra photographer for larger events",
          },
          {
            id: 5,
            name: "Live Streaming",
            price: 12000,
            unit: "per event",
            description: "Live stream your event for remote guests",
          },
        ],

        // Seasonal Offers
        seasonalOffers: [
          {
            id: 1,
            title: "Wedding Season Special",
            discount: 15,
            validFrom: "2024-11-01",
            validTo: "2024-03-31",
            description: "15% off on all wedding packages during peak season",
            conditions: ["Minimum booking of ₹50,000", "Advance payment required"],
          },
          {
            id: 2,
            title: "Summer Portrait Special",
            discount: 20,
            validFrom: "2024-04-01",
            validTo: "2024-06-30",
            description: "20% off on portrait sessions during summer",
            conditions: ["Valid for outdoor sessions only", "Booking in advance"],
          },
        ],
      }
      }
  }

  // Getter methods for different sections
  getHeroData() {
    return this.data.hero
  }

  getServicesData() {
    return this.data.services
  }

  getPortfolioData() {
    return this.data.portfolio
  }

  getPricingData() {
    return this.data.pricing
  }

  getAboutData() {
    return this.data.about
  }

  getContactData() {
    return this.data.contact
  }

  getFooterData() {
    return this.data.footer
  }

  // Utility methods for pricing calculations
  calculatePackageDiscount(packageId, discountPercent) {
    const pkg = this.data.pricing.weddingPackages.find((p) => p.id === packageId)
    if (!pkg) return null

    const discountAmount = (pkg.price * discountPercent) / 100
    const finalPrice = pkg.price - discountAmount

    return {
      originalPrice: pkg.price,
      discountAmount: discountAmount,
      finalPrice: finalPrice,
      discountPercent: discountPercent,
      savings: discountAmount,
    }
  }

  getPackagesByPriceRange(minPrice, maxPrice) {
    return this.data.pricing.weddingPackages.filter((pkg) => pkg.price >= minPrice && pkg.price <= maxPrice)
  }

  getEventsByCategory(category) {
    return this.data.pricing.otherEvents.filter((event) => event.category === category)
  }

  searchPortfolio(query) {
    const searchTerm = query.toLowerCase()
    return this.data.portfolio.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
    )
  }

  getActiveOffers() {
    const currentDate = new Date()
    return this.data.pricing.seasonalOffers.filter((offer) => {
      const validFrom = new Date(offer.validFrom)
      const validTo = new Date(offer.validTo)
      return currentDate >= validFrom && currentDate <= validTo
    })
  }

  // Format currency
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Generate quote based on requirements
  generateQuote(requirements) {
    const { eventType, duration, guestCount, services, addOns = [], location } = requirements

    let basePrice = 0
    let selectedPackage = null

    // Find matching package or event
    if (eventType === "wedding") {
      selectedPackage = this.data.pricing.weddingPackages.find((pkg) => pkg.name.toLowerCase().includes("standard"))
      basePrice = selectedPackage ? selectedPackage.price : 50000
    } else {
      const event = this.data.pricing.otherEvents.find((e) => e.name.toLowerCase().includes(eventType.toLowerCase()))
      basePrice = event ? event.priceMin : 15000
    }

    // Calculate add-ons
    let addOnTotal = 0
    addOns.forEach((addOnId) => {
      const addOn = this.data.pricing.addOns.find((a) => a.id === addOnId)
      if (addOn) {
        addOnTotal += addOn.price
      }
    })

    // Apply multipliers based on guest count and duration
    let multiplier = 1
    if (guestCount > 200) multiplier += 0.3
    else if (guestCount > 100) multiplier += 0.2
    else if (guestCount > 50) multiplier += 0.1

    if (duration > 8) multiplier += 0.2
    else if (duration > 6) multiplier += 0.1

    const subtotal = basePrice * multiplier + addOnTotal
    const tax = subtotal * 0.18 // 18% GST
    const total = subtotal + tax

    return {
      eventType,
      basePrice,
      addOnTotal,
      multiplier,
      subtotal,
      tax,
      total,
      breakdown: {
        basePackage: basePrice * multiplier,
        addOns: addOnTotal,
        gst: tax,
      },
      selectedPackage,
      formattedTotal: this.formatCurrency(total),
    }
  }
}

// Initialize the data manager
const websiteData = new WebsiteData()

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = WebsiteData
}

// Make available globally for browser use
if (typeof window !== "undefined") {
  window.WebsiteData = WebsiteData
  window.websiteData = websiteData
}
