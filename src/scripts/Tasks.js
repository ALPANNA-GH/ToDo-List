export class Tasks {
  constructor () {
    this.getLocalStorage()
    this.taskName = document.querySelector('#taskName')
    // { index: 1, description: 'task1', completed: false },
    // { index: 2, description: 'task2', completed: false },
    // { index: 3, description: 'task3', completed: false },
    // { index: 4, description: 'task4', completed: false },
    // { index: 5, description: 'task5', completed: false },
    // { index: 6, description: 'task7', completed: true }
  }

  addTask () {
    const taskMaxId = Math.max(...this.taskList.map((task) => task.id), 0)
    const newTask = {
      index: taskMaxId + 1,
      description: this.taskName.textContent,
      completed: false
    }
    this.taskList.push(newTask)
    this.setLocalStorage()
  }

  removeTask (task) {
    alert('task')
  }

  editTask (task) {
    alert('task')
  }

  reOrderTask (task) {
    alert('task')
  }

  getLocalStorage () {
    this.taskList = JSON.parse(localStorage.getItem('taskList')) || []
  }

  setLocalStorage () {
    localStorage.setItem('taskList', JSON.stringify(this.taskList))
  }
}
