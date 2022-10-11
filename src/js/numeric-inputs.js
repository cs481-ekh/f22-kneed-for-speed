/* Dial 1 */

var num1 = document.getElementById("number-dial-1");
var sub1 = document.getElementById("minus-dial-1");
var add1 = document.getElementById("plus-dial-1");



var wrapper = document.getElementById("plus-dial-1");
var counter;
var count = 0;

  
add1.onmousedown= function() {
    counter = setInterval(function() {
      num1.innerHTML = count;
      count++;
      num1.stepUp();
    }, 500);
  }

  add1.onmouseup= function()  {
    clearInterval(counter)
  }

sub1.onclick = function(){
    num1.stepDown();
}

/* Dial 2 */

var num2 = document.getElementById("number-dial-2");
var sub2 = document.getElementById("minus-dial-2");
var add2 = document.getElementById("plus-dial-2");

add2.onclick = function(){
    num2.stepUp();
}

sub2.onclick = function(){
    num2.stepDown();
}