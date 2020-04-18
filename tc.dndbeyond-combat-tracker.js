// ==UserScript==
// @name         tc.dndbeyond-combat-tracker
// @namespace    com.tangledcode
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.dndbeyond-combat-tracker.js
// @description  visual aid for D&D Beyond | Combat Tracker
// @author       Daniel Malone
// @match        https://www.dndbeyond.com/combat-tracker/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  // character labeling
  GM_addStyle('.container .combatant-card .combatant-summary__details:focus { outline: 0!important; }');

  GM_addStyle('.container .combatant-card .combatant-card__left-bit--short { border: none; border-left-width: 6px; border-left-style: solid; border-top-left-radius: 6px; border-bottom-left-radius: 6px; width: 55px; }');
  GM_addStyle('.container .combatant-card .combatant-card__mid-bit { border-bottom-left-radius: 6px; border-right-width: 0!important; }');
  GM_addStyle('.container .combatant-card .combatant-card__right-bit { border-right-width: 6px; border-right-style: solid; border-top-right-radius: 6px; border-bottom-right-radius: 6px; padding-right: 2px; }');

  GM_addStyle('.container .combatant-card.is-turn .combatant-card__left-bit--short { border-left-color: #1b9af0!important; background-color: #1b9af0!important; }');
  GM_addStyle('.container .combatant-card.is-turn .combatant-card__mid-bit { border: 1px solid #1b9af0!important; border-right-width: 0!important; box-shadow: none; }');
  GM_addStyle('.container .combatant-card.is-turn .combatant-card__right-bit { border-color: #1b9af0!important; background: #1b9af0!important; }');

  GM_addStyle('.container .combatant-card--monster.in-combat .combatant-card__left-bit--short { border-left-color: #f9afb8; background-color: #f9afb8; }');
  GM_addStyle('.container .combatant-card--monster.in-combat .combatant-card__mid-bit { border: 1px solid #f9afb8; }');
  GM_addStyle('.container .combatant-card--monster.in-combat .combatant-card__right-bit { border-color: #f9afb8; border-right-color: #d54f4f!important; background-color: #f9afb8; }');

  GM_addStyle('.container .combatant-card--character.in-combat .combatant-card__left-bit--short { border-left-color: #ddd; background-color: #ddd; }');
  GM_addStyle('.container .combatant-card--character.in-combat .combatant-card__mid-bit { border: 1px solid #ddd; }');
  GM_addStyle('.container .combatant-card--character.in-combat .combatant-card__right-bit { border-color: #ddd; border-right-color: #242527!important; background-color: #ddd; }');

  // full screen
  GM_addStyle('@media screen and (min-width: 1025px) { body.responsive-enabled #site #site-main .container { max-width: 1800px!important; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker__combatants { max-height: fit-content; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__body { padding: 0; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__combat-tracker { max-height: 85vh; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__content-section { overflow: hidden; max-height: 85vh; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__content-section: hover { overflow: auto overlay; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { #footer { display: none; } }');

  // 3 columns
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__combat-tracker { width: 35%; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__content { width: 75%; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-start; align-content: flex-start; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__content section:not(:first-child) { margin-left: 24px; margin-top: 0; } }');
})();
