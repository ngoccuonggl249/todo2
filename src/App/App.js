import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import ViewModeButtons from '../components/ViewModeButtons'
import { useTheme } from '../theme/ThemeContext'
import styled from '@emotion/styled';
import style from './assets/App.module.scss'
import Button from '../vendor/Button'

const {store, persistor} = configureStore()
const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  min-width: 100vw;
  min-height: 100vh;
  * {
    color: ${props => props.theme.text};
  }
`;

function App() {
  const themeState = useTheme();

  return (
    <Wrapper>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className={style.app__container}>
            <TodoInput />
            <TodoList />
            <ViewModeButtons />
            <Button onClick={() => themeState.toggle()}>
              {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
          </div>
        </PersistGate>
      </Provider>
    </Wrapper>
  );
}

export default App;
