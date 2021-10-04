// ==UserScript==
// @name         tc.legendkeeper
// @namespace    com.tangledcode
// @version      0.4
// @updateURL    https://raw.githubusercontent.com/dtpmalone/tamperscripts/master/tc.legendkeeper.js
// @description  visual aid for LegendKeeper
// @author       Daniel Malone
// @match        https://app.legendkeeper.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.theme-dark .lk-mention, a.lk-link .lk-mention { color: #c49454!important; border-bottom: .05em solid #42B983!important; }')
GM_addStyle('a { font-weight: bold!important; }')
GM_addStyle('u { text-decoration: none; color: #EC0F6B; font-weight: bold; }')
GM_addStyle('s { text-decoration: none; color: #476582; background-color: #E8EBEC; border-radius: 3px; padding: .25rem .5rem; margin: 0; }')
GM_addStyle('sup { top: 0; font-size: 100%; color: #42B983; }')
GM_addStyle('sub { top: 0; font-size: 100%; color: #e71d36; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror p { text-align: revert!important; }')

// headings
GM_addStyle('.theme-dark .lk-editor .ProseMirror h1 { color: #118EE6!important; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror h2 { color: #118EE6!important; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror h3 { color: #118EE6!important; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror h4 { color: #118EE6!important; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror h5 { color: #118EE6!important; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror h6 { display: inline; padding: 0 5px; background-color: #423f3c; border-bottom: 2px solid #118ee6; color: #ffffffde!important; font-weight: 600; font-size: 1.1rem; }')

// highlight links
GM_addStyle('a[href^="https://www.dndbeyond.com/"]:not([class="blockLink"]) { color: #c49454; border-bottom: .05em solid #e40712; }')

// style "unordered lists"
GM_addStyle('.theme-dark .lk-editor .ProseMirror li { padding-left: 5px; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror li::marker { content: "—"; color: #EA2C3E; font-weight: 900; }')

// style "box text"
GM_addStyle('.theme-dark .lk-editor .ProseMirror blockquote { background-color: #e8ebec!important; border-left-color: #c49454!important; border-left-width: 8px!important; color: #242527; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror blockquote p { color: revert; }')

// style "secrets"
GM_addStyle('.theme-dark .lk-editor .bodiedExtensionView-content-wrap { transition: none; border: 1px solid crimson; background-color: #191716; margin-top: 26px; margin-bottom: 15px; }')
GM_addStyle('.theme-dark .lk-editor .bodiedExtensionView-content-wrap .extension-content { transition: none; opacity: 0; }')
GM_addStyle('.theme-dark .lk-editor .bodiedExtensionView-content-wrap .label span { opacity: 1; color: crimson; font-weight: bold; }')
GM_addStyle('.theme-dark .lk-editor .bodiedExtensionView-content-wrap .label span::before { content: "🤫"; margin-left: 5px; padding-right: 10px; line-height: 1rem; font-size: 1.5rem; }')
GM_addStyle('.theme-dark .lk-editor .bodiedExtensionView-content-wrap:hover { transition: background-color 0.5s ease; transition-delay: 2s; background-color: crimson; }')
GM_addStyle('.theme-dark .lk-editor .bodiedExtensionView-content-wrap:hover .extension-content { transition: opacity 0.5s ease; transition-delay: 2s; opacity: 1; }')
GM_addStyle('.theme-dark .lk-editor .bodiedExtensionView-content-wrap:hover .label span { color: black; }')

// style "table"
GM_addStyle('.theme-dark .lk-editor .pm-table-wrapper .pm-table-header-content-wrap { background-color: #dfe2e5!important; }')
GM_addStyle('.theme-dark .lk-editor .pm-table-wrapper .pm-table-header-content-wrap p { font-weight: bolder; color: #191716!important; }')
GM_addStyle('.theme-dark .lk-editor .pm-table-wrapper tr:nth-child(odd) { background-color: #252423; }')


