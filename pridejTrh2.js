// ==UserScript==
// @name         pridejTrh2
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
        newButton.textContent = "trh";
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

              titelMatch = text.match(/(.+)/);
              putTitel.value = titelMatch[0];

              //AUTOR
              autorMatch = text.match(/\n.*/m)[0];

              if (autorMatch == undefined){
                  autorMatch = "";
              }

              putAutor.value = autorMatch;
              console.log("autorMatch", autorMatch);

              //STRAN
              if (text.match(/(?<=stran\r\n).*/gimu)) {
                  stran = text.match(/(?<=stran\r\n).*/gimu);
                  putStran.value = stran;
                  console.log("stran",stran);
              }

              //ISBN
              if (text.match(/(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/gm)) {
                isbnMatch = text.match(/(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/gm).join();
                isbnMatch = isbnMatch.replaceAll(',', "");
                isbnMatch = isbnMatch.replaceAll('-', '');
                isbnMatch = isbnMatch.replaceAll('-', '');
                putIsbn.value = isbnMatch;
              }

              //ROK
              if (text.match(/(?<=rok vydání\r\n).*/gimu)) {

                rokMatch = text.match(/(?<=rok vydání\r\n).*/gimu);
                if (rokMatch.lenght > 1) {
                    putRok.value = rokMatch[0];
                } else {
                    putRok.value = rokMatch;
                }

                console.log("rokMatch",putRok.value);
              }
              putCena.value = "0";
            })
            .catch((err) => {
              console.log("Failed to read clipboard contents: " + err);
            });
        }
      })();
