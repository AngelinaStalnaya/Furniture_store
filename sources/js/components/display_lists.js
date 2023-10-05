// ***special_offers + high_rate + useful + related list_item display logic***

const specialOffersList = document.querySelector('.special_offers__list');
const specialItems = specialOffersList.querySelectorAll('.list__item');
let specialLimit;
const highRateList = document.querySelector('.high_rate__list');
const highItems = highRateList.querySelectorAll('.list__item');
let highLimit;
const usefulList = document.querySelector('.useful__list');
const usefulItems = usefulList.querySelectorAll('.list__item');
let usefulLimit;
const relatedList = document.querySelector('.related__list');
const relatedItems = relatedList.querySelectorAll('.list__item');
let relatedLimit;

const getSpecialListLimit = () => {
  const screenWidth = window.screen.width;
  switch (true) {
    case screenWidth > 992:
      specialLimit = 3;
      break;
    case screenWidth > 720 && screenWidth <= 992:
      specialLimit = 2;
      break;
    case screenWidth <= 720:
      specialLimit = 5;
      break;
  };
  return specialLimit;
};

const getHighListLimit = () => {
  const screenWidth = window.screen.width;
  if (screenWidth > 1440) {
    return 8;
  } else {
    return 6;
  };
}

const getUsefulListLimit = () => {
  const screenWidth = window.screen.width;
  switch (true) {
    case screenWidth > 1440:
      usefulLimit = 2;
      break;
    case screenWidth > 992 && screenWidth <= 1440:
      usefulLimit = 3;
      break;
    case screenWidth > 720 && screenWidth <= 992:
      usefulLimit = 2;
      break;
    case screenWidth <= 720:
      usefulLimit = 5;
      break;
  };
  return usefulLimit;
};

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

const displayItems = () => {
  specialItems.forEach(specialItem => specialItem.style.display = 'none');
  highItems.forEach(highItem => highItem.style.display = 'none');
  usefulItems.forEach(usefulItem => usefulItem.style.display = 'none');
  relatedItems.forEach(relatedItem => relatedItem.style.display = 'none');

  for (let i = 0; i < getSpecialListLimit(); i++) {
    specialItems[i].style.display = 'flex';
  };

  for (let i = 0; i < getHighListLimit(); i ++) {
    highItems[i].style.display = 'flex';
  }

  for (let i = 0; i < getUsefulListLimit(); i ++) {
    usefulItems[i].style.display = 'flex';
  }

  for (let i = 0; i < getRelatedListLimit(); i++) {
    relatedItems[i].style.display = 'flex';
  };
};

window.addEventListener('resize', () => {
  displayItems();
});

window.addEventListener('load', () => {
  displayItems();
});
