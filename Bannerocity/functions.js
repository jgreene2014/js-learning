/**
 * Created by jsg665 on 10/15/2014.
 */

function validateNonEmpty(inputField, helpText){
    // see if the input value contains any text
    if (inputField.value.length == 0){
        //The data is invalid, so notify the user
        if (helpText != null)
        helpText.innerHTML = "Please enter a value.";
        //alert("Please enter a legit value.");
        return false;
    }
    else {
        //the data is OK, so clear the help message
        helpText.innerHTML = "";
        return true;
    }//end else
}//end validateNonEmpty

function validateLength(minLength, maxLength, inputField, helpText) {
    //see if the input field is more than one character and less than 33
    if (inputField.value.length < minLength || inputField.value.length > maxLength) {
        if (helpText != null)
            helpText.innerHTML = "Please enter a value " + minLength + " to " + maxLength + "characters in length";
    return false;
   }//end if
    else {
        //if the data is ok, clear this message.
        helpText.innerHTML = "";
        return true;
    }//end else
}//end validateLength

function placeOrder(form) {
    if (validateNonEmpty(form["message"], form["message_help"]) &&
        validateNonEmpty(form["zipcode"], form["zipcode_help"]) &&
        validateNonEmpty(form["date"], form["date_help"]) &&
        validateNonEmpty(form["name"], form["name_help"]) &&
        validateNonEmpty(form["phone"], form["phone_help"]) &&
        validateNonEmpty(form["email"], form["email_help"])) {
        // Submit the order to the server
        form.submit();
    } else {
        alert("I'm sorry but there is something wrong with the order information.");
    }//end placeOrder
}
