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
