let content = document.getElementsByClassName('main');
// let catalogueContent = document.querySelector('.catalogue');
// let productCardContent = document.querySelector('.product_card');
// let cooperationContent = document.querySelector('.cooperation');

let mainBtn = document.querySelector('.main__btn');

// content.innerHTML = '<object width="100%" type="text/html" data="main.html"></object>';
function load_content(element) {
  if (element == mainBtn) {
    content.innerHTML='<object type="text/html" data="main.html width="100%"></object>'
  }
};
