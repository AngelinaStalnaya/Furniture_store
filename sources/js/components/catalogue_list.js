// *** catalogue list fill in logic***


const catalogueList = document.querySelector('.catalogue__list');
const BDData = '[{"title":"Диван флоковый <br> “G-41”", "price":"17 990", "img":"hr-6-1920", "rate":"4.8"}, {"title":"Диван тканевый <br> “D-31”", "price":"28 490", "img":"hr-3-1920", "rate":"4.8"}, {"title":"Диван велюровый <br> “S-99”", "price":"19 990", "img":"hr-8-1920", "rate":"4.7"}, {"title":"Диван апартековый <br> “T-75”", "price":"69 990", "img":"hr-2-1920", "rate":"4.9"}, {"title":"Диван кожаный <br> “R-94”", "price":"94 990", "img":"hr-1-1920", "rate":"5.0"}, {"title":" Диван из шинила <br> “W-95”", "price":"22 990", "img":"hr-5-1920", "rate":"4.8"}, {"title":"Диван велюровый <br> “Y-68”", "price":"22 990", "img":"hr-4-1920", "rate":"5.0"}, {"title":"Диван из кожзама <br> “F-85”", "price":"26 990", "img":"hr-9-1920", "rate":"4.7"}, {"title":"Диван шиниловый <br> “V-43”", "price":"19 900", "img":"hr-7-1920", "rate":"4.8"}]';
const Data = JSON.parse(BDData);

const divElement = (element) => {
  const divElem = document.createElement('div');
  divElem.className = 'item__rate';
  divElem.innerHTML = '<svg class="rate__svg"><use xlink:href="img/sprite.svg#svg--star"></use></svg>';
  const rateNum = document.createElement('p');
  rateNum.className = 'rate__num';
  // change according the BD data:
  rateNum.innerHTML = `${Data[element].rate}`;
  divElem.appendChild(rateNum);
  return divElem.outerHTML;
};

const pictureElement = (element) => {
  const pictureElem = document.createElement('picture');
  pictureElem.className = 'item__img';
  const sourceElem = document.createElement('source');
  // change according the BD data:
  sourceElem.setAttribute('srcset', `img/${Data[element].img}.png`);
  sourceElem.setAttribute('type', 'image/png');
  sourceElem.setAttribute('media', '(min-width:0px)');
  pictureElem.appendChild(sourceElem);
  const imgElem = document.createElement('img');
  // change according the BD data:
  imgElem.setAttribute('src', `img/${Data[element].img}.png`);
  imgElem.setAttribute('alt', 'Фото товара');
  pictureElem.appendChild(imgElem);
  return pictureElem.outerHTML;
};

const titleElement = (element) => {
  const titleElem = document.createElement('h3');
  titleElem.className = 'item__title';
  // change according the BD data:
  titleElem.innerHTML = `${Data[element].title}`;
  return titleElem.outerHTML;
};

const priceElement = (element) => {
  const priceElem = document.createElement('p');
  priceElem.className = 'item__price';
  // change according the BD data:
  priceElem.innerHTML = `${Data[element].price} руб`;
  return priceElem.outerHTML;
};

const buttonElement = () => {
  const buttonElem = document.createElement('button');
  buttonElem.className = 'item__btn';
  buttonElem.innerHTML = 'Купить';
  return buttonElem.outerHTML;
};

const addListItem = (index) => {
  const listItem = document.createElement('li');
  listItem.className = 'list__item';
  listItem.innerHTML = divElement(index) + pictureElement(index) + titleElement(index) + priceElement(index) + buttonElement();
  catalogueList.appendChild(listItem);
};


for (let i = 0; i < Data.length; i++) {
  addListItem(i);
}
