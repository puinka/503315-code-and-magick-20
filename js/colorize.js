'use strict';

(function () {

  window.colorize = function (element, elementColor) {
    element.addEventListener('click', function () {
      var color = window.util.randomizeColor(elementColor);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
