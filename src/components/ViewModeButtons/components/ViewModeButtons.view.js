import React from 'react'
import Button  from '../../../vendor/Button'
import { TASK_STATUS } from '../../../store/WithTodoRedux/redux/const'
import style from '../assets/ViewModeButtons.module.scss'

const ViewModeButtonsView = ({ viewMode, showViewMode }) => {
  return (
    <React.Fragment>
      <div className={style.buttonFooter__container}>

        {/*Button All*/}
        <Button
          className={style.buttonFooter__item}
          onClick={showViewMode}
          currentActive={viewMode}
          active={TASK_STATUS.all}
        >All</Button>
        {/*Button All - END*/}

        {/*Button Active*/}
        <Button
          className={style.buttonFooter__item}
          onClick={showViewMode}
          currentActive={viewMode}
          active={TASK_STATUS.active}
        >Active</Button>
        {/*Button Active - END*/}

        {/*Button Done*/}
        <Button
          className={style.buttonFooter__item}
          onClick={showViewMode}
          currentActive={viewMode}
          active={TASK_STATUS.done}
        >Done</Button>
        {/*Button Done - END*/}

      </div>
    </React.Fragment>
  )
};

export default ViewModeButtonsView
