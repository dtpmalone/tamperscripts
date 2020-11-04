// ==UserScript==
// @name         tc.legendkeeper
// @namespace    com.tangledcode
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.legendkeeper.js
// @description  visual aid for LegendKeeper
// @author       Daniel Malone
// @match        https://app.legendkeeper.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.theme-dark .lk-mention { color: #42b983; border-bottom: .2em solid #c49454; }');
GM_addStyle('u { text-decoration: none; color: #42b983; font-weight: bold; }');
GM_addStyle('a { font-weight: bold; }');
GM_addStyle('s { text-decoration: none; color: #476582; background-color: #e8ebec; border-radius: 3px; padding: .25rem .5rem; margin: 0; }');
GM_addStyle('sup { top: 0; font-size: 100%; color: #42b983; }');
GM_addStyle('sub { top: 0; font-size: 100%; color: #e71d36; }');
GM_addStyle('.theme-dark .lk-editor .ProseMirror p { text-align: revert; }');

// highlight external links
GM_addStyle('a[href^="https://www.dndbeyond.com/"] { border-bottom: .2em solid #e40712; }');

// style "box text"
GM_addStyle('.theme-dark .lk-editor .ProseMirror blockquote { background-color: #e8ebec!important; border-left-color: #c49454!important; border-left-width: 8px!important; color: #242527; }');
GM_addStyle('.theme-dark .lk-editor .ProseMirror blockquote p { color: revert; }');
