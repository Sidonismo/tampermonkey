// ==UserScript==
// @name         TRH
// @namespace    http://tampermonkey.net/
// @version      2023-12-15
// @description  try to take over the world!
// @author       You
// @match        https://www.trhknih.cz/kniha/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=w3schools.com
// @grant        none




// ==/UserScript==
/* global $ */

(function() {
    'use strict';
    const newButton = document.createElement("button");
        const elem = document.querySelector(".btn-group");
        newButton.textContent = "Kopíruj data";
        newButton.addEventListener("click", myFunction);
        let theFirstChild = elem.firstChild;
    let sp1 = document.createElement("br");

    elem.insertBefore(newButton, theFirstChild);
    newButton.classList.add('btn','btn-primary','popover-link');
        elem.after(sp1, newButton);

let autor = '';
  function myFunction() {
  let titel = document.querySelector('h1').innerText;
  if (document.querySelector("body > div.container > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p > a")) {
      autor = document.querySelector("body > div.container > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p > a").innerText;
  }
  
  console.log(autor.toString());
  let table = titel + "\n " + autor.toString().replace(',',', ') + "\n " + $('#basic-table').text();


  navigator.clipboard.writeText(table);
  }
})();
