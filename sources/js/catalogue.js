// *** catalogue list fill in logic***


const catalogueList = document.querySelector('.catalogue__list');
const BDData = '[{"title":"Диван флоковый <br> “G-41”", "price":"17 990", "img":"hr-6-1920", "rate":"4.8"}, {"title":"Диван тканевый <br> “D-31”", "price":"28 490", "img":"hr-3-1920", "rate":"4.8"}, {"title":"Диван велюровый <br> “S-99”", "price":"19 990", "img":"hr-8-1920", "rate":"4.7"}, {"title":"Диван апартековый <br> “T-75”", "price":"69 990", "img":"hr-2-1920", "rate":"4.9"}, {"title":"Диван кожаный <br> “R-94”", "price":"94 990", "img":"hr-1-1920", "rate":"5.0"}, {"title":" Диван из шинила <br> “W-95”", "price":"22 990", "img":"hr-5-1920", "rate":"4.8"}, {"title":"Диван велюровый <br> “Y-68”", "price":"22 990", "img":"hr-4-1920", "rate":"5.0"}, {"title":"Диван из кожзама <br> “F-85”", "price":"26 990", "img":"hr-9-1920", "rate":"4.7"}, {"title":"Диван шиниловый <br> “V-43”", "price":"19 900", "img":"hr-7-1920", "rate":"4.8"}]';
const Data = JSON.parse(BDData);

const divElement = (element) => {
  const divElem = document.createElement('div');
  divElem.className = 'catalogue__item__rate';
  divElem.innerHTML = '<svg class="catalogue__rate__svg"><use xlink:href="../img/sprite.svg#svg--star"></use></svg>';
  const rateNum = document.createElement('p');
  rateNum.className = 'catalogue__rate__num';
  // change according the BD data:
  rateNum.innerHTML = `${Data[element].rate}`;
  divElem.appendChild(rateNum);
  return divElem.outerHTML;
};

const pictureElement = (element) => {
  const pictureElem = document.createElement('picture');
  pictureElem.className = 'catalogue__item__img';
  const sourceElem = document.createElement('source');
  // change according the BD data:
  sourceElem.setAttribute('srcset', `../img/${Data[element].img}.png`);
  sourceElem.setAttribute('type', 'image/png');
  sourceElem.setAttribute('media', '(min-width:0px)');
  pictureElem.appendChild(sourceElem);
  const imgElem = document.createElement('img');
  // change according the BD data:
  imgElem.setAttribute('src', `../img/${Data[element].img}.png`);
  imgElem.setAttribute('alt', 'Фото товара');
  pictureElem.appendChild(imgElem);
  return pictureElem.outerHTML;
};

const titleElement = (element) => {
  const titleElem = document.createElement('h3');
  titleElem.className = 'catalogue__item__title';
  // change according the BD data:
  titleElem.innerHTML = `${Data[element].title}`;
  return titleElem.outerHTML;
};

const priceElement = (element) => {
  const priceElem = document.createElement('p');
  priceElem.className = 'catalogue__item__price';
  // change according the BD data:
  priceElem.innerHTML = `${Data[element].price} руб`;
  return priceElem.outerHTML;
};

const buttonElement = () => {
  const buttonElem = document.createElement('button');
  buttonElem.className = 'catalogue__item__btn';
  buttonElem.innerHTML = 'Купить';
  return buttonElem.outerHTML;
};

const addListItem = (index) => {
  const listItem = document.createElement('li');
  listItem.className = 'catalogue__list__item';
  const itemContent = document.createElement('article');
  itemContent.classList = 'catalogue__item__content';
  itemContent.innerHTML = divElement(index) + pictureElement(index) + titleElement(index) + priceElement(index) + buttonElement();
  listItem.appendChild(itemContent);
  catalogueList.appendChild(listItem);
};


for (let i = 0; i < Data.length; i++) {
  addListItem(i);
}


// ***catalogue pagination logics***

const catalogueBtnsContainer = document.querySelector('.catalogue__pagination');
const listItems = catalogueList.querySelectorAll('.catalogue__list__item');
let currentPage;

// define a number of list_items for a page for different media:
const getItemLimit = () => {
  return (window.screen.width > 992) ? 9 : 6;
};

// define total pages count with list_items:
const getPageCount = () => {
  return Math.ceil(listItems.length / getItemLimit());
};

// function for creation of a page button:
const addPageNumber = (index) => {
  const catalogueBtnsContainer = document.querySelector('.catalogue__pagination');
  const pageNumber = document.createElement('button');
  pageNumber.className = 'catalogue__pagination__btn';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', "Page" + index);
  catalogueBtnsContainer.appendChild(pageNumber);
};

// function to clear page buttons:
const clearPageNumbers = () => {
  catalogueBtnsContainer.innerHTML = '';
};

// function for addition of page buttons on html file:
const getPaginationNumbers = () => {
  var pageCount = getPageCount();

  for (let i = 1; i <= pageCount; i++) {
    addPageNumber(i);
  }
};

// function to set active page number:
const markActivePage = () => {
  document.querySelectorAll('.catalogue__pagination__btn').forEach((button) => {
    button.classList.remove('catalogue__pagination__btn-active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('catalogue__pagination__btn-active');
    };
  });
};

// function for filling currentPage by content:
const setCurrentPage = (pageNumber) => {
  currentPage = pageNumber;

  markActivePage();

  const prevDisplayRange = (pageNumber - 1) * getItemLimit();
  const currDisplayRange = pageNumber * getItemLimit();

  listItems.forEach((element, index) => {
    if (index >= prevDisplayRange && index < currDisplayRange) {
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    };
  });
};

// function to move on clicked page:
const moveToPage = () => {
  document.querySelectorAll('.catalogue__pagination__btn').forEach((button) => {
    const pageIndex = Number(button.getAttribute('page-index'));

    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    };
  });
};


// function for update data while page resize:
window.addEventListener('resize', () => {
  clearPageNumbers();
  getPaginationNumbers();
  setCurrentPage(1);
  moveToPage();
});


// function for call of addPageNumber function while loading catalogue.html:
window.addEventListener('load', () => {
  getPaginationNumbers();
  setCurrentPage(1);
  moveToPage();
});


// *** button event listener**

const loadPage = (pagename) => {
  window.location.pathname = `html/${pagename}.html`;
};


const catalogueBtns = document.querySelectorAll('.catalogue__item__btn');
const catalogueInfoBtn = document.querySelector('.catalogue__info__btn');

catalogueBtns.forEach(btn => btn.addEventListener('click', () => { loadPage('product_card') }));
catalogueInfoBtn.addEventListener('click', () => { loadPage('catalogue') });
