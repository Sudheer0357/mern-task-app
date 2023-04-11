import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from 'react';
import { data } from './data';
import reducer from './reducer';
import {
  CLEAR_TASKS,
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  OPEN_MODAL,
} from './actions';

const AppContext = createContext(null);

const initialState = {
  tasks: data || [],
  isAlert: false,
  isLoading: false,
  isError: false,
  isModalOpen: false,
  singleTask: {},
};
const AppProvider = ({ children }) => {
  const [task, setTask] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);
  const [editTaskName, setEditTaskName] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id:
        state.tasks.length < 1 ? 1 : state.tasks[state.tasks.length - 1].id + 1,
      taskName: task,
      completed: false,
    };
    dispatch({ type: ADD_TASK, payload: newTask });
    setTask('');
  };

  const removeTask = (id) => {
    dispatch({ type: REMOVE_TASK, payload: id });
  };

  const openModal = (id) => {
    dispatch({ type: OPEN_MODAL, payload: id });
  };
  const editTask = (id, name) => {
    dispatch({ type: EDIT_TASK, payload: { id, name } });
  };

  const completedTask = (id) => {
    dispatch({ type: COMPLETED_TASK, payload: id });
  };

  const clearTasks = () => {
    dispatch({ type: CLEAR_TASKS });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        removeTask,
        editTask,
        completedTask,
        task,
        setTask,
        addTask,
        clearTasks,
        inputRef,
        setEditTaskName,
        editTaskName,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
