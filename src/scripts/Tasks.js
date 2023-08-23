export class Tasks {
  constructor () {
    this.taskList = [
      { index: 1, desc: 'task1', done: false },
      { index: 2, desc: 'task2', done: false },
      { index: 3, desc: 'task3', done: false },
      { index: 4, desc: 'task4', done: false },
      { index: 5, desc: 'task5', done: false },
      { index: 6, desc: 'task7', done: true }

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
