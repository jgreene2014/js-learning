/**
 * Created by jsg665 on 10/13/2014.
 */

var curScene = 0;

function changeScene (decision){
    var message = "";

    if (curScene == 0){
        curScene = 1;
        message = "Your journey begins at a fork in the road.";
    }//end if
    else if (curScene == 1){
        if (decision == 1){
            curScene = 2;
            message = "You have arrived at a cute little house in the woods";
        }//end if
        else {
            curScene = 3;
            message = "You are standing on the bridge overlooking a peaceful stream";
        }//end else
    }//end else if #1

    else if (curScene == 2){
        if (decision == 1){
            curScene = 4;
            message = "Peeking through the window, you see a witch inside the house";
        }//end if
        else {
            curScene = 5;
            message = "Sorry, a witch lines in the house and you just became part of her stew";
        }//end else
    }//end else if #2

    else if (curScene == 3) {
        if (decision == 1) {
            curScene = 6;
            message = "Sorry, a troll lives on the other side of the bridge and you just became his lunch.";
        }
        else {
            curScene = 7;
            message = "Your stare is interrupted by the arrival of a huge troll.";
        }
    }// end else if #3

    else if (curScene == 4) {
        if (decision == 1) {
            curScene = 8;
        }
        else {
            curScene = 5;
            message = "Sorry, you became part of the witch's stew.";
        }
    } //end else if #4

    else if (curScene == 5) {
        curScene = 0;
    }//end else if #5

    else if (curScene == 6) {
        curScene = 0;
    }//end else if #6

    else if (curScene == 7) {
        if (decision == 1) {
            curScene = 6;
            message = "Sorry, you became the troll's tasty lunch.";
        }
        else {
            curScene = 9;
        }
    }//end else if #7

    else if (curScene == 8) {
    }//end else if #8
    else if (curScene == 9) {
    }//end else if #9

    document.getElementById("sceneImg").src = "scene" + curScene + ".png";
    if (message != "")
    alert(message);
}//end changeScene

function changeSceneUsingSwitch (decision){
    var message = "";

    switch (curScene) {
        case 0:
            curScene = 1;
            message = "Your journey begins at a fork in the road.";
            break;
        case 1:
            if (decision == 1) {
                curScene = 2;
                message = "You have arrived at a cute little house in the woods";
            }//end if
            else {
                curScene = 3;
                message = "You are standing on the bridge overlooking a peaceful stream";
            }//end else
            break;
        case 2:
            if (decision == 1) {
                curScene = 4;
                message = "Peeking through the window, you see a witch inside the house";
            }//end if
            else {
                curScene = 5;
                message = "Sorry, a witch lines in the house and you just became part of her stew";
            }//end else
            break;
        case 3:
            if (decision == 1) {
                curScene = 6;
                message = "Sorry, a troll lives on the other side of the bridge and you just became his lunch.";
            }
            else {
                curScene = 7;
                message = "Your stare is interrupted by the arrival of a huge troll.";
            }//end else
            break;
        case 4:
            if (decision == 1) {
                curScene = 8;
            }
            else {
                curScene = 5;
                message = "Sorry, you became part of the witch's stew.";
            }//end else
            break;
        case 5:
            curScene = 0;
            break;
        case 6:
            curScene = 0;
            break;
        case 7:
            if (decision == 1) {
                curScene = 6;
                message = "Sorry, you became the troll's tasty lunch.";
            }
            else {
                curScene = 9;
            }//end else
            break;
        case 8:
            //to be continued
            break;
        case 9:
            //to be continued
            break;
    }

    document.getElementById("sceneImg").src = "scene" + curScene + ".png";
    if (message != "")
        alert(message);
}//end changeScene
