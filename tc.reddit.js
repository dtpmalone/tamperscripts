// ==UserScript==
// @name         tc.reddit
// @namespace    com.tangledcode
// @version      0.5
// @description  visual aid for the reddit page
// @author       Daniel Malone
// @match        https://www.reddit.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.side { width: 200px; }');
GM_addStyle('body.with-listing-chooser.listing-chooser-collapsed>.content, body.with-listing-chooser.listing-chooser-collapsed .footer-parent { margin-left: 200px }');
GM_addStyle('a.subreddit { color: #777; background-color: #eee; border: 1px solid #ddd; display: block; padding: 10px 0; text-align: center; vertical-align: middle; border-radius: 4px; }');
GM_addStyle('.thing. .title { font-size: x-large; }');
GM_addStyle('.expando-button { margin-top: 35px; }');
GM_addStyle('#siteTable { margin-right: 205px; }');
GM_addStyle('#siteTable .thing { margin-bottom: 40px; }');
GM_addStyle('.expando-button.collapsed.selftext { background-image: none; color: #31708f; background-color: #d9edf7; border: 1px solid #bce8f1; display: block; padding: 10px 0; text-align: center; vertical-align: middle; border-radius: 4px; height: inherit; float: inherit; margin: auto; margin-bottom: 0; width: inherit; }');
GM_addStyle('.expando-button.collapsed.selftext:hover { background-image: none; }');

$(document).ready(function() {
  // vars
  var buttons;

  // funcs
  var getmedia = function(id, classNames) {
    return document.getElementById(id)
        .getElementsByClassName(classNames);
  };

  var getCollapsedMediaButtons = function(id, className) {
    return getmedia('siteTable', 'expando-button collapsed video');
  };

  var getCollapsedTextButtons = function(id, className) {
    return getmedia('siteTable', 'expando-button collapsed selftext');
  };

  var scrollToTop = function() {
    return window.scrollTo(0, 0);
  };

  var click = function(element) {
    element.click();
  };

  var clickCollapsedMediaButton = function() {
    Array.prototype.forEach.call(buttons, click);

    buttons = getCollapsedMediaButtons();

    if (buttons.length > 0) {
      setTimeout(clickCollapsedMediaButton, 50);
    } else {
      setTimeout(scrollToTop, 10);
    }
  };

  var enlargeCollapsedTextButtons = function() {
    var textButtons = getCollapsedTextButtons();

    Array.prototype.forEach.call(textButtons, function(element) {
      element.textContent = "read more";
    });
  };

  var init = function() {
    buttons = getCollapsedMediaButtons();
    clickCollapsedMediaButton();

    enlargeCollapsedTextButtons();
  };

  // run
  init();
});
