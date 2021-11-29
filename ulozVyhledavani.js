// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://antikvariat11.cz/*
// @match        http://localhost:8000/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        let searchbox = document.querySelector("#searchbox");
    let sbtn = document.querySelector("#sbtn");
    sbtn.addEventListener('click', function(event) {
        localStorage.setItem("urlAdresa", searchbox.value);
});
})();
