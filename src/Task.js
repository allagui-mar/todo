import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from './features/todoSlice';

const Task = ({ task }) => {
 const [isEditing, setIsEditing] = useState(false);
 const [description, setDescription] = useState(task.description);
 const dispatch = useDispatch();

 const handleToggle = () => {
   dispatch(toggleTodo(task.id));
 };

 const handleEdit = () => {
   dispatch(editTodo({ id: task.id, description }));
   setIsEditing(false);
 };

 return (
   <div>
     {isEditing ? (
       <input
         type="text"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
       />
     ) : (
       <span onClick={() => setIsEditing(true)}>{task.description}</span>
     )}
     <button onClick={handleToggle}>{task.isDone ? 'Undone' : 'Done'}</button>
     <button onClick={handleEdit}>Edit</button>
   </div>
 );
};

export default Task;
