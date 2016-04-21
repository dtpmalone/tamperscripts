// ==UserScript==
// @name         tc.reddit
// @namespace    com.tangledcode
// @version      0.2
// @description  visual aid for the mobil reddit page
// @author       Daniel Malone
// @match        https://m.reddit.com/*
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==

GM_addStyle('.Listing { width: 800px; margin: auto; }');
GM_addStyle('PostHeader__post-title-line { font-size: 20px; font-weight: bold; }');
