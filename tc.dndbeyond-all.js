// ==UserScript==
// @name         tc.dndbeyond-all
// @namespace    com.tangledcode
// @version      0.2
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
  GM_addStyle('*::-webkit-scrollbar { width: 4px; }');
  GM_addStyle('*::-webkit-scrollbar-track { background-color: #f1f1f1; }');
  GM_addStyle('*::-webkit-scrollbar-thumb { background-color: #c1c1c1; }');
  GM_addStyle('*::-webkit-scrollbar-thumb:hover { background-color: #a9a9a9; }');

  GM_addStyle('body::-webkit-scrollbar { width: 8px; }');
})();