// style "pills" in tables
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(n+1) { color: #191716; font-weight: bold; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(10) { background-ccolor: #F94144; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(9) { background-color: #F3722C; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(8) { background-color: #F8961E; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(7) { background-color: #F9844A; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(6) { background-color: #F9C74F; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(5) { background-color: #90BE6D; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(4) { background-color: #43AA8B; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(3) { background-color: #4D908E; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(2) { background-color: #577590; }')
GM_addStyle('.theme-dark .lk-editor td p > s:nth-child(1) { background-color: #277DA1; }')
GM_addStyle('.theme-dark .lk-editor td p > s:only-child { color: #476582; background-color: #E8EBEC; }')

// style "popup"
GM_addStyle('.popover-resource { width: 805px!important; }')
//GM_addStyle('.popover-resource .lk-editor { height: 500px; max-height: 500px; }')

// style "expander"
GM_addStyle('.theme-dark .lk-editor .ProseMirror .ak-editor-expand { background-color: #1d3557!important; }')
GM_addStyle('.theme-dark .lk-editor .ProseMirror .ak-editor-expand .ak-editor-expand__title-input { color: #ffe66d!important; font-family: Roboto; font-size: 16px; font-weight: 900; font-stretch: normal; font-style: normal; line-height: 1.63; }')

// style icons
GM_addStyle('ul .icon-picker-container .svg-inline--fa { width: 1.5em!important; }')

// ffe66d a8dadc
// style "listed links" in DM screen
// GM_addStyle('.theme-dark .lk-editor .ProseMirror div[data-layout-column="true"] div[data-layout-content="true"] ul { list-style: none; }')

// GM_addStyle('.theme-dark .lk-editor .ProseMirror div[data-layout-column="true"] div[data-layout-content="true"] ul { padding: 10px; margin: 0; border-radius: 10px; background-color: #dee2e6; }')
// GM_addStyle('.theme-dark .lk-editor .ProseMirror div[data-layout-column="true"] div[data-layout-content="true"] ul:last-child { margin-bottom: 24px; }')
// GM_addStyle('.theme-dark .lk-editor .ProseMirror div[data-layout-column="true"] div[data-layout-content="true"] ul ul { margin: 2px; padding: 10px; border-radius: 10px; background-color: #adb5bd; }')
// GM_addStyle('.theme-dark .lk-editor .ProseMirror div[data-layout-column="true"] div[data-layout-content="true"] ul + hr { opacity: 0.05; margin: 5px 0; padding: 0; }')

/*GM_addStyle('.theme-dark .lk-editor td p s.acrobatics { background-color: #F72585; } ')
GM_addStyle('.theme-dark .lk-editor td p s.animal-handling { background-color: #B5179E; } ')
GM_addStyle('.theme-dark .lk-editor td p s.arcana { background-color: #7209B7; } ')
GM_addStyle('.theme-dark .lk-editor td p s.athletics { background-color: #560BAD; } ')
GM_addStyle('.theme-dark .lk-editor td p s.deception { background-color: #480CA8; } ')
GM_addStyle('.theme-dark .lk-editor td p s.history { background-color: #3A0CA3; } ')
GM_addStyle('.theme-dark .lk-editor td p s.insight { background-color: #3F37C9; } ')
GM_addStyle('.theme-dark .lk-editor td p s.intimidation { background-color: #4361EE; } ')
GM_addStyle('.theme-dark .lk-editor td p s.investigation { background-color: #4895EF; } ')
GM_addStyle('.theme-dark .lk-editor td p s.medicine { background-color: #4CC9F0; } ')
GM_addStyle('.theme-dark .lk-editor td p s.nature { background-color: #95d5b2; } ')
GM_addStyle('.theme-dark .lk-editor td p s.perception { background-color: #74c69d; } ')
GM_addStyle('.theme-dark .lk-editor td p s.performance { background-color: #52b788; } ')
GM_addStyle('.theme-dark .lk-editor td p s.persuasion { background-color: #40916c; } ')
GM_addStyle('.theme-dark .lk-editor td p s.religion { background-color: #e85d04; } ')
GM_addStyle('.theme-dark .lk-editor td p s.sleight-of-hand { background-color: #f48c06; } ')
GM_addStyle('.theme-dark .lk-editor td p s.stealth { background-color: #faa307; } ')
GM_addStyle('.theme-dark .lk-editor td p s.survival { background-color: #ffba08; } ')

const moreBacon = (container) => container[0].querySelectorAll('.theme-dark .lk-editor td p > s')

function addClass(el, value, styleName) {
    if (el.innerText === value) {
        console.log({ f: "addClass", el , iT: el.innerText, value})
        el.classList.add(styleName)

        return el
    }

    return 'NO-ADD-CLASS'
}

// ----
var lastClassState
function mutationCallback(mutationsList, classToWatch, classAddedCallback, classRemovedCallback) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            let currentClassState = mutation.target.classList.contains(classToWatch)
            if(lastClassState !== currentClassState) {
                lastClassState = currentClassState
                if(currentClassState) {
                    classAddedCallback(classToWatch)
                }
                else {
                    classRemovedCallback(classToWatch)
                }
            }
        }
    }
}

function workOnClassAdd(className) {
    console.debug({ m: "class is added", className })
}

function workOnClassRemoval(className) {
    console.debug({ m: "class is removed", className})
}

function findTarget(el, value, styleName) {
    if (el.innerText === value) {
        console.log({ f: "findTarget", el })

        return el
    }

    return 'NO-FIND-TARGET'
}

// ---
var calls = 0
var BreakException = {}
const bacon = (value, styleName, func, getContainer) => {
    console.log("checking paras", value, styleName, getContainer)
    var node = undefined
    try {
        moreBacon(getContainer()).forEach((v, i, e) => {
            var el = e[i]
            node = func(el, value, styleName)
            if (node !== 'NO-FIND-TARGET' && node !== 'NO-ADD-CLASS') {
                throw BreakException
            }
        })
    } catch (e) {
        if (e !== BreakException) throw e
    }

    if (node === undefined) {
        throw Error('bacon could function', func)
    } else if (node === 'NO-FIND-TARGET') {
        throw Error('bacon could not find elements', func)
    } else if (node === 'NO-ADD-CLASS') {
        throw Error('bacon could add class', func)
    } else {
        return node
    }
}

const getContainer = () => document.querySelectorAll('.pm-table-container')*/






/*if (el.innerText === 'Acrobatics') {
                el.classList.add('acrobatics')
                console.log({ el })
            }*/
        /*if (el.innerText === 'tofu') {
                el.classList.add('animal-handling')
                console.log({ el })
            } else if (el.innerText === 'Arcana') {
                el.classList.add('arcana')
            } else if (el.innerText === 'Athletics') {
                el.classList.add('athletics')
            } else if (el.innerText === 'Deception') {
                el.classList.add('deception')
            } else if (el.innerText === 'History') {
                el.classList.add('history')
            } else if (el.innerText === 'Insight') {
                el.classList.add('insight')
            } else if (el.innerText === 'Intimidation') {
                el.classList.add('intimidation')
            } else if (el.innerText === 'Investigation') {
                el.classList.add('investigation')
            } else if (el.innerText === 'Medicine') {
                el.classList.add('medicine')
            } else if (el.innerText === 'Nature') {
                el.classList.add('nature')
            } else if (el.innerText === 'Perception') {
                el.classList.add('perception')
            } else if (el.innerText === 'Performance') {
                el.classList.add('performance')
            } else if (el.innerText === 'Persuasion') {
                el.classList.add('persuasion')
            } else if (el.innerText === 'Religion') {
                el.classList.add('religion')
            } else if (el.innerText === 'Sleight of Hand') {
                el.classList.add('sleight-of-hand')
            } else if (el.innerText === 'Stealth') {
                el.classList.add('stealth')
                el.classList.add('survival')
            }
    })
}*/

// var baconDone = false
// prefent save page
(function() {
    'use strict'

    document.addEventListener("keydown", function(e) {
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            e.preventDefault()
        }
    }, false)

    /*window.addEventListener("load", e => {
//         window.setTimeout(() => bacon('Stealth', 'stealth'), 1500)

        window.setTimeout(() => {
            if (baconDone) return

            console.log('find target ...')
            var targetNode = bacon('Acrobatics', '', findTarget, getContainer)
            if (targetNode === undefined) {
                console.log('could not find "Acrobatics"')
            } else {
                lastClassState = targetNode.classList.contains('acrobatics')
                var observer = new MutationObserver(function(mutationsList) {
                    mutationCallback(mutationsList, 'acrobatics', workOnClassAdd, workOnClassRemoval)
                })
                observer.observe(targetNode, { attributes: true })

            }

            console.log('add class ...')
            bacon('Acrobatics', 'acrobatics', addClass, getContainer)
            bacon('Stealth', 'stealth', addClass, getContainer)

            baconDone = true
        }, 5000)
    }, false);*/
})()
