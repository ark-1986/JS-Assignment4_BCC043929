// Write a program that takes a positive integer from user

//simulates a dice using random() method

var a = Math.random();
var b = (a*4)+1;
var c = (a*6)+1;
var floor1 = Math.floor(b);
var floor2 = Math.floor(c);

document.write("Random dice Value : " + floor1, "<br>")
document.write("Random dice Value : " + floor2)