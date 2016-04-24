// ==UserScript==
// @name         tc.reddit
// @namespace    com.tangledcode
// @version      0.3
// @description  visual aid for the mobil reddit page
// @author       Daniel Malone
// @match        https://m.reddit.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.Listing { width: 800px; margin: auto; }');
GM_addStyle('PostHeader__post-title-line { font-size: 20px; font-weight: bold; }');
GM_addStyle('.IndexPage-button.next { width: 800px; margin-right: -17px; margin-top: 50px; margin-bottom: 150px; text-align: center; padding: 20px; color: #fff; background-color: #449d44; border-color: #398439; }');
