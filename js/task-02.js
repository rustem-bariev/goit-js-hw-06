const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = document.querySelector('#ingredients');
const ul = document.querySelector('ul');
const arr = [];
ingredients.forEach(item => {
  const ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = item;
  arr.push(ingredient)
})
console.log(arr);
ul.append(...arr);