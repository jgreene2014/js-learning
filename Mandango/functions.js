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

var showSeatStatusAsAVariable = function(seatNum){
    alert("This seat is " + getSeatStatus(seatNum) + ".");
}//end howSeatStatusAsAVariable

function setSeat(seatNum, status, description){
    document.getElementById("seat" + seatNum).src = "seat_" + status + ".png";
    document.getElementById("seat" + seatNum).alt = description;
}//end setSeat


function findSeats(){
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

//wire the events
window.onload = function(){
    //Wire the find seat button event
    document.getElementById("findseats").onclick = findSeatUsingWhileLoop;

    //Wire the seat images
    document.getElementById("seat0").onclick = function(evt) {showSeatStatusAsAVariable(0);};
    document.getElementById("seat1").onclick = function(evt) {showSeatStatusAsAVariable(1);};
    document.getElementById("seat2").onclick = function(evt) {showSeatStatusAsAVariable(2);};
    document.getElementById("seat3").onclick = function(evt) {showSeatStatusAsAVariable(3);};
    document.getElementById("seat4").onclick = function(evt) {showSeatStatusAsAVariable(4);};
    document.getElementById("seat5").onclick = function(evt) {showSeatStatusAsAVariable(5);};
    document.getElementById("seat6").onclick = function(evt) {showSeatStatusAsAVariable(6);};
    document.getElementById("seat7").onclick = function(evt) {showSeatStatusAsAVariable(7);};
    document.getElementById("seat8").onclick = function(evt) {showSeatStatusAsAVariable(8);};
    document.getElementById("seat9").onclick = function(evt) {showSeatStatusAsAVariable(9);};
    document.getElementById("seat10").onclick = function(evt) {showSeatStatusAsAVariable(10);};
    document.getElementById("seat11").onclick = function(evt) {showSeatStatusAsAVariable(11);};
    document.getElementById("seat12").onclick = function(evt) {showSeatStatusAsAVariable(12);};
    document.getElementById("seat13").onclick = function(evt) {showSeatStatusAsAVariable(13);};
    document.getElementById("seat14").onclick = function(evt) {showSeatStatusAsAVariable(14);};
    document.getElementById("seat15").onclick = function(evt) {showSeatStatusAsAVariable(15);};
    document.getElementById("seat16").onclick = function(evt) {showSeatStatusAsAVariable(16);};
    document.getElementById("seat17").onclick = function(evt) {showSeatStatusAsAVariable(17);};
    document.getElementById("seat18").onclick = function(evt) {showSeatStatusAsAVariable(18);};
    document.getElementById("seat19").onclick = function(evt) {showSeatStatusAsAVariable(19);};
    document.getElementById("seat20").onclick = function(evt) {showSeatStatusAsAVariable(20);};
    document.getElementById("seat21").onclick = function(evt) {showSeatStatusAsAVariable(21);};
    document.getElementById("seat22").onclick = function(evt) {showSeatStatusAsAVariable(22);};
    document.getElementById("seat23").onclick = function(evt) {showSeatStatusAsAVariable(23);};
    document.getElementById("seat24").onclick = function(evt) {showSeatStatusAsAVariable(24);};
    document.getElementById("seat25").onclick = function(evt) {showSeatStatusAsAVariable(25);};
    document.getElementById("seat26").onclick = function(evt) {showSeatStatusAsAVariable(26);};
    document.getElementById("seat27").onclick = function(evt) {showSeatStatusAsAVariable(27);};
    document.getElementById("seat28").onclick = function(evt) {showSeatStatusAsAVariable(28);};
    document.getElementById("seat29").onclick = function(evt) {showSeatStatusAsAVariable(29);};
    document.getElementById("seat30").onclick = function(evt) {showSeatStatusAsAVariable(30);};
    document.getElementById("seat31").onclick = function(evt) {showSeatStatusAsAVariable(31);};
    document.getElementById("seat32").onclick = function(evt) {showSeatStatusAsAVariable(32);};
    document.getElementById("seat33").onclick = function(evt) {showSeatStatusAsAVariable(33);};
    document.getElementById("seat34").onclick = function(evt) {showSeatStatusAsAVariable(34);};
    document.getElementById("seat35").onclick = function(evt) {showSeatStatusAsAVariable(35);};

    //Initialize the seat appearances
    initSeats();
};//end Event Wire






