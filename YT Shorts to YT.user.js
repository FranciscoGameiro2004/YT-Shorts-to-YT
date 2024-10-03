// ==UserScript==
// @name         YT Shorts to YT
// @namespace    https://github.com/FranciscoGameiro2004/YT-Shorts-to-YT
// @version      2024-10-03
// @description  Avoid doomscrolling and watch a great short by going to the good old YouTube Player!
// @author       Francisco Gameiro
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        window.onurlchange
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.includes('https://www.youtube.com/shorts/')){
        window.location.href = window.location.href.replace('shorts/', 'watch?v=')
    }
    addEventListener('urlchange', (e) => {
        if (window.location.href.includes('https://www.youtube.com/shorts/')){
            window.location.href = window.location.href.replace('shorts/', 'watch?v=')
        }
    })
})();