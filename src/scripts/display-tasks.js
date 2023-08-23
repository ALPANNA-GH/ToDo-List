import { Tasks } from './Tasks'

export function displayTasks () {
  const tasks = new Tasks()
  tasks.taskList.forEach((task) => {
    const taskCard = document.createElement('div')
    taskCard.classList.add('task-card')
    const doneCheck = document.createElement('input')
    doneCheck.type = 'checkbox'
    doneCheck.classList.add('check')
    doneCheck.checked = task.done
    const descP = document.createElement('p')
    descP.classList.add('desc')
    descP.textContent = task.desc
    const indexP = document.createElement('p')
    indexP.classList.add('index')
    indexP.textContent = task.index
    taskCard.append(doneCheck, descP, indexP)
    document.querySelector('#taskList').appendChild(taskCard)
  })
}
