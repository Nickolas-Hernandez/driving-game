var $hotWheel = document.querySelector('#car');

var carData = {
  facing: 'east',
  location: {
    top: 0,
    left: 0
  }
};

function drive() {
  carData.location.left += 3;
  $hotWheel.style.left = `${carData.location.left}px`;
}

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
  } else if (event.keyCode === 32) {
    setInterval(drive, 16);
  }
}

window.addEventListener('keydown', carController);
