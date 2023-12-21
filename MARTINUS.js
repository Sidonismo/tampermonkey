// ==UserScript==
// @name         MARTINUS
// @namespace    http://tampermonkey.net/
// @version      2023-12-15
// @description  try to take over the world!
// @author       You
// @match        https://www.martinus.cz/*/kniha
// @icon         https://www.google.com/s2/favicons?sz=64&domain=w3schools.com
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js




// ==/UserScript==
/* global $ */

(function() {
    'use strict';


  // Alert the copied text
  let titel = document.querySelector("div.shell-detail__info.w-100 > div.d-flex > div:nth-child(2) > h1").innerText;
    console.log(titel);
   let autor = [];
   let autorArr = $("ul.product-detail__author li a");
    console.log(autorArr);
   $(autorArr).map(function(item, value) {
       console.log(item);
       console.log(value.innerText);
       autor.push(value.innerText);
       console.log(autor);
   })
    console.log(autor.toString());
    let stran = $('dt').text();
   let table = titel + "\n " + autor.toString().replace(',',', ') + "\n " + $('dd').text() + "\n " + stran;


  navigator.clipboard.writeText(table);


})();
