'use strict';

(function () {


  window.backend = {

    load: function (onLoad, onError) {

      var URL = 'https://javascript.pages.academy/code-and-magick/data';

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200:
            onLoad(xhr.response);
            break;

          case 404:
            onError('Страница не найдена');
            break;

          default:
            onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });


      xhr.timeout = 1000;

      xhr.open('GET', URL);
      xhr.send();


    },

    save: function (data, onLoad, onError) {

      var URL = 'https://javascript.pages.academy/code-and-magick';

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.addEventListener('error', function () {
        onError('Ошибка отправки формы');
      });

      xhr.open('POST', URL);
      xhr.send(data);

    },

    onError: function (message) {

      var errorPopup = document.createElement('div');
      errorPopup.style = 'position: absolute; padding: 20px; width: 30%; font-size: 16px; text-align: center; display: block; color: #ee4830; background-color: #fff; z-index: 10';
      errorPopup.style.top = 50 + '%';
      errorPopup.style.left = 35 + '%';
      errorPopup.textContent = message;
      document.body.insertAdjacentElement('afterbegin', errorPopup);
    }

  };

})();
