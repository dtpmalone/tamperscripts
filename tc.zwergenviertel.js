// ==UserScript==
// @name         tc.zwergenviertel
// @namespace    com.tangledcode
// @version      0.7
// @description  visual aid for the zwergenviertel forum
// @author       Daniel Malone
// @match        http://www.zwergenviertel.de/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @resource     bootstrap https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css
// ==/UserScript==

GM_addStyle(GM_getResourceText("bootstrap"));

String.prototype.endsWith = function(suffix) {
  return this.slice(-suffix.length) == suffix;
};

function setChildTransparent(index, element) {
  var $td = $(element);

  $td.css(transparent);
}

function setRowTransparent(index, element) {
  var $td = $(element);
  var $img = $td.find('img');

  if (!$img) return;

  var src = $img.attr('src');

  if (!src) {
    $td.parent().css(transparent);
  } else if (src.endsWith('new.gif')) {
    $img.parent().append('<span class="label label-success">NEW</span>');
    $img.remove();
  } else if (src.endsWith('off.png') || src.endsWith('redirect.png')) {
    $td.parent().css(transparent);
  }
}

var invisable   = { 'display': 'none' };
var transparent = { 'opacity': 0.25 };
var collapse    = { 'border-collapse': 'inherit' };

$(document).ready(function() {
  var $header = $('#upper_section');
  $header.find('.user p.avatar').css(invisable);
  $header.find('.news').css(invisable);
  $('table.table_grid').css(collapse);
  $('#boardindex_table > table').css(collapse);

  $('#boardindex_table td.icon').each(setRowTransparent);
  $('#messageindex td.subject').each(setRowTransparent);

  $('#boardindex_table td.children').each(setChildTransparent);
});
