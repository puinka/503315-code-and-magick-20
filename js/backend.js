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

      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = message;
      document.body.insertAdjacentElement('afterbegin', node);
    }

  };

})();
