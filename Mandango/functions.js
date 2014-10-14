/**
 * Created by jsg665 on 10/14/2014.
 */

var seats = [false, true, false, true, true, true, false, true, false];
var selSeat = -1;

function initSeats() {
    //Initialize the appearance of all seats
    for (var i = 0; i < seats.length; i++) {
        if (seats[i]) {
            //Set the seat to available
            document.getElementById("seat" + i).src = "seat_avail.png";
            document.getElementById("seat" + i).alt = "Available seat";
        }//end if
        else {
            //set the seat to unavailable
            document.getElementById("seat" + i).src = "seat_unavail.png";
            document.getElementById("seat" + i).alt = "Unavailable seat";
        }//end else
    }//end for
}//end initSeats

function findSeat(){
    //If seat is already selected, reinitialize all seats to clear them
    if (selSeat >= 0){
        selSeat = -1;
        initSeats();
    }//end if

    //Search through all the seats for availability
    for (var i = 0; i < seats.length; i++){
        //see if the current seat is available
        if (seats[i] && seats[i + 1] && seats[i + 2]){
            //set the seat selection and update the appearance of the seat
            selSeat = i;
            document.getElementById("seat" + i).src = "seat_select.png";
            document.getElementById("seat" + i).alt = "Your Seat";
            document.getElementById("seat" + (i + 1)).src = "seat_select.png";
            document.getElementById("seat" + (i + 1)).alt = "Your Seat";
            document.getElementById("seat" + (i + 2)).src = "seat_select.png";
            document.getElementById("seat" + (i + 2)).alt = "Your Seat";

            //prompt the user to accept the seat
            var accept = confirm("Seat " + (i+1) + " through " + (i + 3) + " are available. Accept?");
            if (accept){
                //the user accepted, so we're done
                break;
            }//end accept if
            else {
                //the user rejected the seat, so we'll keep looking
                selSeat = -1;
                document.getElementById("seat" + i).src = "seat_avail.png";
                document.getElementById("seat" + i).alt = "Available seat";
                document.getElementById("seat" + (i + 1)).src = "seat_avail.png";
                document.getElementById("seat" + (i + 1)).alt = "Available seat";
                document.getElementById("seat" + (i + 2)).src = "seat_avail.png";
                document.getElementById("seat" + (i + 2)).alt = "Available seat";
            }//end else
        }//end if
    }//end for
}//end findSeats


