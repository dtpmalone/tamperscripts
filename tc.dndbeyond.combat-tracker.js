// ==UserScript==
// @name         tc.dndbeyond.combat-tracker
// @namespace    com.tangledcode
// @version      0.3
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.dndbeyond.combat-tracker.js
// @description  visual aid for D&D Beyond | Combat Tracker
// @author       Daniel Malone
// @match        https://www.dndbeyond.com/combat-tracker/*
// @grant        GM_addStyle
// ==/UserScript==

const delay = ms => new Promise(res => setTimeout(res, ms));

const handleClassChange = (card) => {
  // LOG console.log('>   handleClassChange');

  handleHealthPointsChange(card);
};

const handleHealthPointsChange = (card) => {
  // LOG console.log('>   handleHealthPointsChange');

  // LOG console.log({ card });

  const current = parseInt(card.querySelector('.combatant-card__hp-current').innerText);
  const max = parseInt(card.querySelector('.combatant-card__hp-max').innerText);

  if (max > 0) {
    if (current === 0) {
      // LOG console.log('>   # dead');
      if (card.classList.contains('combatant-card--is-bloodied') || card.classList.contains('combatant-card--is-critical')) {
        card.classList.remove('combatant-card--is-bloodied', 'combatant-card--is-critical');
      }
      if (!card.classList.contains('combatant-card--is-dead')) {
        card.classList.add('combatant-card--is-dead');
      }
    } else if (current <= max * 0.25) {
      // LOG console.log('>   # critical');
      if (card.classList.contains('combatant-card--is-bloodied') || card.classList.contains('combatant-card--is-dead')) {
        card.classList.remove('combatant-card--is-bloodied', 'combatant-card--is-dead');
      }
      if (!card.classList.contains('combatant-card--is-critical')) {
        card.classList.add('combatant-card--is-critical');
      }
    } else if (current <= max * 0.5) {
      // LOG console.log('>   # bloodied');
      if (card.classList.contains('combatant-card--is-critical') || card.classList.contains('combatant-card--is-dead')) {
        card.classList.remove('combatant-card--is-critical', 'combatant-card--is-dead');
      }
      if (!card.classList.contains('combatant-card--is-bloodied')) {
        card.classList.add('combatant-card--is-bloodied');
      }
    } else {
      // LOG console.log('>   # alive');
      if (card.classList.contains('combatant-card--is-bloodied') || card.classList.contains('combatant-card--is-critical') || card.classList.contains('combatant-card--is-dead')) {
        card.classList.remove('combatant-card--is-bloodied', 'combatant-card--is-critical', 'combatant-card--is-dead');
      }
    }
  }
};

const onChange = (mutationList) => {
  // LOG console.log({ msg: '>   onChange', mutationList });

  mutationList.forEach((mutation) => {
    // LOG console.log({ type: mutation.type });

    switch (mutation.type) {
      case 'attributes':
        if (mutation.attributeName === 'class') {
          // const oldValues = mutation.oldValue.split(' ');
          // const newValues = mutation.target.className.split(' ');
          //
          // const added = newValues.filter(x => !oldValues.includes(x));
          // const removed = oldValues.filter(x => !newValues.includes(x));


          handleClassChange(mutation.target);
        }
        break;
      case 'characterData':
        handleHealthPointsChange(mutation.target.parentNode.closest('.combatant-card'));
        break;
      default:
    }
  });
};

const options = { subtree:true, attributeOldValue: true, characterDataOldValue: true };
const observer = new MutationObserver(onChange);

const registerModificationListeners = async (event) => {
  await delay(2500);

  const elements = document.querySelectorAll('.combatant-card');

  for(var i=0; i<elements.length; i++) {
    observer.observe(elements[i], options);
  }

  console.log(`>   registered ${elements.length} listeners`);
  event.target.removeEventListener('click', registerModificationListeners);
};

const initialize = () => {
  const id = setInterval(() => {
    const startButton = document.querySelector('.turn-controls__start-combat-button');

    if (startButton !== null && startButton !== undefined) {
      startButton.addEventListener('click', registerModificationListeners);

      clearInterval(id);
    }
  }, 250);
};

/*function bacon() {
  var cards = document.querySelectorAll('.combatant-card');

  for(var i=0; i<cards.length; i++) {
    const card = cards[i];
    const current = parseInt(card.querySelector('.combatant-card__hp-current').innerText);
    const max = parseInt(card.querySelector('.combatant-card__hp-max').innerText);

    console.log({card, current, max, list: card.classList});

    if (max > 0) {
      if (current === 0) {
        card.classList.remove('combatant-card--is-bloodied', 'combatant-card--is-critical');
        card.classList.add('combatant-card--is-dead');
      } else {
        card.classList.remove('combatant-card--is-dead');
      }
    }
  }
}

function changeCombatantCardsHealthIndicator() {
  var cards = document.querySelectorAll('.combatant-card__hp');

  for(var i=0; i<cards.length; i++) {
    const current = cards[i].querySelector('.combatant-card__hp-current');
    const currentHp = parseInt(current.innerText);
    const max = cards[i].querySelector('.combatant-card__hp-max');
    const maxHp = parseInt(max.innerText);
    const card = current.closest('.combatant-card');

    if (currentHp > 0) {
      card.classList.remove('combatant-card--is-bloodied');
      card.classList.remove('combatant-card--is-critical');
      card.classList.remove('combatant-card--is-dead');

      if (currentHp <= maxHp * 0.25) {
        current.classList.add('combatant-card__hp-critical');
      } else if (currentHp <= maxHp * 0.5) {
        current.classList.add('combatant-card__hp-bloodied');
      }
    } else if (maxHp > 0) {
      card.classList.remove('combatant-card--is-bloodied');
      card.classList.remove('combatant-card--is-critical');
      card.classList.add('combatant-card--is-dead');
    }
  }
}*/

