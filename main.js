var $hotWheel = document.querySelector('#car');

var carData ={
  facing: 'right',
}

function carController(event){
  if(event.keyCode === 37){
    if(carData.facing === 'right'){
      $hotWheel.className = 'rotate-180-right';
      carData.facing = 'left';
    }
  }
  console.log('event', event);
}

window.addEventListener('keydown', carController);
