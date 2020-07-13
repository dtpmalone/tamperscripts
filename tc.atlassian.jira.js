// ==UserScript==
// @name         tc.atlassian.jira
// @namespace    com.tangledcode
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.atlassian.jira.js
// @description  visual aid for Atlassian Jira
// @author       Daniel Malone
// @match        https://*.atlassian.net/secure/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.adg3 .ghx-column h2 { color: #fff; font-weight: bold; }');
GM_addStyle('.ghx-show-old-description { color: #fff; }');

GM_addStyle('#ghx-pool ul.ghx-column-headers li[data-id="6"], #ghx-pool ul.ghx-columns li[data-column-id="6"] { background-color: #8d99ae; }');   // Backlog
GM_addStyle('#ghx-pool ul.ghx-column-headers li[data-id="7"], #ghx-pool ul.ghx-columns li[data-column-id="7"] { background-color: #f9c74f; }');   // Next Session
GM_addStyle('#ghx-pool ul.ghx-column-headers li[data-id="13"], #ghx-pool ul.ghx-columns li[data-column-id="13"] { background-color: #e63946; }'); // On Hold
GM_addStyle('#ghx-pool ul.ghx-column-headers li[data-id="8"], #ghx-pool ul.ghx-columns li[data-column-id="8"] { background-color: #1d3557; }');   // In Progress
GM_addStyle('#ghx-pool ul.ghx-column-headers li[data-id="9"], #ghx-pool ul.ghx-columns li[data-column-id="9"] { background-color: #43aa8b; }');   // Done
