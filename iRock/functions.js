/**
 * Created by jsg665 on 10/7/2014.
 */

function touchRock(){
    var userName = prompt("What is your name?", "Enter your name here.");
    if (userName) {
        alert("It is good to meet you, " + userName + ".");
        document.getElementById("rockImg").src = "smiling_rock.jpg";
    }//end if
}//end touchRock