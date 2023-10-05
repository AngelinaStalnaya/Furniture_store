// ***catalogue pagination logics***

const catalogueBtns = document.querySelector('.catalogue__pagination');
const catalogueList = document.querySelector('.catalogue__list');
const listItems = catalogueList.querySelectorAll('.list__item');
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
  const catalogueBtns = document.querySelector('.catalogue__pagination');
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination__btn';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', "Page" + index);
  catalogueBtns.appendChild(pageNumber);
};

// function to clear page buttons:
const clearPageNumbers = () => {
  catalogueBtns.innerHTML = '';
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
  document.querySelectorAll('.pagination__btn').forEach((button) => {
    button.classList.remove('pagination__btn-active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('pagination__btn-active');
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
  document.querySelectorAll('.pagination__btn').forEach((button) => {
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
