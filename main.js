var $hotWheel = document.querySelector('#car');

var carData ={
  facing: 'right',
}

function carController(event){
  console.log('event', event );
  console.log('event.target', event.target );
}

window.addEventListener('keydown', carController);
