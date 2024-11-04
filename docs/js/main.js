"use strict";

// ***special_offers + high_rate + useful  list_item display logic***

var specialOffersList = document.querySelector('.special-offers__list');
var specialItems = specialOffersList.querySelectorAll('.special-offers__item');
var specialLimit;
var highRateList = document.querySelector('.high-rate__list');
var highItems = highRateList.querySelectorAll('.high-rate__item');
var highLimit;
var usefulList = document.querySelector('.useful__list');
var usefulItems = usefulList.querySelectorAll('.useful__item');
var usefulLimit;
var getSpecialListLimit = function getSpecialListLimit() {
  var screenWidth = window.screen.width;
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
  }
  ;
  return specialLimit;
};
var getHighListLimit = function getHighListLimit() {
  var screenWidth = window.screen.width;
  if (screenWidth > 1440) {
    return 8;
  } else {
    return 6;
  }
  ;
};
var getUsefulListLimit = function getUsefulListLimit() {
  var screenWidth = window.screen.width;
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
  }
  ;
  return usefulLimit;
};
var displayItems = function displayItems() {
  specialItems.forEach(function (specialItem) {
    return specialItem.style.display = 'none';
  });
  highItems.forEach(function (highItem) {
    return highItem.style.display = 'none';
  });
  usefulItems.forEach(function (usefulItem) {
    return usefulItem.style.display = 'none';
  });
  for (var i = 0; i < getSpecialListLimit(); i++) {
    specialItems[i].style.display = 'flex';
  }
  ;
  for (var _i = 0; _i < getHighListLimit(); _i++) {
    highItems[_i].style.display = 'flex';
  }
  for (var _i2 = 0; _i2 < getUsefulListLimit(); _i2++) {
    usefulItems[_i2].style.display = 'flex';
  }
};
window.addEventListener('resize', function () {
  displayItems();
});
window.addEventListener('load', function () {
  displayItems();
});

// *** button event listener***

