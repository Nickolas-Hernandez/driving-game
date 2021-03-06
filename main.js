var $hotWheel = document.querySelector('#car');
var intervalID;

var carData = {
  facing: 'east',
  location: {
    top: 0,
    left: 0
  },
  isDriving: false
};

function drive() {
  if (carData.facing === 'east') {
    carData.location.left += 5;
  } else if (carData.facing === 'west') {
    carData.location.left -= 5;
  } else if (carData.facing === 'north') {
    carData.location.top -= 5;
  } else if (carData.facing === 'south') {
    carData.location.top += 5;
  }
  $hotWheel.style.top = `${carData.location.top}px`;
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
    if (carData.isDriving === false) {
      intervalID = setInterval(drive, 16);
      carData.isDriving = true;
    } else {
      clearInterval(intervalID);
      carData.isDriving = false;
    }
  }
}

window.addEventListener('keydown', carController);
