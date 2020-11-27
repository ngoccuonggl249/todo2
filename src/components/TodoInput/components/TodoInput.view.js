import React from 'react'
import styled from '@emotion/styled';

import style from '../assets/TodoInput.module.scss'

const Wrapper = styled("div")`
  input {
    color: ${props => props.theme.text};
    background: ${props => props.theme.inputBackground};
  }
`;

const TodoInputView = ({ taskContent, handleChangeInput, handleKeyPressed }) => {
  return (
    <Wrapper>
      <div className={style.todoInput__container}>
        <input
          className={style.todoInput__input}
          placeholder='Enter todo name here'
          value={taskContent}
          onChange={handleChangeInput}
          onKeyPress={handleKeyPressed}
        />
      </div>
    </Wrapper>
  )
};

export default TodoInputView
