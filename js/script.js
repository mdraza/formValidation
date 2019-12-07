function validate(){
    var fullName = document.getElementById("fname").value;
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    var cpassword = document.getElementById("cpass").value;
    var email = document.getElementById("email").value;

    /*---Pattern---*/
    var fname = /^[A-Za-z. ]{3,}$/;
    var uname = /^[a-zA-Z]{3,}[0-9]{0,}$/;
    var pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var emailv = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    /*---Condition---*/
    if(!fname.test(fullName)){
        document.getElementById("fnameErr").innerHTML = "Invalid Name!!!";
        return false;
    } else{
        document.getElementById("fnameErr").innerHTML = "";
    }
    if(!uname.test(username)){
        document.getElementById("unameErr").innerHTML = "Invalid User Name!!!";
        return false;
    } else{
        document.getElementById("unameErr").innerHTML = "";
    }
    if(!pass.test(password)){
        document.getElementById("passErr").innerHTML = "Invalid Password, Please Insert one special character and number!!!";
        return false;
    } else{
        document.getElementById("passErr").innerHTML = "";
    }
    if(!pass.test(cpassword)){
        document.getElementById("cpassErr").innerHTML = "Password & Confirm Password is not Matched!!!";
        return false;
    } else{
        document.getElementById("cpassErr").innerHTML = "";
    }
    if(!emailv.test(email)){
        document.getElementById("emailErr").innerHTML = "Invalid Email ID!!!";
        return false;
    } else{
        document.getElementById("emailErr").innerHTML = "";
    }

}