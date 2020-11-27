import _ from 'lodash'

export const CREATE_TASK = 'CREATE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const SET_TASK_DONE = 'SET_TASK_DONE'
export const SET_VIEW_MODE = 'SET_VIEW_MODE'
export const TOGGLE_TASKS_STATUS = 'TOGGLE_TASKS_STATUS'


export const TASK_STATUS = {
  all: 'all',
  active: 'active',
  done: 'done',
}

/**
 * Get Created Tasks
 * @param _tasks {Array} task list
 * @param _content {String} task content
 * @returns {Array} task list after created
 */
export const getCreatedTasks = (_tasks, _content) => {
  let tasks = _tasks

  //Init task
  let initTask = {
    id: Date.now(),
    content: _content,
    status: TASK_STATUS.active,
  }

  // Add new task to array
  tasks.push(initTask);

  return tasks
}

/**
 * Get Removed Tasks
 * @param _tasks {Array} task list
 * @param _taskRemove {Object} task will remove
 * @returns {Array} task list after removed
 */
export const getRemovedTasks = (_tasks, _taskRemove) => {
  let tasks = _tasks

  // Remove task in array
  _.remove(tasks, task => task.id === _taskRemove.id)

  return tasks
}

/**
 * Get Toggled Tasks
 * @param _tasks {Array} task list
 * @param _toggleTasks {Array} task list will toggle status
 * @returns {Array} task list after toggled
 */
export const getToggledTasks = (_tasks, _toggleTasks = []) => _.map(_tasks, task => {
  // Check task exist at toggleTasks
  if (_.includes(_toggleTasks, task)) {
    // Toggle status
    task.status = (task.status === TASK_STATUS.active) ? TASK_STATUS.done : TASK_STATUS.active
  }

  return task
})
