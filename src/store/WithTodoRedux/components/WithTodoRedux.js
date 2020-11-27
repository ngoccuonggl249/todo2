import React from 'react'
import { connect } from "react-redux"
import {
  createTask,
  removeTask,
  setTaskDone,
  setViewMode,
  toggleTasks,
} from '../redux/action'

const withTodoRedux = (WrappedComponent) => {
  class HOC extends React.Component {

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }

  // Map redux
  const mapPropToState = (state) => ({
    todo: state.todo,
  })

  const mapDispatchToProps = {
    createTask,
    removeTask,
    setTaskDone,
    setViewMode,
    toggleTasks,
  }

  return connect(mapPropToState, mapDispatchToProps)(HOC);
}

export default withTodoRedux
