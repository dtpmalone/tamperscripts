// ==UserScript==
// @name         tc.printableheroes
// @namespace    com.tangledcode
// @version      0.4
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.printableheroes.js
// @description  visual aid for Printable Heroes
// @author       Daniel Malone
// @match        https://printableheroes.com/*
// @grant        GM_addStyle
// @require      https://git.io/waitForKeyElements.js
// ==/UserScript==

(function() {
  'use strict'

  GM_addStyle('.container .col-sm-4:last-child button { font-size: 0.9em; }')
  GM_addStyle('.tc-svg { height: 20px; margin-left: 10px; color: #007bff; }')

  const ZIP_ICON = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-archive" class="tc-svg svg-inline--fa fa-file-archive fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zM128.4 336c-17.9 0-32.4 12.1-32.4 27 0 15 14.6 27 32.5 27s32.4-12.1 32.4-27-14.6-27-32.5-27zM224 136V0h-63.6v32h-32V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM95.9 32h32v32h-32zm32.3 384c-33.2 0-58-30.4-51.4-62.9L96.4 256v-32h32v-32h-32v-32h32v-32h-32V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.1c5.7 0 10.7 4.1 11.8 9.7l17.3 87.7c6.4 32.4-18.4 62.6-51.4 62.6z"></path></svg>'
  const VTT_ICON = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" class="tc-svg svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>'

  waitForKeyElements('.container .col-sm-4:last-child button', (button) => {
    if (button.innerText.includes(' - PNGs - Tier 3.zip')) {
      button.innerHTML = button.innerHTML + ZIP_ICON
    }
    if (button.innerText.includes(' - VTT - Tier 3.zip')) {
      button.innerHTML = button.innerHTML + VTT_ICON
    }
  })
})();
