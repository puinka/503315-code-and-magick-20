'use strict';

(function () {

  var setup = document.querySelector('.setup');
  //var wizard = setup.querySelector('.wizard');
  // var wizardCoat = wizard.querySelector('.wizard-coat');
  // var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  // var wizardEyes = wizard.querySelector('.wizard-eyes');
  // var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  // var fireball = setup.querySelector('.setup-fireball-wrap');
  // var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');
  var userNameInput = document.querySelector('.setup-user-name');

  // window.colorize(wizardCoat, window.data.COAT_COLORS, wizardCoatInput);
  // window.colorize(wizardEyes, window.data.EYES_COLORS, wizardEyesInput);
  // window.colorize(fireball, window.data.FIREBALL_COLORS, wizardFireballInput);

  //window.wizards.renderWizards();

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

