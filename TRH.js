// ==UserScript==
// @name         TRH
// @namespace    http://tampermonkey.net/
// @version      2023-12-15
// @description  try to take over the world!
// @author       You
// @match        https://www.trhknih.cz/kniha/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=w3schools.com
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js




// ==/UserScript==
/* global $ */

(function() {
    'use strict';


  // Alert the copied text
  let titel = document.querySelector('h1').innerText;
   let autor = [];
   let autorArr = $('a[href^="/autor/"]');
   $(autorArr).map(function(item, value) {
       console.log(item);
       console.log(value.innerText);
       autor.push(value.innerText);
       console.log(autor);
   })
    console.log(autor.toString());
   let table = titel + "\n " + autor.toString().replace(',',', ') + "\n " + $('#basic-table').text();


  navigator.clipboard.writeText(table);


})();
