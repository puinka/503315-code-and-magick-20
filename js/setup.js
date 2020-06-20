'use strict';

(function () {

  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');
  var wizard = setup.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var userNameInput = document.querySelector('.setup-user-name');

  window.colorize(wizardCoat, window.data.COAT_COLORS);
  window.colorize(fireball, window.data.FIREBALL_COLORS);

  window.wizards.renderWizards();

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




// var wizardEyes = wizard.querySelector('.wizard-eyes');
// var eyesInput = setup.querySelector('input[name="eyes-color"]');




// var renderWizard = function (wizard) {
//   var similarWizardTemplate = document.querySelector('#similar-wizard-template')
//     .content
//     .querySelector('.setup-similar-item');
//   var wizardElement = similarWizardTemplate.cloneNode(true);

//   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//   wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

//   return wizardElement;
// };

// var renderWizards = function () {

//   var randomWizards = generateWizards(WIZARD_AMOUNT);
//   var fragment = document.createDocumentFragment();

//   for (var i = 0; i < randomWizards.length; i++) {
//     fragment.appendChild(renderWizard(randomWizards[i]));
//   }

//   var similarListElement = document.querySelector('.setup-similar-list');

//   similarListElement.appendChild(fragment);



//   setup.querySelector('.setup-similar').classList.remove('hidden');
// };






// wizardCoat.addEventListener('click', function () {
//   var currentColor = randomizeColor(COAT_COLORS);
//   wizardCoat.style.fill = currentColor;
//   coatInput.value = currentColor;
// });

// wizardEyes.addEventListener('click', function () {
//   var currentColor = randomizeColor(EYES_COLORS);
//   wizardEyes.style.fill = currentColor;
//   eyesInput.value = currentColor;
// });

// wizardFireball.addEventListener('click', function () {
//   var currentColor = randomizeColor(FIREBALL_COLORS);
//   wizardFireball.style.background = currentColor;
//   fireballInput.value = currentColor;
// });
