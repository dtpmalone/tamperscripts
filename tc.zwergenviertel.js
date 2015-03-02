// ==UserScript==
// @name         tc.zwergenviertel
// @namespace    com.tangledcode
// @version      0.1
// @description  visual aid for the zwergenviertel forum
// @author       Daniel Malone
// @match        http://www.zwergenviertel.de/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

String.prototype.endsWith = function(suffix) {
  return this.slice(-suffix.length) == suffix;
}

function setChildTransparent(index, element) {
  var $td = $(element);

  $td.css(transparent);
}

function setRowTransparent(index, element) {
  var $td = $(element);
  var src = $td.find('img').attr('src');

  if (src.endsWith('off.png') || src.endsWith('redirect.png')) {
    $td.parent().css(transparent);
  }
}

var invisable = { 'display': 'none' };
var transparent = { 'opacity': 0.25 };

$(document).load(function() {
  var $header = $('#upper_section');
  $header.find('.user p.avatar').css(invisable);
  $header.find('.news').css(invisable);

  $('#boardindex_table td.icon').each(setRowTransparent);

  $('#boardindex_table td.children').each(setChildTransparent);
});
