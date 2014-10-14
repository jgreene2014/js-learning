/**
 * Created by jsg665 on 10/8/2014.
 */

//retrieves input from a form field at text
var internalJavaScriptVariableAsText = document.getElementById("q1").value;

//retrieves input from a form field at number using parseInt
var internalJavaScriptVariableAsInt = parseInt(document.getElementById("q1").value);

//checks to see if a field has no value and sets that value to 0
if (isNaN(internalJavaScriptVariableAsInt))
    internalJavaScriptVariableAsInt = 0;

//set a field on the form to round to two decimal places using the toFixed(number of decimal places) function
document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);

//validate form data by checking to see if a field has empty ("") string data
if (document.getElementById("q1").value == "")
    alert("I'm sorry, but you must provide your name before submitting an order.");
//use the else if to test for a second condition
else if (document.getElementById("q2").value == ""||
    isNaN(document.getElementById("22").value))
    alert("I'm sorry but you must provide the number of minutes until pick-up before submitting an order.");
//final else to submit if both conditions don't match
else
// Submit order to server...
    form.submit();

//check to see if the browser accepts cookies
if (navigator.cookieEnabled){
}

//using switch instead of if and if/else
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
        //code to run
        break;

//using a for loop to iterate through some number set
var count = prompt("Enter a number greater than 0.", "10");
        if (count > 0){
        for (var x = count; x > 0; x--)
            alert("Starting in .." + x);
            alert("Roll film!");
        }//end if
        else
        alert("The number wasn't greater than 0, No movied for you!");

//using a while loop to iterate through some number set
var count = prompt("Enter a number greater than 0.", "10");
        if (count > 0){
            var x = count;
            while (x > 0 ){
                alert("Starting in .." + x);
                x ++;
            }//end while
            alert("Roll film!");
        }//end if
        else
            alert("The number wasn't greater than 0, No movied for you!");