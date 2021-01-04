
var 
    /* Buttons */
    sortBut = document.getElementById("sortBut"),
    reversrBut = document.getElementById("sortBut"),
    randomBut = document.getElementById("randomBut"),

    /* results Divs */
    sorted = document.getElementById("sorted"),
    reversed = document.getElementById("reversed"),
    random = document.getElementById("random");

/*** Get Values from Inputs - Function */
function getValues() {
    
}
/* Get Values from Inputs - Function ***/

/*** Sort Function */
sortBut.onclick = function sortIt() {
    var
    in1 = document.getElementById("in1").value,
    in2 = document.getElementById("in2").value,
    in3 = document.getElementById("in3").value,
    in4 = document.getElementById("in4").value,
    in5 = document.getElementById("in5").value;
    
    /* Our Array */
    var sortArray = [
        in1,
        in2,
        in3,
        in4,
        in5
    ];
    
    sortArray.sort();
    sorted.innerHTML = "Sorted: " + sortArray.join(" | ");
}

/* Reverse Function */
reverseBut.onclick = function sortIt() {
    /* The Same Sort Variables */
    var
    in1 = document.getElementById("in1").value,
    in2 = document.getElementById("in2").value,
    in3 = document.getElementById("in3").value,
    in4 = document.getElementById("in4").value,
    in5 = document.getElementById("in5").value;
    
    /* The Same Sort Array */
    var sortArray = [
        in1,
        in2,
        in3,
        in4,
        in5
    ];
    
    sortArray.sort();
    sortArray.reverse();
    reversed.innerHTML = "Reversed: " + sortArray.join(" | ");
}
/* Sort Function ***/

/*** Random Item - Function */
randomBut.onclick = function randomItem () {
    /* The Same Sort Variables */
    var
    in1 = document.getElementById("in1").value,
    in2 = document.getElementById("in2").value,
    in3 = document.getElementById("in3").value,
    in4 = document.getElementById("in4").value,
    in5 = document.getElementById("in5").value;
    
    /* The Same Sort Array */
    var sortArray = [
        in1,
        in2,
        in3,
        in4,
        in5
    ];
    
    var item = sortArray[Math.floor(Math.random() * sortArray.length)];
    random.innerHTML = "Random: " + item;
}
/* Random Item - Function ***/


/* For Test */

/*
console.log("sortArray");
console.log("sortArray");
*/