//convert number into words (FOUR DIGITS CODE)
var num = parseInt(prompt("Please input number to word"))
var strNumber = num.toString();
var singleNum = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
                 "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]; 
var doubleNums = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var hundredNums = ["", "One Hundred", "Two Hundred", "Three Hundred", "Four Hundred", "Five Hundred", "Six Hundred",
                 "Seven Hundred", "Eight Hundred", "Nine Hundred"];
var thNums = ["", "One Thousand", "Two Thousand", "Three Thousand", "Four Thousand", "Five Thousand", "Six Thousand",
                 "Seven Thousand", "Eight Thousand", "Nine Thousand",];

//Conversion from 1 - 99
if(num < 20) {
    document.write(singleNum[num]);
} else if(strNumber.length === 2 && strNumber.charAt(1) === "0") {
    document.write(doubleNums[strNumber.charAt(0)]);
} else if(num < 100) {
    document.write(doubleNums[strNumber.charAt(0)] + " " + singleNum[strNumber.charAt(1)]);
} 

//Conversion from 100 - 999
else if (strNumber.length === 3 && strNumber.charAt(1) === "0" && strNumber.charAt(2) === "0") {
    document.write(hundredNums[strNumber.charAt(0)]);
} else if (strNumber.length === 3 && strNumber.charAt(1) === "1") {
    document.write(hundredNums[strNumber.charAt(0)] + " & " + singleNum[strNumber.charAt(1) + strNumber.charAt(2)]);
} else if (strNumber.length === 3 && strNumber.charAt(1) === "0") {
    document.write(hundredNums[strNumber.charAt(0)] + " & " + singleNum[strNumber.charAt(2)]);
} else if (num > 100 && num < 1000) {
    document.write(hundredNums[strNumber.charAt(0)] + " & " + doubleNums[strNumber.charAt(1)] + " " + singleNum[strNumber.charAt(2)]);
} 

//Conversion for 1000+ values
else if (strNumber.length === 4 && strNumber.charAt(1) === "0" && strNumber.charAt(2) === "0" && strNumber.charAt(3) === "0") {
    document.write(thNums[strNumber.charAt(0)])
} else if (strNumber.length === 4 && strNumber.charAt(1) === "0" && strNumber.charAt(2) === "1") {
    document.write(thNums[strNumber.charAt(0)] + " & " +singleNum[strNumber.charAt(2) + strNumber.charAt(3)]);
}  else if (strNumber.length === 4) {
    document.write(thNums[strNumber.charAt(0)] + " " + hundredNums[strNumber.charAt(1)] + " & " + doubleNums[strNumber.charAt(2)] + " " + singleNum[strNumber.charAt(3)]);
}