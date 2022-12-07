function acceptInput () {
    let x = document.forms["loginForm"]["userName"].value;
    let y = document.forms["loginForm"]["password"].value;
    let text;
    if(x == "admin" && y == "123"){
        text = "Welcome";
    }
    else{
        text= "not registered";
    }
    document.getElementById("demo").innerHTML = text;

}

