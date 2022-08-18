import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';

// useReducer
// 1. Init state
const Flex = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: column;
`;
const Tilte = styled.h1`
    border-bottom: 1px solid #aaa;
`;
const initState = {
  job: '',
  jobs: [],
};

// 2. Actions

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELE_JOB = 'dele_job';

// 3. Reducer
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleJob = (payload) => {
  return {
    type: DELE_JOB,
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);

      return {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error('Invalid action.');
  }
};

// 4. Dispatch

function AppUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));

    inputRef.current.focus();
  };

  return (
    <Flex >
      <Tilte>Demo app TodoList </Tilte>
      <div>
        <input
          ref={inputRef}
          value={job}
          placeholder='Enter todo...'
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(deleJob(index))}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    </Flex>
  );
}

export default AppUseReducer;
