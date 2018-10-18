'use strict'

const path = require('path')
const { app } = require('electron')

const Window = require('./Window')
const DataStore = require('./DataStore')

require('electron-reload')(__dirname)

const todosData = new DataStore({ name: 'Todos Main' })

function main () {
  let mainWindow = new Window({
    file: path.join('renderer', 'index.html')
  })

  todosData
    .addTodo('create todo app')
    .addTodo('another todo')
    .addTodo('one more todo')
    .deleteTodo('another todo')

  console.log(todosData.todos)
  // [ 'create todo app', 'one more todo' ]

  // let addTodoWin = new Window({
  //   file: 'add.html',
  //   width: 400,
  //   height: 400,
  //   // close with the main window
  //   parent: mainWindow
  // })
}

app.on('ready', main)

app.on('window-all-closed', function () {
  app.quit()
})
