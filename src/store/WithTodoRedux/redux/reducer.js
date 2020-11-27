import _ from 'lodash'
import {
  TASK_STATUS,
  CREATE_TASK,
  REMOVE_TASK,
  SET_TASK_DONE,
  SET_VIEW_MODE,
  TOGGLE_TASKS_STATUS,
  getCreatedTasks,
  getRemovedTasks,
  getToggledTasks,
} from './const'

const initState = {
  tasks: [],
  viewMode: 'all',
}

export default function TodoReducer (state = initState, action) {
  let tasks = state.tasks

  switch (action.type) {
    case CREATE_TASK:
      return _.assign({}, state, {tasks: getCreatedTasks(tasks, action.payload)})

    case REMOVE_TASK:
      return _.assign({}, state, {tasks: getRemovedTasks(tasks, action.payload)})

    case SET_TASK_DONE:
      tasks.map(task => {
        if (task.id === action.payload.id) {
          task.status = TASK_STATUS.done
        }
        return task
      });
      return _.assign({}, state, {tasks: tasks})

    case SET_VIEW_MODE:
      return _.assign({}, state, {viewMode: action.payload})

    case TOGGLE_TASKS_STATUS:
      return _.assign({}, state, {tasks: getToggledTasks(tasks, action.payload)})

    default:
      return state
  }
}
