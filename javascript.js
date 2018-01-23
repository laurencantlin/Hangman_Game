// var wordList = ["red", "gold", "blue", "orange", "yellow", "black", "white", "grey", "violet", "indigo", "silver", "beige"];

var $ = function (sel) {
    var elem = document.querySelectorAll(sel);
    console.log(sel);
    console.log(elem);

    var text = function (textString) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = textString;
        }
    }

    // GENERATE RANDOM WORD
    var wordList = ["red", "gold", "blue", "orange", "yellow", "black", "white", "grey", "violet", "indigo", "silver", "beige"];

    var generateWord = function () {
        var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(randomWord);
        var letterArray = randomWord.split("");
        console.log(letterArray);

        for (var i = 0; i < elem.length; i++) {
            // text = elem[i]
            // elem[i].innerText = randomWord;
            elem[i].innerHTML = letterArray;
        }
    }

    var LetterArray = function (){

    }

    var on = function (action, cb) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }

        // BREAK WORD UP INTO ARRAY OF ITS COMPRISING LETTERS
        var publicAPI = {
            elem: elem,
            wordList: wordList,
            generateWord: generateWord,
            text: text,
            on: on
        }

        return publicAPI;
    }
