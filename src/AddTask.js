import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todoSlice';


const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
 
    const handleAddTodo = () => {
      dispatch(addTodo({ id: Math.random(), description, isDone: false }));
      setDescription('');
    };
 
    return (
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    );
  };
 
  export default AddTask;
 