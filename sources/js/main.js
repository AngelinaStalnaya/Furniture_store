const mainPageContent = document.querySelector('.main_page');
const catalogueContent = document.querySelector('.catalogue');
const productCardContent = document.querySelector('.product_card');
const cooperationContent = document.querySelector('.cooperation');
const pages = [mainPageContent, catalogueContent, productCardContent, cooperationContent];

function loadPage(pageClass) {
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  };

  switch (true) {
    case pageClass == '.main_page':
      document.title = 'Главная';
      mainPageContent.style.display = 'grid';
      break;
    case pageClass == '.catalogue':
      document.title = 'Каталог';
      catalogueContent.style.display = 'grid';
      break;
    case pageClass == '.product_card':
      document.title = 'Карточка товара';
      productCardContent.style.display = 'grid';
      break;
    case pageClass == '.cooperation':
      document.title = 'Сотрудничество';
      cooperationContent.style.display = 'grid';
      break;
    default:
      break;
  };
};

const catalogueBtn = document.getElementById('load_catalogue');
catalogueBtn.addEventListener('click', () => {loadPage('.catalogue')});

const productBtns = document.querySelectorAll('.item__btn');
productBtns.forEach(productBtn => productBtn.addEventListener('click', () => { loadPage('.product_card') }));

const cooperationBtn = document.getElementById('load_cooperation');
cooperationBtn.addEventListener('click', () => {loadPage('.cooperation')});

const headerLogo = document.querySelector('.header__logo');
headerLogo.addEventListener('click', () => {loadPage('.main_page')});

const footerLogo = document.querySelector('.footer__logo');
footerLogo.addEventListener('click', () => {loadPage('.main_page')});

const categoryList = document.querySelector('.top_categories__list');
const categoryBtns = categoryList.querySelectorAll('.item__btn');
categoryBtns.forEach(categoryBtn => categoryBtn.addEventListener('click', () => {loadPage('.catalogue')}));

const usefulList = document.querySelector('.useful__list');
const usefulBtns = usefulList.querySelectorAll('.item__btn');
usefulBtns.forEach(usefulBtn => usefulBtn.addEventListener('click', () => {loadPage('.main_page')}));
