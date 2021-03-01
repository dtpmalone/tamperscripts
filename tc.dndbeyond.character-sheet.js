// ==UserScript==
// @name         tc.dndbeyond.character-sheet
// @namespace    com.tangledcode
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.dndbeyond.character-sheet.js
// @description  visual aid for D&D Beyond | Character Sheet
// @author       Daniel Malone
// @match        https://www.dndbeyond.com/profile/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  // https://wallpaperaccess.com/full/350107.jpg
  // https://images-geeknative-com.exactdn.com/wp-content/uploads/2014/08/Elven_City_-_Players_Handbook_jpg_jpgcopy.jpg?strip=all&lossy=1&ssl=1
  // https://i.redd.it/ifw1keannjw41.jpg
  // https://i.imgur.com/yBTHzDb.jpg
  GM_addStyle('@media (min-width: 768px)  { html body.body-rpgcharacter-sheet { background-image: url(https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/images/dndbeyond.character-sheet.background.jpg), url(https://media-waterdeep.cursecdn.com/attachments/0/84/background_texture.png)!important; background-repeat: no-repeat no-repeat!important; background-position: center 141px!important; background-color: #f9f9f9!important; background-size: 100%!important; } }');
  GM_addStyle('@media (min-width: 1024px) { html body.body-rpgcharacter-sheet { background-image: url(https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/images/dndbeyond.character-sheet.background.jpg), url(https://media-waterdeep.cursecdn.com/attachments/0/84/background_texture.png)!important; background-repeat: no-repeat no-repeat!important; background-position: center 208px!important; background-color: #f9f9f9!important; background-size: 100%!important; } }');
  GM_addStyle('@media (min-width: 1200px) { html body.body-rpgcharacter-sheet { background-image: url(https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/images/dndbeyond.character-sheet.background.jpg), url(https://media-waterdeep.cursecdn.com/attachments/0/84/background_texture.png)!important; background-repeat: no-repeat no-repeat!important; background-position: center 230px!important; background-color: #f9f9f9!important; background-size: 100%!important; } }');
  GM_addStyle('@media (min-width: 1921px) { html body.body-rpgcharacter-sheet { background-image: url(https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/images/dndbeyond.character-sheet.background.jpg), url(https://media-waterdeep.cursecdn.com/attachments/0/84/background_texture.png)!important; background-repeat: no-repeat no-repeat!important; background-position: center 230px!important; background-color: #f9f9f9!important; background-size: 100%!important; } }');
  GM_addStyle('@media (min-width: 2561px) { html body.body-rpgcharacter-sheet { background-image: url(https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/images/dndbeyond.character-sheet.background.jpg), url(https://media-waterdeep.cursecdn.com/attachments/0/84/background_texture.png)!important; background-repeat: no-repeat no-repeat!important; background-position: center 230px!important; background-color: #f9f9f9!important; background-size: 100%!important; } }');
})();
