import React, { useState, useEffect } from 'react'
import WithTodoRedux  from '../../../store/WithTodoRedux'
import { TASK_STATUS } from '../../../store/WithTodoRedux/redux/const'
import _ from 'lodash'

// View
import TodoListView from './TodoList.View'

const TodoList = ({todo, removeTask, setTaskDone, toggleTasks}) => {
  const [displayTasks, setDisplayTasks] = useState([])

  // Effect when redux change
  useEffect(() => {
    if (todo.viewMode !== TASK_STATUS.all) {
      // Filter task status = viewMode
      const tasksFiltered = _.filter(todo.tasks, task => task.status === todo.viewMode)
      setDisplayTasks(tasksFiltered)
    } else {
      // Show all tasks
      setDisplayTasks(todo.tasks)
    }
  }, [todo])


  // Toggle task status in display
  const toggleDisplayTasks = () => {
    toggleTasks(displayTasks)
  }

  return (
    <TodoListView
      displayTasks={displayTasks}
      removeTask={removeTask}
      setTaskDone={setTaskDone}
      toggleDisplayTasks={toggleDisplayTasks}
    />
  )
};

export default WithTodoRedux(TodoList)
