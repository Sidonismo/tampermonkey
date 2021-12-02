// ==UserScript==
// @name         ulozVyhledavani
// @namespace    https://github.com/Sidonismo/tampermonkey/raw/main/ulozVyhledavani.user.js
// @version      0.2.2
// @description  try to take over the world!
// @author       Eliáš Sidon
// @match        https://antikvariat11.cz/kniha/*
// @updateURL    https://github.com/Sidonismo/tampermonkey/raw/main/ulozVyhledavani.user.js
// @downloadURL  https://github.com/Sidonismo/tampermonkey/raw/main/ulozVyhledavani.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let vse = document.querySelector('table').innerText;
let rok = vse.match(/\d{4}/)[0];
        localStorage.setItem("rok", rok);
})();
