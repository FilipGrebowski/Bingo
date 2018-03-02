var arrayB = [];
var arrayI = [];
var arrayN = [];
var arrayG = [];
var arrayO = [];

var spawnedNumbers = [];

fillArrayWithNumbers();

function fillArrayWithNumbers() {
    
    for (var i = 0; i < 75; i++) {
    
        var randomNumber = Math.floor(Math.random() * 75) + 1;

        if (arrayB.includes(randomNumber) || arrayI.includes(randomNumber) || arrayN.includes(randomNumber) || arrayG.includes(randomNumber) || arrayO.includes(randomNumber)) { void 0; }
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
    populateSquares();
}

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

document.querySelector('.start-button').addEventListener('click', function() {
    
    var randomNumber = Math.floor(Math.random() * 75) + 1;
    
    document.querySelector('.start-button').style.display = 'none';
    var obj = document.createElement('div');
    obj.id = "display-number";
    document.querySelector('.button-div').appendChild(obj);
    
    document.querySelector('.button-div').innerHTML = randomNumber; 
    
});