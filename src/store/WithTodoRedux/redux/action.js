import {
  CREATE_TASK,
  REMOVE_TASK,
  SET_TASK_DONE,
  SET_VIEW_MODE,
  TOGGLE_TASKS_STATUS,
} from './const'

/**
 * Add new task
 * @param _content {String} Content of task
 * @returns {Function}
 */
export const createTask = (_content) => {
  return dispatch => {
    dispatch({
      type: CREATE_TASK,
      payload: _content,
    })
  }
}

/**
 * Remove Task
 * @param _task {object}
 * @returns {Function}
 */
export const removeTask = (_task) => {
  return dispatch => {
    dispatch({
      type: REMOVE_TASK,
      payload: _task,
    })
  }
}

/**
 * Set task status to done
 * @param _task {object}
 * @returns {Function}
 */
export const setTaskDone = (_task) => {
  return dispatch => {
    dispatch({
      type: SET_TASK_DONE,
      payload: _task,
    })
  }
}

/**
 * Set View Mode
 * @param _mode {string} : key value of TASK_STATUS
 * @returns {Function}
 */
export const setViewMode = (_mode) => {
  return dispatch => {
    dispatch({
      type: SET_VIEW_MODE,
      payload: _mode,
    })
  }
}


/**
 * Toggle task status : active <=> done
 * @param _tasks {array}
 * @returns {Function}
 */
export const toggleTasks = (_tasks) => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TASKS_STATUS,
      payload: _tasks,
    })
  }
}

