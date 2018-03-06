// Every column of the Bingo card is assigned 
// an individual array.
var arrayB = []; // Numbers 1-15
var arrayI = []; // Numbers 16-30
var arrayN = []; // Numbers 31-45
var arrayG = []; // Numbers 46-60
var arrayO = []; // Numbers 61-75


// This function loops through and generates a random number
// between 1-75. The number is checked if it is contained in 
// any of the column arrays. If it is, nothing happends, if
// it is not, it gets categorised and pushed into the appropriate
// array.
(function () { // Immediately Invoked Function Expression used.
    
    for (var i = 0; i < 75; i++) {
    
        // Holds random number.
        var randomNumber = Math.floor(Math.random() * 75) + 1;

        if (arrayB.includes(randomNumber) || arrayI.includes(randomNumber) || arrayN.includes(randomNumber) || arrayG.includes(randomNumber) || arrayO.includes(randomNumber)) { 
            void 0; 
        }
        else {
            if (randomNumber >= 1 && randomNumber <= 15 && arrayB.length < 5) {
                arrayB.push(randomNumber);
            }
            else if (randomNumber >= 16 && randomNumber <= 30 && arrayI.length < 5) {
                arrayI.push(randomNumber);
            }
            else if (randomNumber >= 31 && randomNumber <= 45 && arrayN.length < 4) {
                arrayN.push(randomNumber);
            }
            else if (randomNumber >= 46 && randomNumber <= 60 && arrayG.length < 5) {
                arrayG.push(randomNumber);
            }
            else if(randomNumber >= 61 && randomNumber <= 75 && arrayO.length < 5) {
                arrayO.push(randomNumber);
            }
        }
    }
    // Calls the populateSquares() function.
    populateSquares();
})();

// This function runs through every square of the bingo board,
// and displays the matched number from the appropriate array.
function populateSquares() {
    var rowB = 0, rowI = 0, rowN = 0, rowG = 0, rowO = 0;
    
    for (var i = 1; i <= 25; i++) {
        
        var div = document.querySelector('.span' + i);
        
        if (i === 1 || i === 6 || i === 11 || i === 16 || i === 21) {
            div.innerHTML += arrayB[rowB];
            rowB++;
        }
        else if (i === 2 || i === 7 || i === 12 || i == 17 || i === 22) {
            div.innerHTML += arrayI[rowI];
            rowI++;
        }
        else if (i === 3 || i === 8 || i === 18 || i === 23) {
            div.innerHTML += arrayN[rowN];
            rowN++;
        }
        else if (i === 4 || i === 9 || i === 14 || i === 19 || i === 24) {
            div.innerHTML += arrayG[rowG];
            rowG++;
        }
        else if (i === 5 || i === 10 || i === 15 || i === 20 || i === 25) {
            div.innerHTML += arrayO[rowO];
            rowO++;
        }
    }
}