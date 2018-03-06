// Holds the current generated numbers without repeats.
var exists = [];

// Runs an anonymous function upon clicking the start button.
document.querySelector('.start-button').addEventListener('click', function() {
    
    // Generates and holds a random number between 1-75.
    var randomNumber = Math.floor(Math.random() * 75) + 1;
    
    document.querySelector('.start-button').style.display = 'none';
    document.querySelector('.no-button').style.display = 'block';
    document.querySelector('.yes-button').style.display = 'block';
    
    var obj = document.createElement('div');
    obj.id = "display-number";
    document.querySelector('.button-div').appendChild(obj);
    
//    while (exists.length !== 75) {
//        if (exists.includes(randomNumber)) {
//            void 0;
//        }
//        else {
//            document.querySelector('.middle-button-box').innerHTML = randomNumber;
//            exists.push(randomNumber);
//            console.log(exists);
//        }
//    }
    
});