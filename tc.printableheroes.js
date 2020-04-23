// ==UserScript==
// @name         tc.printableheroes
// @namespace    com.tangledcode
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.printableheroes.js
// @description  visual aid for Printable Heroes
// @author       Daniel Malone
// @match        https://printableheroes.com/*
// @grant        GM_addStyle
// ==/UserScript==

console.log('adding ...');

GM_addStyle('a.tc-t3-zip { background-color: #d62828 }');
GM_addStyle('a.tc-t3-vtt { background-color: #DE4843 }');

function addClass (xpath, cssClass) {
  // console.log({xpath, cssClass, document});

  var it = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  var max = 2;
  try {
    var node = it.iterateNext();
    // console.log({node});
    while(node !== null) {
      node.classList.add(cssClass);

      max--;
      if(max === 0) {
        break;
      }
    }
  } catch (e) {
    console.error('Error: Document tree modified during iteration ' + e);
  }

  // console.log('added "' + cssClass + '" to elements');
}

(function() {
  'use strict';

  // console.log('running ...');

  addClass("//a[contains(@href, 'tier=3') and contains(@href, '.zip') and not(contains(@href, 'VTT'))]", 'tc-t3-zip');
  addClass("//a[contains(@href, 'tier=3') and contains(@href, 'VTT')]", 'tc-t3-vtt');

  // console.log('done ...');
})();
