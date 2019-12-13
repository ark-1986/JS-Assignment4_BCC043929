var checdate = new Date();

var millisecondssice_1_Jan_1970 = checdate.getTime();
var minutssice_1_jan_1970 = (millisecondssice_1_Jan_1970/60000);

document.write("Current Date : " + checdate, "<br>");
document.write("Elapsed millisecond since Januray 1,1970 :" + millisecondssice_1_Jan_1970,"<br>");
document.write("Elapsed mintus since 1 Jan 1970 : " + minutssice_1_jan_1970);