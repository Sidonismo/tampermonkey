      // ==UserScript==
      // @name         pridejSNK
      // @namespace    http://tampermonkey.net/
      // @version      0.1
      // @description  try to take over the world!
      // @author       You
      // @match        https://antikvariat11.cz/pridat-predmet*
      // @icon         https://www.google.com/s2/favicons?sz=64&domain=0.1
      // @grant        none
      // ==/UserScript==

      (function () {
        "use strict";
        const newButton = document.createElement("button");
        const elem = document.querySelector("#content");
        newButton.textContent = "NSK";
        newButton.addEventListener("click", myFunction);
        let theFirstChild = elem.firstChild;
        elem.insertBefore(newButton, theFirstChild);
        const putAutor = document.querySelector("#ed_i2");
        const putTitel = document.querySelector("#sug_inp");
        const putIsbn = document.querySelector("#ed_i5");
        const putRok = document.querySelector("#ed_i4");
        const putStran = document.querySelector("#ed_i6");
        const putCena = document.querySelector("#ed_i10");
        console.log(newButton);
        function myFunction() {
          navigator.clipboard
            .readText()
            .then((text) => {
              console.log(text);
              text = text.replace(/^\n/, '');
              var autorMatch = text.match(/\n.*/m)[0];
              console.log(autorMatch);
              let stran;
              let autorInfo;
              var titelMatch = text.match(/^(.*)$/m)[0];
              console.log('ZZZZZ');
              console.log(titelMatch);
              titelMatch = titelMatch.split("/")[0];
              console.log("split" + titelMatch);
              console.log(text.match(/^(.*)$/m)[1].split("/")[1]);
              if (text.match(/^(.*)$/m)[1].split("/")[1].split(";")) {
                autorInfo = text.match(/^(.*)$/m)[1].split("/")[1].split(";");
                console.log(autorInfo);
                autorMatch = autorInfo[0].trim();
                console.log(autorMatch);
                titelMatch += ' - ' +autorInfo.slice(1, autorInfo.length).join(' - ');
              }

              titelMatch = titelMatch.replace(':',' -');
              console.log(titelMatch);

              if (text.match(/(?<=ISBN\t\n).*/m)) {
                var isbnMatch = text.match(/(?<=ISBN\t\n).*/m)[0];
                isbnMatch = isbnMatch.replace(/[^0-9]/g, "");
                isbnMatch = isbnMatch.replace('-', '');
                isbnMatch = isbnMatch.replace('=', '');
                putIsbn.value = isbnMatch;
              }
              let rokMatch = null;
              if (text.match(/(?<=^Vydavateľ\t\n.*)[12][098]\d{2}/m)) {
                rokMatch = text.match(/(?<=^Vydavateľ\t\n.*)[12][098]\d{2}/m);
              }

              if (text.match(/(?<=^Publication.*)[12][098]\d{2}/m)) {
                rokMatch = text.match(/(?<=^Publication.*)[12][098]\d{2}/m);
              }
              if (text.match(/(?<=^Fyzický popis\t\n.*)\d*(?!s\.)/m)) {
                stran = text.match(/(?<=^Fyzický popis\t\n.*)\d*(?!s\.)/m)[0];
                putStran.value =  stran;
              }

              putAutor.value = autorMatch;
              putTitel.value = titelMatch;

              if (Array.isArray(rokMatch)) {
                putRok.value = rokMatch.join("").toString().trim();
              }
              putCena.value = "0";
            })
            .catch((err) => {
              console.log("Failed to read clipboard contents: " + err);
            });
        }
      })();
