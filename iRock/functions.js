/**
 * Created by jsg665 on 10/7/2014.
 */

var userName;

function greetUser(){

    if (navigator.cookieEnabled)
    userName = readCookie("irock_username");
    if (userName)
    alert("Hello, " + userName + " I missed you.");
    else
    alert("Hello, I am your pet rock.")
}

function touchRock(){
    if (userName) {
        alert("I like the attention," + userName + ". Thank you.");
    }//end if
    else {
        userName = prompt("What is your name", "Enter your name here.");
        if (userName)
            alert("It is good to meet you, " + username + ".");
        if (navigator.cookieEnabled)
            writeCookie("irock_username", userName, 5 * 365);
        else
            alert("Sorry, Cookies are not supported/enabled in your browser.  I won't remember you later.");
    }//end else
        document.getElementById("rockImg").src = "rock_happy.png";
    setTimeout("document.getElementById('rockImg').src = 'rock_lonley.png';",10000);
}//end touchRock

function resizeRock(){
    document.getElementById("rockImg").style.height = (documentbody.clientHeight - 100) * 0.9;
}