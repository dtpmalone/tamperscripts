// ==UserScript==
// @name         tc.dndbeyond-all
// @namespace    com.tangledcode
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.dndbeyond-all.js
// @description  visual aid for D&D Beyond | All Pages
// @author       Daniel Malone
// @match        https://www.dndbeyond.com/*
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
  'use strict';

  // scrollbars
  GM_addStyle('@media screen and (min-width:1025px){*::-webkit-scrollbar{width:4px;}}');
  GM_addStyle('@media screen and (min-width:1025px){*::-webkit-scrollbar-track{background-color:#f1f1f1;}}');
  GM_addStyle('@media screen and (min-width:1025px){*::-webkit-scrollbar-thumb{background-color:#c1c1c1;}}');
  GM_addStyle('@media screen and (min-width:1025px){*::-webkit-scrollbar-thumb:hover{background-color:#a9a9a9;}}');
})();
