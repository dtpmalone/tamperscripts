// ==UserScript==
// @name         tc.dndbeyond.compendium
// @namespace    com.tangledcode
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.dndbeyond.compendium.js
// @description  visual aid for D&D Beyond | Compendium Pages
// @author       Daniel Malone
// @match        https://www.dndbeyond.com/magic-items/*
// @match        https://www.dndbeyond.com/my-creations*
// @match        https://www.dndbeyond.com/my-collection*
// @match        https://www.dndbeyond.com/profile/*
// @grant        GM_addStyle
// ==/UserScript==

/*

<blockquote class="handwritten-blockquote">
  <p>
    Rawr! I’m really angry! Funny, I don’t feel any stronger. Maybe because I’m always angry, I’m always in top condition. Stands to reason.
  </p>
</blockquote>

---

  GM_addStyle(".handwritten-blockquote p { font-family: 'Nothing You Could Do', cursive; font-size: 1.2rem !important; color: #693a4f !important; }");
  GM_addStyle(".ct-item-detail .handwritten-blockquote p { font-size: 1rem !important; }");

*/
(function() {
  'use strict'

  GM_addStyle("@import url('https://fonts.googleapis.com/css2?family=Meddon&family=Nothing+You+Could+Do&family=Open+Sans&display=swap');")
  GM_addStyle(".handwritten-blockquote { font-family: 'Nothing You Could Do', cursive; font-size: 1.2rem !important; color: #693a4f !important; }")
  GM_addStyle(".ct-item-detail .handwritten-blockquote { font-size: 1rem !important; }")
})();
  