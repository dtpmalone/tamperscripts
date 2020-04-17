// ==UserScript==
// @name         tc.dndbeyond-combat-tracker
// @namespace    com.tangledcode
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.dndbeyond-combat-tracker.js
// @description  visual aid for D&D Beyond | Combat Tracker
// @author       Daniel Malone
// @match        https://www.dndbeyond.com/combat-tracker/*
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
  'use strict';

  // character labeling
  GM_addStyle('.container .combatant-card--monster .combatant-card__right-bit { border-right: 6px solid #d54f4f; border-top-right-radius: 6px; border-bottom-right-radius: 6px; }');
  GM_addStyle('.container .combatant-card--monster .combatant-card__hp { padding-right: 2px; }');

  GM_addStyle('.container .combatant-card--character .combatant-card__right-bit { border-right: 6px solid #069d5e; border-top-right-radius: 6px; border-bottom-right-radius: 6px; }');
  GM_addStyle('.container .combatant-card--character .combatant-card__hp { padding-right: 2px; }');

  // full screen
  GM_addStyle('@media screen and (min-width:1025px){body.responsive-enabled #site #site-main .container{max-width:1800px!important;}}');
  GM_addStyle('@media screen and (min-width:1025px){.container .combat-tracker__combatants{max-height:fit-content;}}');
  GM_addStyle('@media screen and (min-width:1025px){.container .combat-tracker-page__body{padding:0;}}');
  GM_addStyle('@media screen and (min-width:1025px){.container .combat-tracker-page__combat-tracker{max-height:85vh;}}');
  GM_addStyle('@media screen and (min-width:1025px){.container .combat-tracker-page__content-section{overflow:hidden;max-height:85vh;}}');
  GM_addStyle('@media screen and (min-width:1025px){.container .combat-tracker-page__content-section:hover{overflow:auto overlay;}}');
  GM_addStyle('@media screen and (min-width:1025px){#footer{display:none;}}');

  // 3 columns
  GM_addStyle('@media screen and (min-width:1025px){.container .combat-tracker-page__combat-tracker{width:30%;}}');
  GM_addStyle('@media screen and (min-width:1025px){.container .combat-tracker-page__content{width:75%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start;align-content:flex-start;}}');
  GM_addStyle('@media screen and (min-width:1025px){.container .combat-tracker-page__content section:not(:first-child){margin-left:24px;margin-top:0;}}');
})();
