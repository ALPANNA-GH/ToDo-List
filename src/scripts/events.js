import { Tasks } from './Tasks'
const toDoTask = new Tasks()

//  event listeners and handlers
export function addTaskEvent () {
  toDoTask.taskName.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      toDoTask.taskName.value = toDoTask.taskName.value.replace(/[^a-z0-9 _.-]/gi, '')
      toDoTask.taskName.value = toDoTask.taskName.value.trim()
      if (toDoTask.taskName.value.trim() !== '') {
        toDoTask.addTask()
      }
    }
  })
}

export function editTaskCompletedEvent () {
  const checkBoxes = document.querySelectorAll('.check')
  checkBoxes.forEach((el) => {
    const itemIndex = el.parentElement.id.replace('t', '')
    el.addEventListener('change', () => {
      toDoTask.editComplete(itemIndex, el.checked)
    })
  })
}

export function clearCompletedTasksEvent () {
  const clearCompletedTasks = document.querySelector('#clearCompleted')
  clearCompletedTasks.addEventListener('click', () => {
    toDoTask.removeTask()
  })
}
