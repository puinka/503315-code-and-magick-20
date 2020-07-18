'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    randomizeColor: function (arr) {
      var randomIndex = Math.floor((Math.random() * arr.length));
      var randomColor = arr[randomIndex];
      return randomColor;
    },

    shuffleArray: function (arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }
  };

})();
