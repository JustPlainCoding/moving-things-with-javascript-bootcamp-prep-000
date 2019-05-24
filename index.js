const app = "I don't do much.";

var dodger = document.getElementById('dodger');
document.addEventListener('keydown', function(e) {
  console.log(e.which)
  if(e.which === 37) {
    moveDodgerLeft();
  } else if(e.which === 39) {
    moveDodgerRight()
  }
});

function moveDodgerLeft(e) {
  var leftNumbers = 
  dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  if(left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}