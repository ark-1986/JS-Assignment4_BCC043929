// round a number to a given decimal places.
var num1 = 16.765; // 2 places
var num2 = 12.37982; // 2 places
var num3 = -9.3079499 // 4 places


var output1 = num1.toFixed(2);
var output2 = num2.toFixed(2);
var output3 = num3.toFixed(4);

document.write("input: "+num1+" -----> output: "+output1, "<br>");
document.write("input: "+num2+" -----> output: "+output2, "<br>");
document.write("input: "+num3+" -----> output: "+output3);