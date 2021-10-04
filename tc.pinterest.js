// ==UserScript==
// @name         tc.pinterest
// @namespace    com.tangledcode
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.pinterest.js
// @description  visual aid for Pinterest
// @author       Daniel Malone
// @match        https://www.pinterest.de/*
// @grant        GM_addStyle
// ==/UserScript==

const delay = ms => new Promise(res => setTimeout(res, ms))

const getSourceUri = (node) => {
  if (node.srcset !== undefined) {
    const sets = node.srcset.split(', ')[3]
    if (sets !== undefined) {
      node.classList.add('marked')

      return sets.split(' ')[0]
    }
  }

  return undefined
}

const createSourceLink = (node) => {
  const uri = getSourceUri(node)

  if (uri !== undefined) {
    const src = document.createElement('a')
    src.innerText = 'Source'
    src.classList.add('source')
    src.href = uri

    return src
  }

  return undefined
}

const initialize = async () => {
  setInterval(() => {
    if (window.location.href.startsWith('https://www.pinterest.de/dtpmalone/')) {
      document.querySelectorAll('div[data-grid-item="true"] img[src^="https://i.pinimg.com/"]:not(.marked)')
        .forEach((n) => {
          const src = createSourceLink(n)

          if (src !== undefined) {
            const p = n.closest('a').parentNode.parentNode
            p.parentNode.insertBefore(src, p.nextSibling)

            src.nextSibling.classList.add('hidden')
          }
      })
    }
  }, 500)
}

(function() {
  'use strict'

  GM_addStyle('.hidden { display: none; }')
  GM_addStyle('a.source { font-weight: bold; margin-top: 8px; padding: 10px 14px; text-align: center; background-color: #F0F0F0; border: 1px solid #fff; border-radius: 22px; color: #111111; display: block; }')
  GM_addStyle('a.source:hover { background-color: #fff; border: 1px solid #F0F0F0; }')

  initialize()
})()
