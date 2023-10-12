
// ***related list_item display logic***
const relatedList = document.querySelector('.product-card__related__list');
const relatedItems = relatedList.querySelectorAll('.product-card__list__item');
let relatedLimit;

const getRelatedListLimit = () => {
  const screenWidth = window.screen.width;
  switch (true) {
    case screenWidth > 1440:
      relatedLimit = 4;
      break;
    case screenWidth > 992 && screenWidth <= 1440:
      relatedLimit = 3;
      break;
    case screenWidth <= 992:
      relatedLimit = 2;
      break;
  };
  return relatedLimit;
};

const showItems = () => {
  relatedItems.forEach(relatedItem => relatedItem.style.display = 'none');

  for (let i = 0; i < getRelatedListLimit(); i++) {
    relatedItems[i].style.display = 'flex';
  };
};

window.addEventListener('resize', () => {
  showItems();
});

window.addEventListener('load', () => {
  showItems();
});
