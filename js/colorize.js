'use strict';

(function () {

  window.colorize = function (element, elementColor, elementInput) {
    element.addEventListener('click', function () {
      var color = window.util.randomizeColor(elementColor);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      elementInput.value = color;
    });
  };
})();
