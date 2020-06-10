'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_AMOUNT = 4;

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
