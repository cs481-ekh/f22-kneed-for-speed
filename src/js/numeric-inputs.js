/* Dial 1 */

var num1 = document.getElementById("number-dial-1");
var sub1 = document.getElementById("minus-dial-1");
var add1 = document.getElementById("plus-dial-1");

add1.onclick = function(){
    num1.stepUp();
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