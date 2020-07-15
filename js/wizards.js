'use strict';

(function () {

  var WIZARD_AMOUNT = 4;

  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var onLoad = function (data) {

    shuffleArray(data);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_AMOUNT; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onLoad, window.backend.onError);

  var renderWizard = function (wizard) {


    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var shuffleArray = function (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * i);
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

})();
