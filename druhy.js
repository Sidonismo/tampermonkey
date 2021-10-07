// ==UserScript==
// @name         Druhý
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Elias S.
// @updateURL    https://raw.githubusercontent.com/Sidonismo/tampermonkey/main/druhy.js
// @downloadURL  https://raw.githubusercontent.com/Sidonismo/tampermonkey/main/druhy.js
// @include https://antikvariat11.cz/kniha/*
// @exclude https://antikvariat11.cz/kniha/*edit=ed
// @include https://antikvariat11.cz/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let searchbox = document.querySelector("#searchbox");
    let regal = localStorage.getItem("regal");
    let inicialy = localStorage.getItem("inicialy");
    // Čtvereček
    let checked = localStorage.getItem("checked");


    if (checked === null) { checked = false; } else { checked = checked; }
    if (regal === null) { regal = ""; }
    if (inicialy === null) { inicialy = ""; }
    var modryDiv = document.createElement("div");
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

    //Append the element in page (in span).
    foo.appendChild(modryDiv);
    modryDiv.appendChild(element);
    modryDiv.appendChild(element2);
    modryDiv.appendChild(fajfka);

    let signDiv = document.createElement("div");
    signDiv.setAttribute("style", "top: 180px; left: 0px; padding: 25px 5px; font-size: 4em; animation: blinking 1s infinite;");
    signDiv.style.position = "fixed";
    signDiv.style.color = "white";
    signDiv.innerHTML = regal;

    foo.appendChild(signDiv);

    // Event vložení iniciálů a čísla regálu
    element.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            console.log("Enter key is pressed2");
            inicialy = localStorage.setItem("inicialy", element.value);

         return true;
        } else {
            return false;
        }
    });
    element.addEventListener("blur", function () {

        console.log("Focus out");
        inicialy = localStorage.setItem("inicialy", element.value);



    });

    element2.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            console.log("Enter key is pressed3");
            regal = localStorage.setItem("regal", element2.value);
            signDiv.innerHTML = localStorage.getItem("regal");


            return true;
        } else {
            return false;
        }
    });
    element2.addEventListener("blur", function () {

        console.log("Focus out");
        regal = localStorage.setItem("regal", element2.value);
        signDiv.innerHTML = localStorage.getItem("regal");


    });
    fajfka.addEventListener("change", function () {
        signDiv.innerHTML = localStorage.getItem("regal");
        if (this.checked) {
            localStorage.setItem("checked", true);
            checked = true;
            fajfka.checked = true;

        } else {
            localStorage.setItem("checked", false);
            checked = false;
            fajfka.checked = false;

        }
    });
    console.log(fajfka.checked, checked);
    if (checked == "true" || checked == true) {
        fajfka.checked = true;

    } else {

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
