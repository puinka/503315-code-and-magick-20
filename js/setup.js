'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_AMOUNT = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var coatInput = setup.querySelector('input[name="coat-color"]');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var eyesInput = setup.querySelector('input[name="eyes-color"]');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var fireballInput = setup.querySelector('input[name="fireball-color"]');

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

var randomizeName = function (arr1, arr2) {
  var firstIndex = Math.floor((Math.random() * arr1.length));
  var secondIndex = Math.floor((Math.random() * arr2.length));
  var fullName = arr1[firstIndex] + ' ' + arr2[secondIndex];
  return fullName;
};

var randomizeColor = function (arr) {
  var randomIndex = Math.floor((Math.random() * arr.length));
  var randomColor = arr[randomIndex];
  return randomColor;
};

var generateWizards = function (amount) {
  var wizards = [];

  for (var i = 0; i < amount; i++) {
    wizards [i] = {
      name: randomizeName(WIZARD_FIRST_NAMES, WIZARD_SECOND_NAMES),
      coatColor: randomizeColor(COAT_COLORS),
      eyesColor: randomizeColor(EYES_COLORS)
    };

  }
  return wizards;
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {

  var randomWizards = generateWizards(WIZARD_AMOUNT);
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < randomWizards.length; i++) {
    fragment.appendChild(renderWizard(randomWizards[i]));
  }

  var similarListElement = document.querySelector('.setup-similar-list');

  similarListElement.appendChild(fragment);

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizards();

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

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

wizardCoat.addEventListener('click', function () {
  var currentColor = randomizeColor(COAT_COLORS);
  wizardCoat.style.fill = currentColor;
  coatInput.value = currentColor;
});

wizardEyes.addEventListener('click', function () {
  var currentColor = randomizeColor(EYES_COLORS);
  wizardEyes.style.fill = currentColor;
  eyesInput.value = currentColor;
});

wizardFireball.addEventListener('click', function () {
  var currentColor = randomizeColor(FIREBALL_COLORS);
  wizardFireball.style.background = currentColor;
  fireballInput.value = currentColor;
});