(function() {
  'use strict';

  // full screen
  GM_addStyle('@media screen and (min-width: 1025px) { #site #site-main .container { max-width: 100%!important; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker__combatants { max-height: fit-content; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__body { padding: 0; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__combat-tracker { height: 91vh; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__content-section { overflow: hidden; max-height: 91vh; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__content-section: hover { overflow: auto overlay; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { footer { display: none; } }');

  // 3 columns
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__combat-tracker { width: 35%; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__content { width: 75%; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-start; align-content: flex-start; } }');
  GM_addStyle('@media screen and (min-width: 1025px) { .container .combat-tracker-page__content section:not(:first-child) { margin-left: 24px; margin-top: 0; } }');

  // character labeling
  GM_addStyle('.container .combatant-card .combatant-summary__details:focus, .container .combatant-card .combatant-card__hp:focus { outline: 0!important; }');

  // - default style for combatant cards
  GM_addStyle('.container .combatant-card         .combatant-card__left-bit--short { border: none; border-left-style: solid; border-left-width: 6px; border-top-left-radius: 6px; border-bottom-left-radius: 6px; border-top-width: 0!important; width: 55px; }');
  GM_addStyle('.container .combatant-card         .combatant-card__mid-bit         { border-bottom-left-radius: 6px; }');
  GM_addStyle('.container .combatant-card         .combatant-card__right-bit       { border-right-width: 6px; border-right-style: solid; border-top-right-radius: 6px; border-bottom-right-radius: 6px; padding-right: 2px; }');

  // - color characters whos turn it is
  GM_addStyle('.container .combatant-card.is-turn .combatant-card__left-bit--short { border-left-color: #0f8de3!important; background-color: #0f8de3!important; color: #202b33!important; }'); // 0f8de3  738694
  GM_addStyle('.container .combatant-card.is-turn .combatant-card__mid-bit         { border: 1px solid #0f8de3!important; box-shadow: none; }');
  GM_addStyle('.container .combatant-card.is-turn .combatant-card__right-bit       { border-color: #0f8de3!important; background: #0f8de3!important; }');

  GM_addStyle('.container .combatant-card.combatant-card--is-dead { opacity: 0.25; }');
  GM_addStyle('.container .combatant-card.is-turn                 { opacity: 1; }');

  // - color monster cards
  GM_addStyle('.container .in-combat.combatant-card--monster   .combatant-card__left-bit--short { border-left-color: #738694; background-color: #738694; }'); // f9afb8 d54f4f
  GM_addStyle('.container .in-combat.combatant-card--monster   .combatant-card__mid-bit         { border: 1px solid #738694; }');
  GM_addStyle('.container .in-combat.combatant-card--monster   .combatant-card__right-bit       { border-color: #738694; background-color: #738694; }');

  // - color player character cards
  GM_addStyle('.container .in-combat.combatant-card--character .combatant-card__left-bit--short { border-left-color: #ddd; background-color: #ddd; }'); // ddd 242527
  GM_addStyle('.container .in-combat.combatant-card--character .combatant-card__mid-bit         { border: 1px solid #ddd; }');
  GM_addStyle('.container .in-combat.combatant-card--character .combatant-card__right-bit       { border-color: #ddd; background-color: #ddd; }');

  // health indicator
  // - reset styling: remove red (blinking) avatar overlay, color change
  GM_addStyle('.container .combatant-card--is-bloodied .combatant-summary__avatar:after, .container .combatant-card--is-critical .combatant-summary__avatar:after { background-image: none!important; }');
  GM_addStyle('.container .combatant-card--is-bloodied .combatant-card__hp-current, .container .combatant-card--is-critical .combatant-card__hp-current { color: inherit!important; }');

  // - display icons to indicate health status
  GM_addStyle('.container .combatant-card--is-bloodied .combatant-card__mid-bit, .container .combatant-card--is-critical .combatant-card__mid-bit, .container .combatant-card--is-dead     .combatant-card__mid-bit { background-position: 330px,0; background-repeat: no-repeat; background-size: 30px; }');
  GM_addStyle('.container .combatant-card--is-bloodied .combatant-card__mid-bit { background-image: url(https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/images/dndbeyond.combat-tracker.bloodied.svg); }');
  GM_addStyle('.container .combatant-card--is-critical .combatant-card__mid-bit { background-image: url(https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/images/dndbeyond.combat-tracker.critical.svg); }');
  GM_addStyle('.container .combatant-card--is-dead     .combatant-card__mid-bit { background-image: url(https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/images/dndbeyond.combat-tracker.dead.svg); }');

  // - color dead combatant cards
  GM_addStyle('.container .combatant-card--is-dead .combatant-card__left-bit--short { border-left-color: #fff!important; background-color: #fff!important; }');
  GM_addStyle('.container .combatant-card--is-dead .combatant-card__mid-bit         { border: 1px solid #fff!important; }');
  GM_addStyle('.container .combatant-card--is-dead .combatant-card__right-bit       { border-color: #fff!important; background-color: #fff!important; }');

  //setInterval(bacon, 250);

  initialize();
})();
