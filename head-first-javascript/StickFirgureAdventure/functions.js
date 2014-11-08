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

function replaceNodeText(id, newText) {
    var node = document.getElementById(id);
    while (node.firstChild)
    node.removeChild(node.firstChild);
    node.appendChild(document.createTextNode(newText));
}//end replaceNodeText

function changeSceneUsingSwitch (decision){
    var message = "";
    var decision1 = "";
    var decision2 = "";

    switch (curScene) {
        case 0:
            curScene = 1;
            message = "Your journey begins at a fork in the road.";
            decision1 = "Take the Path";
            decision2 = "Take the Bridge";

            //show the second decision
            document.getElementById("decision2").style.visibility = "visible";
            break;
        case 1:
            if (decision == 1) {
                curScene = 2;
                message = "You have arrived at a cute little house in the woods";
                decision1 = "Walk around Back";
                decision2 = "Knock on the Door";

            }//end if
            else {
                curScene = 3;
                message = "You are standing on the bridge overlooking a peaceful stream";
                decision1 = "Walk across the Bridge";
                decision2 = "Gaze into Stream";
            }//end else
            break;
        case 2:
            if (decision == 1) {
                curScene = 4;
                message = "Peeking through the window, you see a witch inside the house";
                decision1 = "Sneak by the Window";
                decision2 = "Wave at the witch";
            }//end if
            else {
                curScene = 5;
                message = "Sorry, a witch lines in the house and you just became part of her stew";
                decision1 = "Start Over";
                decision2 = "";

                //hide the second decision
                document.getElementById("decision2").style.visibility = "hidden";
            }//end else
            break;
        case 3:
            if (decision == 1) {
                curScene = 6;
                message = "Sorry, a troll lives on the other side of the bridge and you just became his lunch.";
                decision1 = "Start Over";
                decision2 = "";

                //hide the second decision
                document.getElementById("decision2").style.visibility = "hidden";
            }
            else {
                curScene = 7;
                message = "Your stare is interrupted by the arrival of a huge troll.";
                decision1 = "Say Hello to the Troll";
                decision2 = "Jump Into Stream";
            }//end else
            break;
        case 4:
            if (decision == 1) {
                curScene = 8;
                decision1 = "";
                decision2 = "";
            }
            else {
                curScene = 5;
                message = "Sorry, you became part of the witch's stew.";
                decision1 = "Start Over";
                decision2 = "";

                //hide the second decision
                document.getElementById("decision2").style.visibility = "hidden";
            }//end else
            break;
        case 5:
            curScene = 0;
            decision1 = "Start Over";
            decision2 = "";
            break;
        case 6:
            curScene = 0;
            decision1 = "Start Over";
            decision2 = "";
            break;
        case 7:
            if (decision == 1) {
                curScene = 6;
                message = "Sorry, you became the troll's tasty lunch.";
                decision1 = "Start Over";
                decision2 = "";

                //hide the second decision
                document.getElementById("decision2").style.visibility = "hidden";
            }
            else {
                curScene = 9;
                decision1 = "?";
                decision2 = "?";
            }//end else
            break;
        case 8:
            //to be continued
            break;
        case 9:
            //to be continued
            break;
    }
    // update the scene image
    document.getElementById("sceneImg").src = "scene" + curScene + ".png";
    /*if (message != "")
        alert(message);
    */

    //update the scene description text
    //document.getElementById("sceneText").innerHTML = message;
    /*var sceneText = document.getElementById("sceneText");
    while (sceneText.firstChild)
    sceneText.removeChild(sceneText.firstChild);
    sceneText.appendChild(document.createTextNode(message));
    */
    replaceNodeText("sceneText", message);
    replaceNodeText("decision1", decision1);
    replaceNodeText("decision2", decision2);

    //update the decision history
    var history = document.getElementById("history");
    if (curScene != 0){
        var decisionElem = document.createElement("p");
        decisionElem.appendChild(document.createTextNode("Decision " + decision + " -> Scene " + curScene + " : " + message));
        history.appendChild(decisionElem);
    }//end if
    else {
    //clear the decision history
        while (history.firstChild)
        history.removeChild(history.firstChild);
    }//end else
}//end changeSceneUsingSwitch
