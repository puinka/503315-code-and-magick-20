'use strict';

(function () {


  var setup = document.querySelector('.setup');
  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {},
    onFireballChange: function (color) {}
  };


  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.randomizeColor(window.data.COAT_COLORS);
    this.style.fill = newColor;
    wizard.onCoatChange(newColor);
    //wizardCoatInput.value = newColor;
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.randomizeColor(window.data.EYES_COLORS);
    this.style.fill = newColor;
    wizard.onEyesChange(newColor);
    //wizardEyesInput.value = currentColor;
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = window.util.randomizeColor(window.data.FIREBALL_COLORS);
    this.style.background = newColor;
    wizard.onFireballChange(newColor);
    //wizardFireballInput.value = newColor;
  });

  return window.wizard = wizard;

})();
