// ***special_offers + high_rate + useful  list_item display logic***

const specialOffersList = document.querySelector('.special-offers__list');
const specialItems = specialOffersList.querySelectorAll('.special-offers__list__item');
let specialLimit;
const highRateList = document.querySelector('.high-rate__list');
const highItems = highRateList.querySelectorAll('.high-rate__list__item');
let highLimit;
const usefulList = document.querySelector('.useful__list');
const usefulItems = usefulList.querySelectorAll('.useful__list__item');
let usefulLimit;


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
      specialLimit = 6;
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


const displayItems = () => {
  specialItems.forEach(specialItem => specialItem.style.display = 'none');
  highItems.forEach(highItem => highItem.style.display = 'none');
  usefulItems.forEach(usefulItem => usefulItem.style.display = 'none');

  for (let i = 0; i < getSpecialListLimit(); i++) {
    specialItems[i].style.display = 'flex';
  };

  for (let i = 0; i < getHighListLimit(); i++) {
    highItems[i].style.display = 'flex';
  }

  for (let i = 0; i < getUsefulListLimit(); i++) {
    usefulItems[i].style.display = 'flex';
  }
};

window.addEventListener('resize', () => {
  displayItems();
});

window.addEventListener('load', () => {
  displayItems();
});


// *** button event listener***

const redirect = (pagename) => {
  window.location.pathname = `html/${pagename}.html`;

};

const specialBtns = document.querySelectorAll('.special-offers__item__btn');
const highBtns = document.querySelectorAll('.high-rate__item__btn');
const topBtns = document.querySelectorAll('.top-categories__item__btn');
const advertiseBtn = document.querySelector('.advertise__btn');

specialBtns.forEach(btn => btn.addEventListener('click', () => { redirect('product_card') }));
highBtns.forEach(btn => btn.addEventListener('click', () => { redirect('product_card') }));
topBtns.forEach(btn => btn.addEventListener('click', () => { redirect('catalogue') }));
advertiseBtn.addEventListener('click', () => { redirect('catalogue') });
