'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var GRAF_PADDING = 45;
var GRAF_GAP = 50;
var BAR_HEIGHT = 150;
var PADDING_LEFT = CLOUD_X + GAP;
var PADDING_TOP = CLOUD_Y + GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var swapElements = function (firstElement, youElement) {
  var swap = firstElement;
  firstElement = youElement;
  youElement = swap;
};

var pushElementToStart = function (arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === 'Вы') {
      swapElements(arr1[0], arr1[i]);
      swapElements(arr2[0], arr2[i]);
    }
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, PADDING_LEFT, PADDING_TOP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', PADDING_LEFT, PADDING_TOP);
  ctx.fillText('Список результатов:', PADDING_LEFT, PADDING_TOP + FONT_GAP);

  var maxTime = getMaxElement(times);

  pushElementToStart(players, times);

  for (var i = 0; i < players.length; i++) {

    var positionX = CLOUD_X + GRAF_PADDING + (BAR_WIDTH + GRAF_GAP) * i;
    var barHeightCalculated = BAR_HEIGHT * times[i] / maxTime;
    var positionY = BAR_HEIGHT - barHeightCalculated + GRAF_PADDING * 2;

    ctx.fillStyle = '#000';

    ctx.fillText(players[i], positionX, CLOUD_Y + CLOUD_HEIGHT - GRAF_PADDING + FONT_GAP);
    ctx.fillText(Math.round(times[i]), positionX, positionY - GAP);

    if (i === 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '% , 50%)';
    }

    ctx.fillRect(positionX, positionY, BAR_WIDTH, barHeightCalculated);
  }

};


