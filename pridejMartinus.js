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
              text = text.replace(/^\n/, '');
              text.replace(/(\r\n|\r)/gm, "");
              console.log(text);
              let autorMatch = '';
              let stran = '';
              let isbnMatch = '';
              let rokMatch = "";
              let titelMatch = "";

              titelMatch = text.match(/.+\r\n.+\r\n.*/gm);
              console.log('titelMatch',titelMatch);
              titelMatch = titelMatch[0].replaceAll("\n", " ");
              console.log('titelMatch',titelMatch);
              putTitel.value = titelMatch;


              //STRAN
              if (text.match(/(?<=POČET STRAN.*\r\n)\d+/gimu)) {
                  stran = text.match(/(?<=POČET STRAN.*\r\n)\d+/gimu);
                  putStran.value = stran;
              }

              //ISBN
              if (text.match(/(?<=ISBN.*\r\n)\d+([xX])*/gimu)) {
                isbnMatch = text.match(/(?<=ISBN.*\r\n)\d+([xX])*/gimu).join();
                console.log("isbnMatch",isbnMatch);
                isbnMatch = isbnMatch.replaceAll(',', "");
                isbnMatch = isbnMatch.replaceAll('-', '');
                isbnMatch = isbnMatch.replaceAll('-', '');
                putIsbn.value = isbnMatch;
                console.log("isbnMatch",isbnMatch);
              }

              //ROK
              if (text.match(/(?<=ROK VYDÁNÍ.*\r\n)\d+/gimu)) {
                rokMatch = text.match(/(?<=ROK VYDÁNÍ.*\r\n)\d+/gimu);
                if (rokMatch.lenght > 1) {
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
