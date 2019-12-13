var checkdate = new Date("12 Dec 2019");

if (checkdate.getDate() < 16){
    document.write("First fifteen days of the month");
}
else{
document.write("Last days of the month");
}