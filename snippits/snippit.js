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