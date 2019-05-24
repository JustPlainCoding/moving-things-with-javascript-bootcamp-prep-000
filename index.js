const app = "I don't do much.";

var dodger = document.getElementById('#dodger');
document.addEventListener('keydown', function(e) {
  if(e.which === 37) {
    console.log(e.which)
    moveDodgerLeft();
  }
});

function moveDodgerLeft(e) {
  debugger;
  var leftNumbers = 
  dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  if(left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}