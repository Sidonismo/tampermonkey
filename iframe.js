// ==UserScript==
// @name         frame
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Eliáš Sidon
// @match        https://antikvariat11.cz/pridat-predmet?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    function prepareFrame(url) {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("name", "display");
        ifrm.setAttribute("src", url);
        ifrm.setAttribute("style", "bottom: 0px; left: 0px; width: 100%; height: 350px; position: fixed; background-color: white;");
        document.body.appendChild(ifrm);
    }
    console.log('Začátek');
        let nazev = document.querySelector('#sug_inp').value;
    if (nazev.match(/\d+Svazky\s(\d*)/gmiu)){
        let svazky = nazev.match(/\d+Svazky\s(\d*)/gmiu)[0];
        nazev = nazev.replace(svazky, '');
}
    nazev = nazev.split(':')[0];
    nazev = nazev.split(';')[0];
    nazev = nazev.split('-')[0];
    nazev = nazev.split('[')[0];
    nazev = nazev.split('.')[0];
    let autor = document.querySelector('#ed_i2').value;

    autor = autor.split(' ').pop();
        let rok = localStorage.getItem('rok');
    let dotaz = 'https://exlibri.cz/prohledat-web/' + nazev + ' ' + autor + ' ' + rok;
    console.log(dotaz);

    prepareFrame(dotaz);
    var iframe = document.querySelector('[name=display]');
})();
