import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './useReducerWitUseContext/components/ThemeContext';
import UseContext from './useReducerWitUseContext/useContext';
import AppUseReducer from './useReducerWitUseContext/appUseReducer';
import UseReducer from './useReducerWitUseContext/useReducer';
import styled from 'styled-components';

  const Button = styled.button`
    color: #aaa;  
    background-color: #ffff;
    border-radius: 10px
  `
//  Context

//  CompA => CompB => ComPC

//  Theme: Dark / Light

//  1 . Create context
//  2 . Provider
//  3 . Consumer

function App() {
  const context = useContext(ThemeContext);
  return (
    <div className='App'>
      <UseReducer />
      <AppUseReducer/>
      <Button onClick={context.toggleTheme}>Toggle them</Button>
      <UseContext />
    </div>
  );
}

export default App;
