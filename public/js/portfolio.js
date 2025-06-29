// Portfolio filtering functionality
class PortfolioManager {
  constructor() {
    this.init()
  }

  init() {
    this.setupFilters()
  }

  setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn-3d")
    const portfolioItems = document.querySelectorAll(".portfolio-item-3d")

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter")

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        // Filter items
        portfolioItems.forEach((item) => {
          const category = item.getAttribute("data-category")

          if (filter === "all" || category === filter) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
            }, 100)
          } else {
            item.style.opacity = "0"
            item.style.transform = "translateY(50px)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }
}

// Initialize portfolio manager
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioManager()
})