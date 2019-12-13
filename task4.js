var email = prompt("Please enter email");
condition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (email.match(condition)){
    alert("Valid Email");
}
else{
    alert("Please enter valid email address");
}