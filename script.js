/* Generates random numbers between 1 and 75
and proceeds to add them to the 25 available
boxes in random order */

var array = [];
   
function fillWithRandomNumbers() {

    for (var i = 1; i <= 50; i++) {

        var randomNumber = Math.floor(Math.random() * 75) + 1;

        if (array.length != 25) {
            if (array.includes(randomNumber)) {
                continue;
            }
            else {
                array.push(randomNumber);
            }
        }
        else {
            break;
        }
    }

    for (var i = 1; i <= array.length; i++) {
        var div = document.querySelector('.span' + i);
        div.innerHTML += array[i - 1];
    }
}

function printNumber() {
    document.querySelector('.random').textContent = '';
    var randomNumber = Math.floor(Math.random() * 75) + 1;
    document.querySelector('.random').innerHTML += randomNumber;
    
    if (array.includes(randomNumber)) {
        var index = array.indexOf(randomNumber) + 1;
        document.querySelector('.box' + index).style.backgroundColor = 'red';
    }
}

fillWithRandomNumbers();
