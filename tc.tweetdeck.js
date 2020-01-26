  
// ==UserScript==
// @name         tc.tweetdeck
// @namespace    com.tangledcode
// @version      0.1
// @description  visual aid for TweetDeck
// @author       Daniel Malone
// @match        https://tweetdeck.twitter.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.column { width: 560px !important; }')
GM_addStyle('.js-show-this-thread p { color: #fff; background-color: #1da1f2; border-radius: 5px; padding: 3px 8px; margin: auto; width: 150px; text-align: center; }')
