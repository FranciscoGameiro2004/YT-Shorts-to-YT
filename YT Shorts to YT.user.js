// ==UserScript==
// @name         YT Shorts to YT
// @namespace    http://tampermonkey.net/
// @version      2024-10-02
// @description  Avoid doomscrolling and watch a great short by going to the good old YouTube Player!
// @author       Francisco Gameiro
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        window.onurlchange
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    console.log('If this appears, it works!')
    if (window.location.href.includes('https://www.youtube.com/shorts/')){
        window.location.href = window.location.href.replace('shorts/', 'watch?v=')
    }
    addEventListener('urlchange', (e) => {
        if (window.location.href.includes('https://www.youtube.com/shorts/')){
            /*try{
                document.querySelector('.promo-title.ytd-background-promo-renderer') = 'A short video is comming.'
                document.querySelector('.promo-body-text.ytd-background-promo-renderer') = 'Please wait.'
            } catch (err){
                console.warn(`Messages didn't work`)
            }*/
            window.location.href = window.location.href.replace('shorts/', 'watch?v=')
        }
    })
})();