// ==UserScript==
// @name         frame
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Eliáš Sidon
// @match        https://antikvariat11.cz/pridat-predmet?copy=*
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
    prepareFrame('http://localhost:8000/get-muj/' + localStorage.getItem('urlAdresa'));
    var iframe = document.querySelector('[name=display]');
})();
