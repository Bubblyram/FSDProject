function myFunction() {
    var x, y,z,text;
    y = document.getElementById("fname").value;
    if (y==="") {
    text = "FirstName is empty";
    alert(text);
    } 
    z = document.getElementById("lname").value;
    if (z==="") {
    text = "LastName is empty";
    alert(text);
    }
    x = document.getElementById("pass").value;
    if (x==="") {
    text = "Password is empty";
    alert(text);
    } 
    x1= document.getElementById("pass").value;
    x = document.getElementById("pass").value;
    if(x.length<8||x.length>12){
        text="Password should be of length 8-12 Characters";
        alert(text);
    }else{
        if (x===x1) {
        text = "Strong Password";
        alert(text);
        }else{
        text="Password and Confirm Password Doesn't match";
        alert(text);
    }
    }
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    d=document.getElementById("mail").value;
    if(d.match(mailformat))
    {
        text="Valid email";
        alert(text);
    }else{
        text="Invalid Email";
        alert(text);
    }
}