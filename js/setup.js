'use strict';

(function () {

  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function () {
    var valueLength = userNameInput.value.length;
    if (valueLength < window.data.MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Ещё ' + (window.data.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.data.MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - window.data.MAX_NAME_LENGTH) + ' симв.');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();

