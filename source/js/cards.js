const products = [
  {id: 1, name: 'Капучино', price: 230.00, description: 'Отличный кофе Капучино'},
  {id: 2, name: 'Американо', price: 280.00, description: 'Отличный кофе Американо'},
  {id: 3, name: 'Латте', price: 210.00, description: 'Отличный кофе Латте'},
  {id: 4, name: 'Декаф', price: 140.00, description: 'Отличный кофе Декаф'},
  {id: 5, name: 'Эспрессо', price: 300.00, description: 'Отличный кофе Эспрессо'},
  {id: 6, name: 'Раф', price: 150.00, description: 'Отличный кофе Раф'},
];

const productList = document.querySelector('.catalog__products');
const cardTemplate = document.querySelector('#catalog__card').content.querySelector('.catalog__card');
const filter = document.querySelector('#sorting-select');
let filterKey = 'default';

const filterSort = function() {
  switch(filterKey) {
    case 'default':
      return products;
    case 'budget':
      return [...products].sort((product1,product2)=>product1.price - product2.price);
    case 'expensive':
      return [...products].sort((product1,product2)=>product2.price - product1.price);
    case 'alphabet':
      return [...products].sort((product1,product2)=>product1.name.toLowerCase() > product2.name.toLowerCase() ? 1 : -1);
  }
};


const createCards = function(productsArray) {
  const cards = [];
  for (let i = 0; i < productsArray.length; i++) {
    const id = productsArray[i].id;
    cards[i] = cardTemplate.cloneNode(true);
    cards[i].querySelector('.catalog-card__image').src = `images/catalog/coffee-${id}.jpg`;
    cards[i].querySelector('.catalog-card__image').srcset = `images/catalog/coffee-${id}@2x.jpg 2x`;
    cards[i].querySelector('source').srcset = `images/catalog/coffee-${id}.webp, images/catalog/coffee-${id}@2x.webp 2x`;
    cards[i].querySelector('.catalog-card__title').textContent = productsArray[i].name;
    cards[i].querySelector('.catalog-card__description').textContent = productsArray[i].description;
    cards[i].querySelector('.catalog-card__price').textContent = `${productsArray[i].price}₽`;
    productList.appendChild(cards[i]);
  }
};

createCards(filterSort());

filter.addEventListener('change', () => {
  filterKey = filter.value;
  productList.innerHTML = '';
  createCards(filterSort());
});


