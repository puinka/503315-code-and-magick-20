'use strict';

(function () {

  var setup = document.querySelector('.setup');

  window.wizards = {
    randomizeName: function (arr1, arr2) {
      var firstIndex = Math.floor((Math.random() * arr1.length));
      var secondIndex = Math.floor((Math.random() * arr2.length));
      var fullName = arr1[firstIndex] + ' ' + arr2[secondIndex];
      return fullName;
    },

    generateWizards: function (amount) {
      var wizards = [];

      for (var i = 0; i < amount; i++) {
        wizards [i] = {
          name: window.wizards.randomizeName(window.data.WIZARD_FIRST_NAMES, window.data.WIZARD_SECOND_NAMES),
          coatColor: window.util.randomizeColor(window.data.COAT_COLORS),
          eyesColor: window.util.randomizeColor(window.data.EYES_COLORS)
        };

      }
      return wizards;
    },

    renderWizard: function (wizard) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

      return wizardElement;
    },

    renderWizards: function () {

      var randomWizards = window.wizards.generateWizards(window.data.WIZARD_AMOUNT);
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < randomWizards.length; i++) {
        fragment.appendChild(window.wizards.renderWizard(randomWizards[i]));
      }

      var similarListElement = document.querySelector('.setup-similar-list');

      similarListElement.appendChild(fragment);

      setup.querySelector('.setup-similar').classList.remove('hidden');
    }
  };
})();
