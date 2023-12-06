// ==UserScript==
// @name         pridejTezeusz
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://antikvariat11.cz/pridat-predmet*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const newButton = document.createElement("button");
        const elem = document.querySelector("#content");
        newButton.textContent = "tezeusz";
        newButton.addEventListener("click", myFunction);
        let theFirstChild = elem.firstChild;
        elem.insertBefore(newButton, theFirstChild);
        const putAutor = document.querySelector("#ed_i2");
        const putTitel = document.querySelector("#sug_inp");
        const putIsbn = document.querySelector("#ed_i5");
        const putRok = document.querySelector("#ed_i4");
        const putStran = document.querySelector("#ed_i6");
        const putCena = document.querySelector("#ed_i10");
        function myFunction() {
          navigator.clipboard
            .readText()
            .then((text) => {
              text = text.replace(/^\n/, '');
              text.replace(/(\r\n|\r)/gm, "");
              console.log(text);
              let autorMatch = '';
              let stran = '';
              let isbnMatch = '';
              let rokMatch = "";
              let titelMatch = "";

              titelMatch = text.match(/(.*)/);
              putTitel.value = titelMatch[0];
              console.log("titelMatch", titelMatch);

              //AUTOR
              if ( text.match(/(?:\r\n?|\n){2}(.+)/gimu)) {
                  autorMatch = text.match(/(?:\r\n?|\n){2}(.+)/gimu)[0];
              }

              if (autorMatch == undefined){
                  autorMatch = "";
              }

              putAutor.value = autorMatch;
              console.log("autorMatch", autorMatch);

              //STRAN
              if (text.match(/(?<=Ilość stron:.*)\d+/gimu)) {
                  stran = text.match(/(?<=Ilość stron:.*)\d+/gimu);
                  putStran.value = stran;
                  console.log("stran",stran);
              }

              //ISBN
              if (text.match(/(?<=EAN:.*)\d+/gimu)) {
                  console.log("isbnMatch");
                console.log("isbnMatch",text.match(/(?<=EAN:.*)\d+/gimu)[0]);
                isbnMatch = text.match(/(?<=EAN:.*)\d+/gimu)[0];
                //isbnMatch = isbnMatch.replace(/[^0-9]/g, "");
                //isbnMatch = isbnMatch.replace('-', '');
                //isbnMatch = isbnMatch.replace('=', '');
                putIsbn.value = isbnMatch;
                console.log("isbnMatch",isbnMatch);
              }

              //ROK
              if (text.match(/(?<=Rok wydania:.*)\d+/gimu)) {
                rokMatch = text.match(/(?<=Rok wydania:.*)\d+/gimu)[0];
                putRok.value = rokMatch;
                console.log("rokMatch",rokMatch);
              }
              putCena.value = "0";
            })
            .catch((err) => {
              console.log("Failed to read clipboard contents: " + err);
            });
        }
      })();
