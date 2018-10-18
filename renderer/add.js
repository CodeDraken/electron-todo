'use strict'

const { ipcRenderer } = require('electron')

document.getElementById('todoForm').addEventListener('submit', (evt) => {
  // prevent default refresh functionality of forms
  evt.preventDefault()

  // input on the form
  const input = evt.target[0]

  // send todo to main process
  ipcRenderer.send('add-todo', input.value)

  // reset input
  input.value = ''
})
