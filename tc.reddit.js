// ==UserScript==
// @name         tc.reddit
// @namespace    com.tangledcode
// @version      0.1
// @description  visual aid for the mobil reddit page
// @author       Daniel Malone
// @match        https://m.reddit.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==

var centered = { 'width': '800px', 'margin': 'auto' };

$(document).ready(function() {
    $('.Listing .PostAndCommentList').css(centered);
});
