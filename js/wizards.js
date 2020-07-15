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


  // var randomizeName = function (arr1, arr2) {
  //   var firstIndex = Math.floor((Math.random() * arr1.length));
  //   var secondIndex = Math.floor((Math.random() * arr2.length));
  //   var fullName = arr1[firstIndex] + ' ' + arr2[secondIndex];
  //   return fullName;
  // };

  // var generateWizards = function (amount) {
  //   var wizards = [];

  //   for (var i = 0; i < amount; i++) {
  //     wizards [i] = {
  //       name: randomizeName(window.data.WIZARD_FIRST_NAMES, window.data.WIZARD_SECOND_NAMES),
  //       coatColor: window.util.randomizeColor(window.data.COAT_COLORS),
  //       eyesColor: window.util.randomizeColor(window.data.EYES_COLORS)
  //     };

  //   }
  //   return wizards;
  // };

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

  // var fragment = document.createDocumentFragment();
  // for (var i = 0; i < wizards.length; i++) {
  //   fragment.appendChild(renderWizard(wizards[i]));
  // }
  // similarListElement.appendChild(fragment);

  // setup.querySelector('.setup-similar').classList.remove('hidden');

  // window.backend.load(function (wizards) {
  //   var fragment = document.createDocumentFragment();

  //   for (var i = 0; i < wizards.length; i++) {
  //     fragment.appendChild(renderWizard(wizards[i]));
  //   }
  //   similarListElement.appendChild(fragment);

  //   setup.querySelector('.setup-similar').classList.remove('hidden');
  // }, function () {});

  //   var renderWizards = function () {

  //     //var randomWizards = generateWizards(window.data.WIZARD_AMOUNT);
  //     var fragment = document.createDocumentFragment();

  //     for (var i = 0; i < randomWizards.length; i++) {
  //       fragment.appendChild(renderWizard(randomWizards[i]));
  //     }

  //     similarListElement.appendChild(fragment);

  //     setup.querySelector('.setup-similar').classList.remove('hidden');
  //   };

  // window.wizards = {

  //   renderWizards: renderWizards

  // };
})();
