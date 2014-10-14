/**
 * Created by jsg665 on 10/14/2014.
 */

var seats = [[false, true, false, true, true, true, false, true, false],
    [false, true, false, false, true, false, true, true, true],
    [true, true, true, true, true, true, false, true, false],
    [true, true, true, false, true, false, false, true, false]];
var selSeat = -1;

function initSeats() {
    //Initialize the appearance of all seats
    for (var i = 0; i < seats.length; i++) {
        for (var j = 0; j < seats[i].length; j++) {
            if (seats[i][j]) {
                //Set the seat to available
                setSeat(i * seats[i].length + j, "avail", "Available Seat");
            }//end if
            else {
                //set the seat to unavailable
                setSeat(i * seats[i].length + j, "unavail", "Unavailable Seat");
            }//end else
        }//end inner for loop (j)
    }//end outer for loop (i)
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

function findSeatUsingWhileLoop(){
    //If seat is already selected, reinitialize all seats to clear them
    if (selSeat >= 0){
        selSeat = -1;
        initSeats();
    }//end if
    var i = 0;
    finished = false;

    //Search through all the seats for availability
    while ((i < seats.length) && !finished) {
        for (var j = 0; j < seats[i].length; j++) {
        //see if the current seat is available
        if (seats[i][j] && seats[i][j + 1] && seats[i][j + 2]) {
            //set the seat selection and update the appearance of the seat
            selSeat = i * seats[i].length + j;
            setSeat(i * seats[i].length + j, "select", "Your Seat");
            setSeat(i * seats[i].length + j + 1, "select", "Your Seat");
            setSeat(i * seats[i].length + j + 2, "select", "Your Seat");

            //prompt the user to accept the seat
            var accept = confirm("Seats " + (j + 1) + " through " + (j + 3) +
                " in Row " + (i + 1) + " are available. Accept?");
            if (accept) {
                //the user accepted, so we're done
                finished = true;
                break;
            }//end accept if
            else {
                //the user rejected the seat, so we'll keep looking
                selSeat = -1;
                setSeat(i * seats[i].length + j, "avail", "Available Seat");
                setSeat(i * seats[i].length + j + 1, "avail", "Available Seat");
                setSeat(i * seats[i].length + j + 2, "avail", "Available Seat");
            }//end else
        }//end if
    }//end for
        i++;
    }//end while
}//end findSeats

function setSeat(seatNum, status, description){
    document.getElementById("seat" + seatNum).src = "seat_" + status + ".png";
    document.getElementById("seat" + seatNum).alt = description;
}//end setSeat

function getSeatStatus(seatNum){
    if (selSeat != -1 && (seatNum == selSeat || seatNum == (selSeat + 1) || seatNum == (selSeat + 2)))
    return "yours";
    else if (seats [Math.floor(seatNum/seats[0].length)][seatNum % seats[0].length])
    return "available";
    else
    return "unavailable";
}//end getSeatStatus

function showSeatStatus(seatNum){
    alert("This seat is " + getSeatStatus(seatNum) + ".");
}//end showSeatStatus

