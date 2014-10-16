/**
 * Created by jsg665 on 10/15/2014.
 */

//------------------------------------------validateNonEmpty----------------------------------
// see if the input field contains any text
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

//----------------------------------------validateNonEmptyUsingRegEx------------------------
//validate non empty string using RegEx
function validateNonEmptyUsingReqEx (inputField, helpText){
    // see if the input value contains any text
    return validateRegEx(/.+/,inputField.value, helpText, "Please enter a value.");
}//end validateNonEmptyUsingReqEx

//----------------------------------------validateLengthUsingRegEx----------------------------
// // see if the input field is more than one character and less than 33
function validateLengthUsingRegEx(minLength, maxLength, inputField, helpText) {
    // See if the input value contains at least minLength but no more than maxLength characters
    return validateRegEx(new RegExp("^.{" + minLength + "," + maxLength + "}$"),
        inputField.value, helpText,
            "Please enter a value " + minLength + " to " + maxLength +
            " characters in length.");
}//end validateLengthUsingRegEx

//------------------------------------------validateLength----------------------------------
// see if the input field is more than one character and less than 33
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

//------------------------------------------validateZIPCode----------------------------------
// see if the ZIP code is 5 digits and then check to see if it's a number
function validateZIPCode(inputField, helpText){
    //First see if the input value length is anything other than 5
    if (inputField.value.length != 5) {
        if (helpText != null)
            helpText.innerHTML = "Please enter a ZIP Code that's exactly 5 digits";
        return false;
    }//end if
    else if (isNaN(inputField.value)){
        //The data is invalid, so set the help message
        if (helpText != null)
            helpText.innerHTML = "Please enter a number";
        return false;
    }//end else if check for number only
    else {
        //if the data is ok, clear this message.
        helpText.innerHTML = "";
        return true;
    }//end else
}//end

//------------------------------------------validateZIPCodeUsingRegEx----------------------------------
// see if the ZIP code is 5 digits and then check to see if it's a number
function validateZIPCodeUsingRegEx (inputField, helpText){
    // first see if the input value contains data
    if (!validateRegEx(inputField,helpText))
    return false;

    //see if the input value is a ZIP Code
    return validateRegEx(/^\d{5}$/,inputField.value, helpText, "Please enter a 5 digit ZIP code.");
}//end validateZipCodeUsingRegEx

//---------------------------------------validateDate--------------------------------------
// see if the date field is properly formatted
function validateDate(inputField, helpText){
    //first see if the input value contains data
    if (!validateNonEmpty(inputField, helpText)) {
        return false;

        //check if the input value is a date
        return validateRegEx(/^\d{2}\/\d{2}\/(\d{2}|\d{4})$/, inputField.value, helpText,
            "Please enter a date (for example, 01/14/1975).");
    }//end if
}//end validateDate

//--------------------------------------validatePhoneNumber-------------------------------
// check to make sure phone number is formatted
function validatePhoneNumber(inputField, helpText){
    //first see if the input value contains data
    if (!validateNonEmpty(inputField, helpText)) {
        return false;

        //check if the input value is a date
        return validateRegEx(/^\d{3}\-\d{3}\-\d{4}$/, inputField.value, helpText,
            "Please enter a phone number for example, 123-555-1212).");
    }//end if
}//end validatePhoneNumber

//--------------------------------------validateEmailAddress-------------------------------
// check to make sure phone number is formatted
function validateEmailAddress(inputField, helpText){
    //first see if the input value contains data
    if (!validateNonEmpty(inputField, helpText)) {
        return false;

        //check if the input value is a date
        return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/, inputField.value, helpText,
            "Please enter an email address (for example, johndoe@acme.com).");
    }//end if
}//end validateEmailAddress



//------------------------------------------validateRegEx----------------------------------
// helper function to validate a string of text
function validateRegEx(regex, inputStr, helpText, helpMessage){
    //check if the input String validates ok
    if (!regex.test(inputStr)){
        //The data is invalid, so set the help message
        if (helpText != null)
            helpText.innerHTML = helpMessage;
        return false;
    }//end if
    else {
        //the data is OK, so clear the help message and return true
        if (helpText != null) {
            helpText.innerHTML = "";
        }//end if
        return true;
    }//end else
}//end validateRegEx

//-----------------------------------------placeOrder---------------------------------------
// action's created when the Place Order button is pushed
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
