const container = document.getElementById('packages-container');
const tbody = document.getElementById('event-table-body');

packages.forEach(pkg => {
  const card = document.createElement('div');
  card.className = 'package-card';

  card.innerHTML = `
    <h3>${pkg.title}</h3>
    <p><strong>Includes:</strong></p>
    <ul>${pkg.includes.map(item => `<li>${item}</li>`).join('')}</ul>
    <p><strong>Deliverables:</strong></p>
    <ul>${pkg.deliverables.map(item => `<li>${item}</li>`).join('')}</ul>
    <p><strong>Gift Items:</strong></p>
    <ul>${pkg.gifts.map(item => `<li>${item}</li>`).join('')}</ul>
    <p class="price">Price: ${pkg.price}</p>
    ${pkg.extra ? `<p>Extra: ${pkg.extra}</p>` : ''}
  `;

  container.appendChild(card);
});

otherEvents.forEach(event => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${event.type}</td>
    <td>${event.services}</td>
    <td>${event.price}</td>
  `;
  tbody.appendChild(row);
});
