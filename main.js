var $hotWheel = document.querySelector('#car');

var carData = {
  facing: 'east'
};

function carController(event) {
  if (event.keyCode === 37) {
    $hotWheel.className = 'rotate-180-left';
    carData.facing = 'west';
  } else if (event.keyCode === 38) {
    $hotWheel.className = 'rotate-90-left';
    carData.facing = 'north';
  } else if (event.keyCode === 39) {
    $hotWheel.className = '';
    carData.facing = 'east';
  } else if (event.keyCode === 40) {
    $hotWheel.className = 'rotate-90-right';
    carData.facing = 'south';
  }
}

window.addEventListener('keydown', carController);
