// Advanced animations and effects
class AnimationManager {
  constructor() {
    this.init()
  }

  init() {
    this.setupCounters()
    this.setupProgressBars()
  }

  setupCounters() {
    const counters = document.querySelectorAll("[data-count]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    counters.forEach((counter) => observer.observe(counter))
  }

  animateCounter(element) {
    const target = Number.parseInt(element.getAttribute("data-count"))
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current)
    }, 16)
  }

  setupProgressBars() {
    // Add loading progress animation
    let loadProgress = 0
    const progressInterval = setInterval(() => {
      loadProgress += Math.random() * 15
      if (loadProgress >= 100) {
        loadProgress = 100
        clearInterval(progressInterval)
      }

      const progressBar = document.querySelector(".progress-bar")
      if (progressBar) {
        progressBar.style.width = loadProgress + "%"
      }
    }, 100)
  }
}

// Initialize animation manager
document.addEventListener("DOMContentLoaded", () => {
  new AnimationManager()
})
