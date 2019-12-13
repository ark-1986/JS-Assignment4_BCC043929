var input = prompt("Enter your age");

var currdate = new Date();
var fullyear = currdate.getFullYear();

document.write("Your age is " + input, "<br>");
document.write("Your birth year is " + (fullyear-input));