/**
 * Created by jsg665 on 10/30/2014.
 */

// Total number of calls
var callNum = 0;

function checkWinner(form, caller, winningNum) {
    // Increment the call number
    callNum++;

    // Check for a winner
    if (callNum == winningNum) {
        alert(caller + ", caller number "  + callNum + "...today\'s winner!");
        form.submit();
    }
    else {
        // Reset the caller field for the next caller
        var callerField = document.getElementById('caller');
        callerField.value = "Next caller";
        callerField.focus();
        callerField.select();
    }
}
