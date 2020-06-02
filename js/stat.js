'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var GRAF_PADDING = 45;
var GRAF_GAP = 50;
var BAR_HEIGHT = 150;
// var barHeight = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var pushElementToStart = function (arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === 'Вы') {
      var swap = arr1[0];
      arr1[0] = 'Вы';
      arr1[i] = swap;

      swap = arr2[0];
      arr2[0] = arr2[i];
      arr2[i] = swap;
    }
  }

  return [arr1, arr2];

};

var randomizeSaturation = function() {
  var s = Math.floor(Math.random() * 100);
  return s;

  //return `hsl(0, ${s}, 50%)`;
}

// var roundTime = function() {
//   var roundedTimes;
//   for(var i = 0, i < times.length, i++ ){
//       console.log(done);
//   }
// }

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  pushElementToStart(players, times);



  for (var i = 0; i < players.length; i++) {


    ctx.fillStyle = '#000';

    ctx.fillText(players[i], CLOUD_X + GRAF_PADDING + (BAR_WIDTH + GRAF_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GRAF_PADDING + FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GRAF_PADDING + (BAR_WIDTH + GRAF_GAP) * i, BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime + GRAF_PADDING * 2 - GAP);

    var randomSaturation = randomizeSaturation();

    if (i === 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + randomSaturation + '% , 50%)';
      console.log(randomSaturation);
    }

    ctx.fillRect(CLOUD_X + GRAF_PADDING + (BAR_WIDTH + GRAF_GAP) * i, BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime + GRAF_PADDING * 2, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }


  }


  /*
  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }
  */
