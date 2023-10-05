const getData = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
};

const renderProducts = async () => {
  const data = await getData();
  const html = data.map(
    ({ image, title, description, price }) => `<div class="product-card">
    <img src="${image}" alt="${title}" />
    <h2>${title}</h2>
    <p>${description}</p>
    <span>$${price}</span>
  </div>`
  );
  const div = document.querySelector('.gallery');
  div.innerHTML = html.join('');
};

renderProducts();
