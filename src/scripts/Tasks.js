export class Tasks {
  constructor () {
    this.taskList = [
      { index: 1, description: 'task1', completed: false },
      { index: 2, description: 'task2', completed: false },
      { index: 3, description: 'task3', completed: false },
      { index: 4, description: 'task4', completed: false },
      { index: 5, description: 'task5', completed: false },
      { index: 6, description: 'task7', completed: true }
    ]
  }

  addTask (task) {
    alert('task')
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
}
