// ==UserScript==
// @name         pridejMartinus
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
        newButton.textContent = "martinus";
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
              console.log(text);
              let autorMatch = '';
              let stran = '';
              let isbnMatch = '';
              let rokMatch = "";
              let titelMatch = "";

              titelMatch = text.match(/.+\r\n.+\r\n.*/gm);
              console.log('titelMatch',titelMatch);
              autorMatch = titelMatch[0].match(/(?<=.*\r\n).+/gimu);
              putAutor.value = autorMatch;
              titelMatch = text.match(/.+\r\n/);
              titelMatch = titelMatch[0].replaceAll("\n", " ");
              console.log('titelMatch',titelMatch);
              putTitel.value = titelMatch;




              //STRAN
              if (text.match(/\d{1,4}(?=.stran)/gimu)) {
                  stran = text.match(/\d{1,4}(?=.stran)/gimu);
                  putStran.value = stran;
              } else if (text.match(/(?<=.*\d{4}.*\r\n.*)\d{1,4}/g)){
                  stran = text.match(/(?<=.*\d{4}.*\r\n.*)\d{1,4}/g)[0];
                   putStran.value = stran;
              }


              //ROK
              if (text.match(/(?<=.*)\d{4}/gimu)) {
                rokMatch = text.match(/(?<=.*)\d{4}/gimu);
                  console.log('rok',rokMatch);
                  console.log('delka',rokMatch.length);
                if (rokMatch.length > 0) {
                    putRok.value = rokMatch[0];
                } else {
                    putRok.value = rokMatch;
                }

              }
              putCena.value = "0";
            })
            .catch((err) => {
              console.log("Failed to read clipboard contents: " + err);
            });
        }
      })();
