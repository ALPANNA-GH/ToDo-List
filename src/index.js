// import _ from 'lodash'
import './style.css'
// import { Tasks } from './scripts/Tasks'
import { displayTasks } from './scripts/display-tasks'
// import * as events from './scripts/events'

// const tasks = new Tasks()
displayTasks()

// const toDoTask = new Tasks()
// toDoTask.taskName.addEventListener('keydown', (e) => {
//   if (e.keyCode === 13) {
//     toDoTask.taskName.value = toDoTask.taskName.value.replace(/[^a-z0-9 _.-]/gi, '')
//     toDoTask.taskName.value = toDoTask.taskName.value.trim()
//     if (toDoTask.taskName.value.trim() !== '') {
//       toDoTask.addTask()
//       displayTasks()
//     }
//   }
// })

// const checkBoxes = document.querySelectorAll('.check')
// checkBoxes.forEach((el) => {
//   const itemIndex = el.parentElement.id.replace('t', '')
//   el.addEventListener('change', () => {
//     toDoTask.editComplete(itemIndex, el.checked)
//   })
// })

// const clearCompletedTasks = document.querySelector('#clearCompleted')
// clearCompletedTasks.addEventListener('click', () => {
//   toDoTask.removeTask()
//   displayTasks()
// })
