// ==UserScript==
// @name         tc.tweetdeck
// @namespace    com.tangledcode
// @version      0.7
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.tweetdeck.js
// @description  visual aid for TweetDeck
// @author       Daniel Malone
// @match        https://tweetdeck.twitter.com/*
// @grant        GM_addStyle
// @require      https://git.io/waitForKeyElements.js
// ==/UserScript==

(function() {
  'use strict'

  GM_addStyle('.column { width: 33% !important; }')
  GM_addStyle('.js-show-this-thread p { color: #fff !important; background-color: #38444d; border-radius: 5px; padding: 3px 8px; margin: auto; width: fit-content; text-align: center; }')
  GM_addStyle('html.dark .is-wide-columns .media-size-medium { height: 360px; }')
  GM_addStyle('.js-tweet-text .link-complex[rel="hashtag"], .js-quoted-tweet-text .link-complex[rel="hashtag"] { color: #38444d; background-color: #e1e8ed; border-radius: 5px; padding: 3px 8px; line-height: 1.8rem; }')
  GM_addStyle('.js-tweet-text .link-complex[rel="user"], .js-quoted-tweet-text .link-complex[rel="user"] { color: #fff; background-color: #1da1f2; border-radius: 5px; padding: 3px 8px; line-height: 1.8rem; }')
  GM_addStyle('.js-tweet-body { margin: 20px 0; }')
  GM_addStyle('.js-med-tweet { display: none; }')
  GM_addStyle('html.dark .mdl.s-full { border: 0; background: transparent; box-shadow: none; }')
  GM_addStyle('html.dark .mdl-media-next, html.dark .mdl-media-prev { background: none; }')
  GM_addStyle('html.dark .med-embeditem { top: 0; bottom: 0; height: 100% }')

  waitForKeyElements('div.chirp-container article', (tweet) => {
    tweet.querySelectorAll('.media-item').forEach((item) => {
      item.style.backgroundImage = item.style.backgroundImage.replace('name=360x360', 'name=small')
    })
  })
})()
