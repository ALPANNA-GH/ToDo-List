import { forEach } from 'lodash'
import { Tasks } from './Tasks'

export function displayTasks () {
  const tasks = new Tasks()
  tasks.taskList.forEach((task), () => alert(Task))
}
