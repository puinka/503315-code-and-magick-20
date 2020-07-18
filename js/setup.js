'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setup.classList.add('hidden');
      }
    });
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setup.classList.add('hidden');
      }
    });
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

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

