// category-tab.js

const cardGrid = document.getElementById('cardGrid');
const buttons = document.querySelectorAll('.category-buttons button');

function renderCards(cards) {
  cardGrid.innerHTML = '';
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.title}" />
      <div class="card-info">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
    `;
    cardGrid.appendChild(cardElement);
  });
}

// function filterCards(category) {
//   buttons.forEach(btn => btn.classList.remove('active'));
//   const activeButton = Array.from(buttons).find(btn => btn.textContent === category);
//   if (activeButton) activeButton.classList.add('active');

//   if (category === 'All') {
//     renderCards(allCards);
//   } else {
//     const filtered = allCards.filter(card => card.category === category);
//     renderCards(filtered);
//   }
// }

// // Initial render
// renderCards(allCards);

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.image-card img').forEach(img => {
    img.addEventListener('load', function() {
      const card = img.parentElement;
      const aspect = img.naturalWidth / img.naturalHeight;
      if (aspect > 1.5) {
        // Wide image
        card.style.gridColumn = "span 2";
      } else if (aspect < 0.8) {
        // Tall image
        card.style.gridRow = "span 2";
      } else {
        // Normal image, no span
        card.style.gridColumn = "";
        card.style.gridRow = "";
      }
    });
  });
});