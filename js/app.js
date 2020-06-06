// Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const createBtn = document.createElement('a');
const tries = document.querySelectorAll('.tries');
const scoreBoard = document.querySelector('#scoreboard ol');





//startGame hide start screen overlay

startGame.addEventListener('click', function() {
   overlay.style.display = "none";
})

//Phrase Array

const phrases = [
    "power rangers",
    "catdog",
    "rugrats",
    "toy story",
    "chicken little"
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
    const li = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < li.length; i++) {
        if (btnPressed == li[i].textContent) {
            match = li[i].textContent;
            li[i].className = "show letter";
        }
        
       
    }
    return match;
}

// Event Listener for Keyboard


qwerty.addEventListener('click', (e) => {
    const btnPressed = e.target
    if(btnPressed.tagName === 'BUTTON') {
        btnPressed.className = "chosen";
        btnPressed.setAttribute('disabled', true);
        const letterFound = checkLetter(btnPressed.textContent)
        if (letterFound == null) {
            const tries = document.querySelectorAll('.tries')[0];
            tries.parentNode.removeChild(tries);
            missed += 1;
        }
    }
    checkWin()
});

// Check Win Function

function checkWin (){
    const show = document.querySelectorAll('.show');
    const letters = document.querySelectorAll('.letter');
    const headlineText = document.querySelector('.title');
    if(show.length === letters.length) {
        overlay.className = "win"
        overlay.style.display = "flex";
        headlineText.textContent = "Congratulations! You Won!"
        overlay.appendChild(createBtn);
        createBtn.className = "btn__reset";
        createBtn.textContent = "Reset";
        resetGame();
    }
    if(missed > 4) {
        overlay.className = "lose";
        overlay.style.display = "flex";
        headlineText.textContent = "Sorry! You Lose! Try Again!"
        overlay.appendChild(createBtn);
        createBtn.className = "btn__reset";
        createBtn.textContent = "Reset";
        resetGame();
        }
};

// //Reset Game 

function resetGame () {
 
    createBtn.addEventListener('click', ()=>{  
             location.reload();   
// //         const qwertyBtn = document.querySelectorAll('.chosen');
// //         const li = document.createElement('li');
// //         const img = document.createElement('img');
// //          overlay.style.display = "none";

// //     // Generate new Phrase
// //         const phraseLetters = phrase.children.length;
// //         for (let i = 0; i < phraseLetters; i ++) {
// //             const li = phrase.children[0];
// //             phrase.removeChild(li);
// //         }

// //         const phraseArray = getRandomPhraseAsArray(phrases);
// //         addPhrasetoDisplay(phraseArray); 



// //      // Loop for the qwerty buttons
// //         for(let i = 0; i < qwertyBtn.length; i ++) {
// //             qwertyBtn[i].className = "";
// //             qwertyBtn[i].setAttribute('disabled', false); 
// //         }
// //     //Loop for Hearts 
// //         for(let i = 0; i < tries.length; i++) {
// //             if (tries[i] !== 5) {
// //                 scoreBoard.append(li);
// //                 li.className = "tries";
// //                 li.appendChild(img);
// //                 img.src = "images/liveHeart.png";
// //                 img.style.height = "35px";
// //                 img.style.width = "30px";
                
                
                
// //             }
            
// //          }   
   

    });
    

};


