/**
 * Created by jsg665 on 10/30/2014.
 */

var iqs = [ 113, 97, 86, 75, 92, 105, 146, 77, 64, 114, 165, 96, 97, 88, 108 ];

function showIQClass(data) {
    alert("Click OK to begin IQ calculation.");
    document.getElementById("output").innerHTML = "You are dealing with <em>" +
    calcIQClass(data) + "</em>.";
}

function calcIQClass(data) {
    // Calculate the average IQ
    var average = 0;
    for (var i = 0; i < data.length; i++) {
        average += data[i];
    }//end for loop

    average = Math.floor(average / data.length);

    // Return the classification of the average IQ
    if (average < 20) {
        return "people who should kill their TVs";
    }
    else if (average < 50) {
        return "people who should really hit the books";
    }
    else if (average < 70) {
        return "people who should hit the books";
    }
    else if (average < 81) {
        return "people who should consider brain exercises";
    }
    else if (average < 91) {
        return "people who could be considered dull";
    }
    else if (average < 111) {
        return "people of average intelligence";
    }
    else if (average < 121) {
        return "people of superior intelligence";
    }
    else if (average < 141) {
        return "people of very superior intelligence";
    }
    else {
        return "geniuses";
    }
}//end calcIQClass function
