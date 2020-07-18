'use strict';
(function () {
  var WIZARD_AMOUNT = 4;
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (element) {

    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = element.name;
    wizardElement.querySelector('.wizard-coat').style.fill = element.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = element.colorEyes;

    return wizardElement;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    var takeNumber = data.length > WIZARD_AMOUNT ? WIZARD_AMOUNT : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };
})();