var redirect = function redirect(pagename) {
  window.location.pathname = "/".concat(pagename);
};
var specialBtns = document.querySelectorAll('.special-offers__btn');
var highBtns = document.querySelectorAll('.high-rate__btn');
var topBtns = document.querySelectorAll('.top-categories__btn');
var advertiseBtn = document.querySelector('.advertise__btn');
specialBtns.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    redirect('product_card');
  });
});
highBtns.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    redirect('product_card');
  });
});
topBtns.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    redirect('catalogue');
  });
});
advertiseBtn.addEventListener('click', function () {
  redirect('catalogue');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInNwZWNpYWxPZmZlcnNMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3BlY2lhbEl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInNwZWNpYWxMaW1pdCIsImhpZ2hSYXRlTGlzdCIsImhpZ2hJdGVtcyIsImhpZ2hMaW1pdCIsInVzZWZ1bExpc3QiLCJ1c2VmdWxJdGVtcyIsInVzZWZ1bExpbWl0IiwiZ2V0U3BlY2lhbExpc3RMaW1pdCIsInNjcmVlbldpZHRoIiwid2luZG93Iiwic2NyZWVuIiwid2lkdGgiLCJnZXRIaWdoTGlzdExpbWl0IiwiZ2V0VXNlZnVsTGlzdExpbWl0IiwiZGlzcGxheUl0ZW1zIiwiZm9yRWFjaCIsInNwZWNpYWxJdGVtIiwic3R5bGUiLCJkaXNwbGF5IiwiaGlnaEl0ZW0iLCJ1c2VmdWxJdGVtIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWRpcmVjdCIsInBhZ2VuYW1lIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbmNhdCIsInNwZWNpYWxCdG5zIiwiaGlnaEJ0bnMiLCJ0b3BCdG5zIiwiYWR2ZXJ0aXNlQnRuIiwiYnRuIl0sInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKipzcGVjaWFsX29mZmVycyArIGhpZ2hfcmF0ZSArIHVzZWZ1bCAgbGlzdF9pdGVtIGRpc3BsYXkgbG9naWMqKipcblxuY29uc3Qgc3BlY2lhbE9mZmVyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlY2lhbC1vZmZlcnNfX2xpc3QnKTtcbmNvbnN0IHNwZWNpYWxJdGVtcyA9IHNwZWNpYWxPZmZlcnNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVjaWFsLW9mZmVyc19faXRlbScpO1xubGV0IHNwZWNpYWxMaW1pdDtcbmNvbnN0IGhpZ2hSYXRlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXJhdGVfX2xpc3QnKTtcbmNvbnN0IGhpZ2hJdGVtcyA9IGhpZ2hSYXRlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaC1yYXRlX19pdGVtJyk7XG5sZXQgaGlnaExpbWl0O1xuY29uc3QgdXNlZnVsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VmdWxfX2xpc3QnKTtcbmNvbnN0IHVzZWZ1bEl0ZW1zID0gdXNlZnVsTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlZnVsX19pdGVtJyk7XG5sZXQgdXNlZnVsTGltaXQ7XG5cblxuY29uc3QgZ2V0U3BlY2lhbExpc3RMaW1pdCA9ICgpID0+IHtcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHNjcmVlbldpZHRoID4gOTkyOlxuICAgICAgc3BlY2lhbExpbWl0ID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2NyZWVuV2lkdGggPiA3MjAgJiYgc2NyZWVuV2lkdGggPD0gOTkyOlxuICAgICAgc3BlY2lhbExpbWl0ID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2NyZWVuV2lkdGggPD0gNzIwOlxuICAgICAgc3BlY2lhbExpbWl0ID0gNjtcbiAgICAgIGJyZWFrO1xuICB9O1xuICByZXR1cm4gc3BlY2lhbExpbWl0O1xufTtcblxuY29uc3QgZ2V0SGlnaExpc3RMaW1pdCA9ICgpID0+IHtcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBpZiAoc2NyZWVuV2lkdGggPiAxNDQwKSB7XG4gICAgcmV0dXJuIDg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDY7XG4gIH07XG59XG5cbmNvbnN0IGdldFVzZWZ1bExpc3RMaW1pdCA9ICgpID0+IHtcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHNjcmVlbldpZHRoID4gMTQ0MDpcbiAgICAgIHVzZWZ1bExpbWl0ID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2NyZWVuV2lkdGggPiA5OTIgJiYgc2NyZWVuV2lkdGggPD0gMTQ0MDpcbiAgICAgIHVzZWZ1bExpbWl0ID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2NyZWVuV2lkdGggPiA3MjAgJiYgc2NyZWVuV2lkdGggPD0gOTkyOlxuICAgICAgdXNlZnVsTGltaXQgPSAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBzY3JlZW5XaWR0aCA8PSA3MjA6XG4gICAgICB1c2VmdWxMaW1pdCA9IDU7XG4gICAgICBicmVhaztcbiAgfTtcbiAgcmV0dXJuIHVzZWZ1bExpbWl0O1xufTtcblxuXG5jb25zdCBkaXNwbGF5SXRlbXMgPSAoKSA9PiB7XG4gIHNwZWNpYWxJdGVtcy5mb3JFYWNoKHNwZWNpYWxJdGVtID0+IHNwZWNpYWxJdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICBoaWdoSXRlbXMuZm9yRWFjaChoaWdoSXRlbSA9PiBoaWdoSXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgdXNlZnVsSXRlbXMuZm9yRWFjaCh1c2VmdWxJdGVtID0+IHVzZWZ1bEl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRTcGVjaWFsTGlzdExpbWl0KCk7IGkrKykge1xuICAgIHNwZWNpYWxJdGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0SGlnaExpc3RMaW1pdCgpOyBpKyspIHtcbiAgICBoaWdoSXRlbXNbaV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0VXNlZnVsTGlzdExpbWl0KCk7IGkrKykge1xuICAgIHVzZWZ1bEl0ZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH1cbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGRpc3BsYXlJdGVtcygpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBkaXNwbGF5SXRlbXMoKTtcbn0pO1xuXG5cbi8vICoqKiBidXR0b24gZXZlbnQgbGlzdGVuZXIqKipcblxuY29uc3QgcmVkaXJlY3QgPSAocGFnZW5hbWUpID0+IHtcbiAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gYGh0bWwvJHtwYWdlbmFtZX0uaHRtbGA7XG5cbn07XG5cbmNvbnN0IHNwZWNpYWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWNpYWwtb2ZmZXJzX19idG4nKTtcbmNvbnN0IGhpZ2hCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2gtcmF0ZV9fYnRuJyk7XG5jb25zdCB0b3BCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvcC1jYXRlZ29yaWVzX19idG4nKTtcbmNvbnN0IGFkdmVydGlzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHZlcnRpc2VfX2J0bicpO1xuXG5zcGVjaWFsQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHJlZGlyZWN0KCdwcm9kdWN0X2NhcmQnKSB9KSk7XG5oaWdoQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHJlZGlyZWN0KCdwcm9kdWN0X2NhcmQnKSB9KSk7XG50b3BCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgcmVkaXJlY3QoJ2NhdGFsb2d1ZScpIH0pKTtcbmFkdmVydGlzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgcmVkaXJlY3QoJ2NhdGFsb2d1ZScpIH0pO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxR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
