// Core functionality and initialization
class PhotoStudioApp {
  constructor() {
    this.init()
  }

  init() {
    this.initializeElements()
    this.setupEventListeners()
    this.handleLoading()
  }

  initializeElements() {
    this.header = document.getElementById("header")
    this.mobileMenuBtn = document.getElementById("mobileMenuBtn")
    this.mobileNav = document.getElementById("mobileNav")
    this.portfolioGrid = document.getElementById("portfolioGrid")
    this.contactForm = document.getElementById("contactForm")
    this.loader = document.getElementById("loader")
  }

  setupEventListeners() {
    // Window events
    window.addEventListener("load", () => this.handlePageLoad())
    window.addEventListener("scroll", () => this.handleScroll())
    window.addEventListener("resize", () => this.handleResize())

    // Mobile menu
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener("click", () => this.toggleMobileMenu())
    }

    // Navigation links
    this.setupSmoothScrolling()
    this.setupMobileNavigation()
  }

  handleLoading() {
    // Prevent scrolling during loading
    document.body.style.overflow = "hidden"
  }

  handlePageLoad() {
    setTimeout(() => {
      if (this.loader) {
        this.loader.classList.add("hidden")
      }
      document.body.style.overflow = "auto"
      this.initializeAnimations()
    }, 1500)
  }

  handleScroll() {
    const scrollY = window.scrollY

    // Header scroll effect
    if (this.header) {
      if (scrollY > 50) {
        this.header.classList.add("scrolled")
      } else {
        this.header.classList.remove("scrolled")
      }
    }

    // Parallax effects
    this.updateParallaxElements(scrollY)
  }

  handleResize() {
    // Disable heavy 3D effects on mobile
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".floating-camera-3d, .geometric-shapes").forEach((el) => {
        el.style.display = "none"
      })
    } else {
      document.querySelectorAll(".floating-camera-3d, .geometric-shapes").forEach((el) => {
        el.style.display = "block"
      })
    }
  }

  toggleMobileMenu() {
    if (this.mobileNav && this.mobileMenuBtn) {
      this.mobileNav.classList.toggle("active")
      this.mobileMenuBtn.classList.toggle("active")
    }
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }

  setupMobileNavigation() {
    document.querySelectorAll(".nav-mobile .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (this.mobileNav && this.mobileMenuBtn) {
          this.mobileNav.classList.remove("active")
          this.mobileMenuBtn.classList.remove("active")
        }
      })
    })
  }

  updateParallaxElements(scrollY) {
    const parallaxElements = [
      { selector: ".floating-camera-3d", speed: 0.3 },
      { selector: ".geometric-shapes", speed: 0.2 },
      { selector: ".floating-cubes-3d", speed: 0.4 },
    ]

    parallaxElements.forEach(({ selector, speed }) => {
      const element = document.querySelector(selector)
      if (element) {
        const yPos = scrollY * speed
        element.style.transform = `translateY(${yPos}px)`
      }
    })
  }

  initializeAnimations() {
    this.create3DParticles()
    this.initializeTiltEffect()
    this.setupScrollReveal()
    this.setupButtonEffects()
  }

  create3DParticles() {
    const particlesContainer = document.getElementById("particles3d")
    if (!particlesContainer) return

    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle-3d"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 6 + "s"
      particle.style.animationDuration = 4 + Math.random() * 4 + "s"

      const colors = ["#60a5fa", "#a78bfa", "#f472b6", "#34d399"]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      particle.style.background = `radial-gradient(circle, ${randomColor}, transparent)`

      particlesContainer.appendChild(particle)
    }
  }

  initializeTiltEffect() {
    const tiltElements = document.querySelectorAll("[data-tilt]")

    tiltElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.style.transition = "transform 0.1s ease"
      })

      element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
      })

      element.addEventListener("mouseleave", () => {
        element.style.transition = "transform 0.3s ease"
        element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
      })
    })
  }

  setupScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || 0

          setTimeout(() => {
            entry.target.classList.add("aos-animate")

            if (entry.target.hasAttribute("data-text-reveal")) {
              this.animateTextReveal(entry.target)
            }

            if (entry.target.hasAttribute("data-stagger-reveal")) {
              this.animateStaggerReveal(entry.target)
            }
          }, delay)
        }
      })
    }, observerOptions)

    // Observe all elements with scroll reveal attributes
    document.querySelectorAll("[data-scroll-reveal]").forEach((el) => observer.observe(el))
    document.querySelectorAll("[data-text-reveal]").forEach((el) => observer.observe(el))
    document.querySelectorAll("[data-fade-up]").forEach((el) => observer.observe(el))
    document.querySelectorAll("[data-stagger-reveal]").forEach((el) => observer.observe(el))
  }

  animateTextReveal(element) {
    const text = element.textContent
    element.innerHTML = ""

    text.split("").forEach((char, index) => {
      const span = document.createElement("span")
      span.textContent = char === " " ? "\u00A0" : char
      span.style.opacity = "0"
      span.style.transform = "translateY(50px) rotateX(-90deg)"
      span.style.transition = `all 0.6s ease ${index * 0.03}s`
      element.appendChild(span)

      setTimeout(() => {
        span.style.opacity = "1"
        span.style.transform = "translateY(0) rotateX(0deg)"
      }, 100)
    })
  }

  animateStaggerReveal(container) {
    const children = container.children
    Array.from(children).forEach((child, index) => {
      child.style.opacity = "0"
      child.style.transform = "translateY(30px) rotateX(-15deg)"
      child.style.transition = "all 0.6s ease"

      setTimeout(() => {
        child.style.opacity = "1"
        child.style.transform = "translateY(0) rotateX(0deg)"
      }, index * 100)
    })
  }

  setupButtonEffects() {
    document.querySelectorAll(".btn-3d").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-3px) scale(1.02)"
      })

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)"
      })

      btn.addEventListener("mousedown", () => {
        btn.style.transform = "translateY(-1px) scale(0.98)"
      })

      btn.addEventListener("mouseup", () => {
        btn.style.transform = "translateY(-3px) scale(1.02)"
      })
    })
  }
}

// Utility functions
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  new PhotoStudioApp()
})
