// ==UserScript==
// @name         tc.notion
// @namespace    com.tangledcode
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.notion.js
// @description  visual aid for notion.so
// @author       Daniel Malone
// @match        https://www.notion.so/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle('.notion-peek-renderer > div[style*="max-width"], .notion-selectable { max-width: 2000px!important; }');
  GM_addStyle('.notion-collection_view-block[style*="width: 9"] { width: 100%!important;}');
})();
