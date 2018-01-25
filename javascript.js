
var wins = 0;               //# times player has won game
var losses = 0;             //# times player has lost game
var guesses = 15;           //# guesses player has left 
var userGuess;
var guessedLetters = [];    //stored letters already guessed
var wordList = ["red", "gold", "blue", "orange", "yellow", "black", "white", "grey", "violet", "indigo", "silver", "beige"];
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
    var on = function (action, cb) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }

    var letterArray = [

    ]


    var play = function () {
        // create variable and fill with random word from wordList array:
        var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        // split randomWord var  into an array of its letters:
        letterArray = randomWord.split("");
        // create  variable that holds string to display random word on page:
        var letterStr = "";
        //for every letter in the array of a given word... 
        for (var i = 0; i < letterArray.length; i++) {
            //change letter to:
            letterArray[i] = "_";
        }
        console.log(letterArray);
        // for (var i = 0; i < elem.length; i++) {

        //     elem[i].innerText = "letterStr";


        // // put all array letters in array inside an html span tag:
        // for (var i = 0; i < letterArray.length; i++) {
        //     charHTML += "<span class='blue'>" + letterArray[i] + "</span>";
        // }
        // // for all selected page elements, change inner html to variable charHTML:
        // for (var i = 0; i < elem.length; i++) {
        //     elem[i].innerHTML = charHTML;
        // }
    }   
    
    // var match;
    // for (var i = 0; i < letterArray.length; i++)              letterArray[i] === userGuess);{
    //     console.log("you win!");
    // }


    var publicAPI = {
        elem: elem,
        // wordList: wordList,
        play: play,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        // letterArray: letterArray,
        html: html
    }
    return publicAPI;
}
