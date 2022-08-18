import React, { useReducer } from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: column;
`;
const Tilte = styled.h1`
    border-bottom: 1px solid #aaa;
`
const initState = 0;

const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action');
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <Flex>
      <Tilte > Demo UseReducer </Tilte>
      <h2>Number: {count}</h2>
      <div>
        <button
          onClick={() => {
            dispatch(UP_ACTION);
          }}>
          UP
        </button>
        <button
          onClick={() => {
            dispatch(DOWN_ACTION);
          }}>
          DOWN
        </button>
      </div>
    </Flex>
  );
}

export default UseReducer;
