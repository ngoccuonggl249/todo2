import React from 'react'
import WithTodoRedux  from '../../../store/WithTodoRedux'
import ViewModeButtonsView from './ViewModeButtons.view';

const ViewModeButtons = ({todo, setViewMode}) => {
  const showViewMode = (ViewMode) => {
    setViewMode(ViewMode)
  }

  return (
    <ViewModeButtonsView
      viewMode={todo.viewMode}
      showViewMode={showViewMode}
    />
  )
};

export default WithTodoRedux(ViewModeButtons)
