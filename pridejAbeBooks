// ==UserScript==
// @name         pridejHovno
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://antikvariat11.cz/pridat-predmet*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.1
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
    var autorMatch = '';
    var isbnMatch = '';
    var titelMatch = null;
    var rokMatch = null;
    var seitenMatch = null;
   const newButton = document.createElement("button");
    const elem = document.querySelector("#content");
    newButton.textContent = "Hovno";
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


          if (text.match(/Author[\r\n]+([^\r\n]+)/gsi)){
              autorMatch = text.match(/Author[\r\n]+([^\r\n]+)/gsi)[0].replace('Author','');
              putAutor.value = autorMatch;
          } else if (text.match(/Autor[\r\n]+([^\r\n]+)/gsi)){
              console.log('Jedna', text.match(/Autor[\r\n]+([^\r\n]+)/gsi)[0].replace('Autor',''));
              autorMatch = text.match(/Autor[\r\n]+([^\r\n]+)/gsi)[0].replace('Autor','');
              putAutor.value = autorMatch;
          }

          if (text.match(/Book Title[\r\n]+([^\r\n]+)/gsi)){
              titelMatch = text.match(/Book Title[\r\n]+([^\r\n]+)/gsi)[0].replace('Book Title','');
              putTitel.value = titelMatch;
          } else if (text.match(/Buchtitel[\r\n]+([^\r\n]+)/gsi)){
              console.log('Dva', text.match(/Buchtitel[\r\n]+([^\r\n]+)/gsi)[0].replace('Buchtitel',''));
              titelMatch = text.match(/Buchtitel[\r\n]+([^\r\n]+)/gsi)[0].replace('Buchtitel','');
              putTitel.value = titelMatch;
          }


          if (text.match(/ISBN[\r\n]+([^\r\n]+)/gsi))
          {
              console.log('Tri', text.match(/ISBN[\r\n]+([^\r\n]+)/gsi)[0].replace('ISBN',''));
              isbnMatch = text.match(/ISBN[\r\n]+([^\r\n]+)/gsi)[0].replace('ISBN','');
              putIsbn.value = isbnMatch;
          }

          if (text.match(/Number of Pages[\r\n]+([^\r\n]+)/gsi)){
              console.log('ctyri', text.match(/Number of Pages[\r\n]+([^\r\n]+)/gsi)[0].replace('Number of Pages',''));
              seitenMatch = text.match(/Number of Pages[\r\n]+([^\r\n]+)/gsi)[0].replace('Number of Pages','');
              putStran.value = seitenMatch;
          } else if (text.match(/Anzahl der Seiten[\r\n]+([^\r\n]+)/gsi)){
              console.log('Dva', text.match(/Anzahl der Seiten[\r\n]+([^\r\n]+)/gsi)[0].replace('Anzahl der Seiten',''));
              seitenMatch = text.match(/Anzahl der Seiten[\r\n]+([^\r\n]+)/gsi)[0].replace('Anzahl der Seiten','');
              putStran.value = seitenMatch;
          }

          if (text.match(/Publication Year[\r\n]+([^\r\n]+)/gsi)){
              console.log('pet', text.match(/Publication Year[\r\n]+([^\r\n]+)/gsi)[0].replace('Number of Pages',''));
              rokMatch = text.match(/Publication Year[\r\n]+([^\r\n]+)/gsi)[0].replace('Publication Year','');
              putRok.value = rokMatch;
          } else if (text.match(/Erscheinungsjahr[\r\n]+([^\r\n]+)/gsi)){
              console.log('Dva', text.match(/Erscheinungsjahr[\r\n]+([^\r\n]+)/gsi)[0].replace('Erscheinungsjahr',''));
              rokMatch = text.match(/Erscheinungsjahr[\r\n]+([^\r\n]+)/gsi)[0].replace('Erscheinungsjahr','');
              putRok.value = rokMatch;
          }


          putCena.value = "0";
        })
        .catch((err) => {
          console.log("Failed to read clipboard contents: " + err);
        });
    }
})();
