var wins = 0;               //# times player has won game
var losses = 0;             //# times player has lost game
var guesses = 15;           //# guesses player has left 
var guessedLetters = [];    //stored letters already guessed

var letterArray;


var $ = function (sel) {
    var elem = document.querySelectorAll(sel);

    var text = function (textString) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = textString;
        }
    }
    var addClass = function (className) {
        console.log("this works");
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add(className);
        }
    }
    var removeClass = function (className) {
        console.log("removeClass works");
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove(className);
        }
    }
    var html = function (newHTML) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = newHTML;
        }
    }

    // GENERATE RANDOM WORD
    var wordList = ["red", "gold", "blue", "orange", "yellow", "black", "white", "grey", "violet", "indigo", "silver", "beige"];


    var generateWord = function () {
        var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(randomWord);
        letterArray = randomWord.split("");
        console.log(letterArray);
        var charHTML = "";
        for (var i = 0; i < letterArray.length; i++) {
            charHTML += "<span class='blue'>" + letterArray[i] + "</span>";
        }
        console.log(charHTML);
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = charHTML;
        }
        console.log(elem);
    }

    var on = function (action, cb) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }

    // var isInArray = function(arrayName)
    // BREAK WORD UP INTO ARRAY OF ITS COMPRISING LETTERS
    var publicAPI = {
        elem: elem,
        wordList: wordList,
        generateWord: generateWord,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        letterArray: letterArray,
        html: html
    }

    return publicAPI;
}
