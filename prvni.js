// ==UserScript==
// @name         První
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @updateURL    https://raw.githubusercontent.com/Sidonismo/tampermonkey/main/prvni.js
// @downloadURL  https://raw.githubusercontent.com/Sidonismo/tampermonkey/main/prvni.js
// @match        https://antikvariat11.cz/kniha/*edit=ed
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log('TamperMonkey works!');
    let searchbox = document.querySelector("#searchbox");
    let signId = document.querySelector("input[name*='ed_f56_']");
    let regal = localStorage.getItem("regal");
    let inicialy = localStorage.getItem("inicialy");

    //rozbor staraId
    let staraId;
    let puvodniID = signId.value;
    if (signId.value.length <= 8 && signId.value.length > 6) {
        staraId = signId.value;
    } else {
        staraId = "";
    }

    //získání data
    let d = new Date();
    let rok = d.getFullYear() + "";
    rok = rok.substring(rok.length - 2);
    let den = d.getUTCDate() + "";

    if (den.length === 1) {
        den = "0" + den;
    }
    let mesic = d.getUTCMonth() + 1;
    mesic = mesic + "";

    if (mesic.length === 1) {
        mesic = "0" + mesic;
    }
    let datum = den + mesic + rok;
    localStorage.setItem("datum", datum);

    // ROZPRACOVANO
    let rozpr = document.querySelector("#content > p");
    let rozprButt = document.querySelector("#content > form > div > input:nth-child(3)");
    let rozpr2Butt = document.querySelector("#content > form > div > input:nth-child(4)");
    let ulozButt = document.querySelector("#content > form > div > input:nth-child(2)");
    rozpr2Butt.disabled = true;
    rozpr2Butt.style.visibility = 'hidden';

    rozprButt.setAttribute("style", "width: 150px; height: 50px;");
    ulozButt.setAttribute("style", "width: 150px; height: 50px;");

    if (rozpr) {
        ulozButt.disabled = true;
        ulozButt.style.visibility = 'hidden';
        rozprButt.style.background = "pink";

    } else {
        rozprButt.disabled = true;
        rozprButt.style.visibility = 'hidden';
        ulozButt.style.background = 'pink';
    }
    // Drahe nebo levné
    let cenaId = document.querySelector("input[name*='ed_f30_']");

    // Čtvereček
    let checked = localStorage.getItem("checked");
    console.log(checked);

    if (checked === null) { checked = false; } else { checked = checked; }
    if (regal === null) { regal = ""; }
    if (inicialy === null) { inicialy = ""; }
    var modryDiv = document.createElement("div");
    var signDiv = document.createElement("div");
    var element = document.createElement("input");

    //Assign different attributes to the element.
    element.setAttribute("type", "text");
    element.setAttribute("value", inicialy);
    element.setAttribute("class", "inic");
    element.setAttribute('placeholder', "Iniciály");

    element.setAttribute("style", "width: 100%");
    var element2 = document.createElement("input");

    //Assign different attributes to the element.
    element2.setAttribute("type", "text");
    element2.setAttribute("value", regal);
    element2.setAttribute("class", "drahe");
    element2.setAttribute('placeholder', "Regál");
    element2.setAttribute("style", "width: 100%");

    let fajfka = document.createElement("input");
    fajfka.setAttribute("type", "checkbox");
    fajfka.checked = checked;
    fajfka.setAttribute("class", "fajfka");
    fajfka.setAttribute("style", "width: 25px; height: 25px;");


    modryDiv.setAttribute("style", "top: 0px; left: 0px; padding: 50px");
    modryDiv.style.position = "fixed";
    modryDiv.style.width = "75px";
    modryDiv.style.backgroundColor = "#cb4154";

    // 'foobar' is the div id, where new fields are to be added
    var foo = document.querySelector("body");

    signDiv.setAttribute("style", "top: 180px; left: 0px; padding: 25px 5px; font-size: 4em; animation: blinking 1s infinite;");
    signDiv.style.position = "fixed";
    signDiv.style.color = "red";
    signDiv.innerHTML = regal;

    foo.appendChild(signDiv);


    //Append the element in page (in span).
    foo.appendChild(modryDiv);
    modryDiv.appendChild(element);
    modryDiv.appendChild(element2);
    modryDiv.appendChild(fajfka);

    // Event vložení iniciálů a čísla regálu
    element.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            console.log("Enter key is pressed2");
            inicialy = localStorage.setItem("inicialy", element.value);

            if (fajfka.checked) {
                signId.value =
                    localStorage.getItem("regal") +
                    " " +
                    localStorage.getItem("datum") +
                    localStorage.getItem("inicialy") +
                    " " +
                    staraId;
                console.log(signId.value);
            }

            return true;
        } else {
            return false;
        }
    });
    element.addEventListener("blur", function () {

        console.log("Focus out");
        inicialy = localStorage.setItem("inicialy", element.value);

        if (fajfka.checked) {
            signId.value =
                localStorage.getItem("regal") +
                " " +
                localStorage.getItem("datum") +
                localStorage.getItem("inicialy") +
                " " +
                staraId;
            console.log(signId.value);
        }

    });

    element2.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            console.log("Enter key is pressed3");
            regal = localStorage.setItem("regal", element2.value);
            signDiv.innerHTML = localStorage.getItem("regal");
            if (fajfka.checked) {
                signId.value =
                    localStorage.getItem("regal") +
                    " " +
                    localStorage.getItem("datum") +
                    localStorage.getItem("inicialy") +
                    " " +
                    staraId;
                console.log(signId.value);
            }

            return true;
        } else {
            return false;
        }
    });
    element2.addEventListener("blur", function () {

        console.log("Focus out");
        regal = localStorage.setItem("regal", element2.value);
        signDiv.innerHTML = localStorage.getItem("regal");
        if (fajfka.checked) {
            signId.value =
                localStorage.getItem("regal") +
                " " +
                localStorage.getItem("datum") +
                localStorage.getItem("inicialy") +
                " " +
                staraId;
            console.log(signId.value);
        }

    });
    fajfka.addEventListener("change", function () {
        if (this.checked) {
            localStorage.setItem("checked", true);
            signDiv.innerHTML = localStorage.getItem("regal");
            checked = true;
            fajfka.checked = true;
            signId.value =
                localStorage.getItem("regal") +
                " " +
                localStorage.getItem("datum") +
                localStorage.getItem("inicialy") +
                " " +
                staraId;
            console.log(signId.value);
        } else {
            localStorage.setItem("checked", false);
            checked = false;
            fajfka.checked = false;
            signId.value = puvodniID;
        }
    });
    console.log(fajfka.checked, checked);
    if (checked == "true" || checked == true) {
        fajfka.checked = true;
        signId.value =
            localStorage.getItem("regal") +
            " " +
            localStorage.getItem("datum") +
            localStorage.getItem("inicialy") +
            " " +
            staraId;
    } else {
        signId.value = puvodniID;
        fajfka.checked = false;
        checked = false;
    }
        function copyToClipboard(text) {
        searchbox.value = text;
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}
    signDiv.addEventListener('click', function(event) {
  copyToClipboard(localStorage.getItem("regal") +
                " " +
                localStorage.getItem("datum") +
                localStorage.getItem("inicialy"));
});
})();
