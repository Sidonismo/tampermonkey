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
        function myFunction() {
          navigator.clipboard
            .readText()
            .then((text) => {
              text = text.replace(/^\n/, '');
              text.replace(/(\r\n|\r)/gm, "");
              console.log(text);
              var autorMatch = '';
              let stran;
              let autorInfo;
              var titelMatch = text.match(/^(.*)$/m)[0];
              if (titelMatch.match(/;/m)) {
                autorInfo = text.match(/^(.*)$/m)[1].split("/")[1].split(";");
                titelMatch = titelMatch.split("/")[0];
                autorMatch = autorInfo[0];
                titelMatch += ' - ' +autorInfo.slice(1, autorInfo.length).join(' - ');
                  titelMatch = titelMatch.replace(';','');
              } else if (text.match(/^(.*)$/m)[1].split("/")) {
                  autorMatch = text.match(/^(.*)$/m)[1].split("/")[1];
                  titelMatch = titelMatch.split("/")[0];
              } else {
                  autorMatch = text.match(/\n.*/m)[0];
                  titelMatch = titelMatch.split("/")[0];
              }
              if (autorMatch == undefined){
                  autorMatch = "";
              }

              titelMatch = titelMatch.replace(':',' -');


              if (text.match(/(?<=ISBN\s+)\d+/mgisu)) {
                var isbnMatch = text.match(/((?:ISBN\s+)(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/mg)[0];
                isbnMatch = isbnMatch.replace(/[^0-9]/g, "");
                isbnMatch = isbnMatch.replace('-', '');
                isbnMatch = isbnMatch.replace('=', '');
                putIsbn.value = isbnMatch;
              }
              let rokMatch = "";
              if (text.match(/(?<=^Vydavateľ\s+.+)[12][098]\d{2}/m)) {
                rokMatch = text.match(/(?<=^Vydavateľ\s+.+)[12][098]\d{2}/m);
              }

              if (text.match(/(?<=Fyzický popis\s+)\d+/mgisu)) {
                stran = text.match(/(?<=Fyzický popis\s+)\d+/mgisu)[0];

                putStran.value = stran;
              }
            console.log(stran);

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
