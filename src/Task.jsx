import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './Context';

const Task = ({ id, taskName, completed }) => {
  const { removeTask, completedTask, openModal } = useGlobalContext();
  return (
    <Wrapper>
      <div className='tasklist'>
        <p className={`${completed ? 'title completed' : 'title'}`}>
          {taskName}
        </p>
        <div>
          <button className='edit' onClick={() => openModal(id)}>
            edit
          </button>
          <button className='done' onClick={() => completedTask(id)}>
            done
          </button>
          <button className='remove' onClick={() => removeTask(id)}>
            remove
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 85vw;
  max-width: 600px;
  background: white;
  margin: 1.5rem;
  padding: 1rem;
  letter-spacing: 0.25rem;
  transition: all 1s ease;

  :hover {
    box-shadow: 0px 1px 10px grey;
  }

  .tasklist {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-size: 1.2rem;
  }
  .completed {
    text-decoration: line-through;
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      font-size: 15px;
      letter-spacing: 2px;
      background: none;
      border: none;
    }
    .edit {
      color: blue;
    }
    .done {
      color: green;
    }
    .remove {
      color: red;
    }
  }
`;
export default Task;
