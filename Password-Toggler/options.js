/*
 * Copyright (C) 2025 ProgrammerNomad.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301  USA
 */

const KEY_ENTER = 13
let selectBehave, inputWait

function setLocalText (name) {
  document.getElementById(name).innerHTML = chrome.i18n.getMessage(name)
}

function setDocumentDirection () {
  // Get the UI language and set text direction for RTL languages
  const uiLanguage = chrome.i18n.getUILanguage()
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'] // Arabic, Hebrew, Persian, Urdu
  
  // Check if current language is RTL
  const isRTL = rtlLanguages.some(lang => uiLanguage.startsWith(lang))
  
  if (isRTL) {
    document.documentElement.setAttribute('dir', 'rtl')
    document.body.style.direction = 'rtl'
  } else {
    document.documentElement.setAttribute('dir', 'ltr')
    document.body.style.direction = 'ltr'
  }
  
  // Set the lang attribute
  document.documentElement.setAttribute('lang', uiLanguage)
}

function localization () {
  const localTexts = ['optionTitle', 'labelWhen', 'optMouseOver', 'optDblClick', 'optFocus', 'optCtrl', 'labelWait', 'labelPreview']
  localTexts.forEach(setLocalText)
  setDocumentDirection()
}

function loadSetting () {
  chrome.storage.sync.get(data => {
    if ('behave' in data) {
      selectBehave.selectedIndex = data.behave
      inputWait.value = data.wait
      toggleWaitVisibility()
    }
  })
}

function toggleWaitVisibility () {
  const divWait = document.getElementById('divWait')
  // Show wait input only for mouse-over mode (index 0)
  if (selectBehave.selectedIndex === 0) {
    divWait.style.display = 'flex'
  } else {
    divWait.style.display = 'none'
  }
}

function saveSetting () {
  chrome.storage.sync.set({
    behave: selectBehave.selectedIndex,
    wait: inputWait.value
  })
  
  // Show save confirmation
  const statusIndicator = document.querySelector('.status-indicator')
  if (statusIndicator) {
    statusIndicator.style.background = '#4caf50'
    statusIndicator.textContent = 'Settings Saved!'
    setTimeout(() => {
      statusIndicator.textContent = 'Settings Auto-Saved'
    }, 2000)
  }
  
  toggleWaitVisibility()
}

document.addEventListener('DOMContentLoaded', () => {
  selectBehave = document.getElementById('selectBehave')
  inputWait = document.getElementById('inputWait')

  selectBehave.addEventListener('change', () => {
    saveSetting()
    // No need to reload, just update UI
  }, false)
  
  inputWait.addEventListener('blur', saveSetting, false)
  
  inputWait.addEventListener('keypress', e => {
    if (e.keyCode === KEY_ENTER || e.key === 'Enter') {
      saveSetting()
      inputWait.blur()
    }
  }, false)

  document.getElementById('passwordTest').addEventListener('keydown', e => {
    if (e.keyCode === KEY_ENTER) {
      if (document.getElementById('passwordTest').value.toLowerCase() === 'taiwan') {
        window.location = 'http://en.wikipedia.org/wiki/Taiwan'
      }
    }
  }, false)

  localization()
  loadSetting()
}, false)
