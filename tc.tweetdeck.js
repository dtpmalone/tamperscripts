// ==UserScript==
// @name         tc.tweetdeck
// @namespace    com.tangledcode
// @version      0.2
// @description  visual aid for TweetDeck
// @author       Daniel Malone
// @match        https://tweetdeck.twitter.com/*
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// ==/UserScript==

function replaceMediaImages () {
  // console.log('waiting for elements ...')
  waitForKeyElements('div.chirp-container article', (tweet) => {
    // console.log('new tweet ...')
    tweet.find('.media-item').each((i, item) => {
      const newImageUri = $(item).css('backgroundImage').replace('name=360x360', 'name=small')
      // console.log('replacing image ...', newImageUri)
      $(item).css('backgroundImage', newImageUri)
    })
  })
}

$(document).ready(() => {
  // console.log('running tc.tweetdeck on load ...')

  // console.log('adding/over writing styles ...')
  GM_addStyle('.column { width: 49% !important; }')
  GM_addStyle('.js-show-this-thread p { color: #fff; background-color: #38444d; border-radius: 5px; padding: 3px 8px; margin: auto; width: fit-content; text-align: center; }')
  GM_addStyle('.is-wide-columns .media-size-medium { height: 320px; }')
  GM_addStyle('.js-tweet-text .link-complex[rel="hashtag"], .js-quoted-tweet-text .link-complex[rel="hashtag"] { color: #38444d; background-color: #e1e8ed; border-radius: 5px; padding: 3px 8px; line-height: 1.8rem; }')
  GM_addStyle('.js-tweet-text .link-complex[rel="user"], .js-quoted-tweet-text .link-complex[rel="user"] { color: #fff; background-color: #1da1f2; border-radius: 5px; padding: 3px 8px; line-height: 1.8rem; }')
  GM_addStyle('.js-tweet-body { margin: 10px 0; }')
  GM_addStyle('.item-box { padding: 20px 100px; }')

  replaceMediaImages()
})
