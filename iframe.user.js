// ==UserScript==
// @name         iframe
// @namespace    http://tampermonkey.net/
// @version      0.2.5
// @description  try to take over the world!
// @author       Eliáš Sidon
// @match        https://antikvariat11.cz/pridat-predmet*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @downloadURL https://github.com/Sidonismo/tampermonkey/raw/main/iframe.user.js
// @updateURL https://github.com/Sidonismo/tampermonkey/raw/main/iframe.user.js
// @grant none
// ==/UserScript==


(function() {
    'use strict';
    function prepareFrame(url) {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("name", "display");
        ifrm.setAttribute("src", url);
        ifrm.setAttribute("style", "bottom: 0px; left: 0px; width: 100%; height: 300px; position: fixed; background-color: white; resize: vertical;");
        document.body.appendChild(ifrm);
    }

        let nazev = document.querySelector('#sug_inp').value;
    let rok = document.querySelectorAll('input');
    let vse = "";
    rok.forEach(ziskejRok);

    function ziskejRok(item) {
  vse += item.value;
}

    rok = vse.match(/[12][09]\d{2}/gm)[0];
    if (nazev.match(/\d+Svazky\s(\d*)/gmiu)){
        let svazky = nazev.match(/\d+Svazky\s(\d*)/gmiu)[0];
        nazev = nazev.replace(svazky, '');
}
    //odstranení slov z názvu, které jsou za :;-[.(
    nazev = nazev.split(':')[0];
    nazev = nazev.split(';')[0];
    nazev = nazev.split('-')[0];
    nazev = nazev.split('[')[0];
    nazev = nazev.split('.')[0];
    nazev = nazev.split('(')[0];
    //první tři slova
    let nazevArr = nazev.split(' ');
    nazev = '';
    nazevArr = nazevArr.slice(0, 3);
    nazevArr.forEach(function (item) {
  nazev += item + ' ';
});
    let autor = document.querySelector('#ed_i2').value;

    autor = autor.split(' ').pop();

    let dotaz = 'https://exlibri.cz/prohledat-web/' + nazev + ' ' + autor + ' ' + rok;


    prepareFrame(dotaz);
    var iframe = document.querySelector('[name=display]');
    let divAdresa = document.querySelector('#rightbar .lbox');
    let divNav = document.querySelector('#nav-bar');

    divAdresa.addEventListener("click", function (event) {
        iframe.setAttribute("style", "position: absolute; width:0;height:0;border: 0;border: none;");
        //iframe.parentNode.removeChild(iframe);
});
    divNav.addEventListener("click", function (event) {
        iframe.setAttribute("style", "bottom: 0px; left: 0px; width: 100%; height: 200px; position: fixed; background-color: white; resize: vertical;");
});
})();
