// Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');



//startGame hide start screen overlay

startGame.addEventListener('click', function() {
   overlay.style.display = "none";
})

//Phrase Array

const phrases = [
    "Power Rangers",
    "Catdog",
    "Rugrats",
    "Toy Story",
    "Chicken Little"
];



//Get Random Phrase from Array

function getRandomPhraseAsArray(arr){
    //Get Random Phrase in Array
    const randomNumber = arr[(Math.floor(Math.random()* arr.length))];
    return randomNumber;
}

//Set the game display 

function addPhrasetoDisplay(arr) {
    for (let i = 0; i < arr.length; i ++) {
        const li = document.createElement('li'); // Creating a new li
        const ul = document.querySelector('#phrase ul'); // Selecting the id phrase and ul inside
        const text = document.createTextNode(arr.charAt([i])); // looping through each character inside the string
        li.appendChild(text); 
        ul.appendChild(li);
        // Check if string contains a letter or space
        if (text.textContent.match(/^[A-Za-z]+$/)) {
            // Add the class letter if it's a letter
            li.className = "letter"
        }
        if (text.textContent === " ") {
            //Add the class space if it's a space
            li.className = "space"
            
        }

    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 


// Creating a checkLetter function

function checkLetter (btnPressed) {
    const li = document.querySelectorAll('.letter').textContent;
    console.log(li);
    let match = null;
    for (let i = 0; i < li.length; i++) {
        const text = li[i].textContent;
        if (btnPressed.toUpperCase() === text.toUpperCase()) {
            match = true;
            li.className = "show letter";
        }
        
    
    }
    
}

// Event Listener for Keyboard


qwerty.addEventListener('click', (e) => {
    const btnPressed = e.target
    if(btnPressed.tagName === 'BUTTON') {
        btnPressed.className = "chosen";
        btnPressed.setAttribute('disabled', true);
        const letterFound = checkLetter(btnPressed.textContent)
        console.log(letterFound)
    }
    
});


