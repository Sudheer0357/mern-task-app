import React from 'react';
import Form from './Form';
import Tasks from './Tasks';
import { useGlobalContext } from './Context';
import Modal from './Modal';

const App = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <main>
        <Form />
        <Tasks />
      </main>
      {state.isModalOpen && (
        <div className='modal'>
          <Modal />
        </div>
      )}
    </>
  );
};

export default App;
