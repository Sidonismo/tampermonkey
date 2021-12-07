// ==UserScript==
// @name         cortes_odkazy
// @namespace    https://github.com/Sidonismo/tampermonkey/raw/main/cortes_odkazy.user.js
// @version      0.0.1
// @description  try to take over the world!
// @author       Eliáš Sidon
// @match        https://antikvariat11.cz/rozpracovano*
// @match        https://antikvariat11.cz/rozpracovano2*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @downloadURL https://github.com/Sidonismo/tampermonkey/raw/main/cortes_odkazy.user.js
// @updateURL https://github.com/Sidonismo/tampermonkey/raw/main/cortes_odkazy.user.js
// @grant none
// ==/UserScript==

(function() {
    'use strict';
let odkaz = document.querySelectorAll('.para h3 a');
    odkaz.forEach(function (element){ element.href = element.href + '?edit=ed' });
    //odkaz.href = odkaz.href + '?edit=ed';
})();
