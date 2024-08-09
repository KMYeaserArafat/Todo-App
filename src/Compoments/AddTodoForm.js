import React, { useState } from 'react';
import './AddTodoForm.css';
import Card from './Card';

const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [todos, setTodos] = useState([]); 

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const noteTextHandler = (e) => {
    setNote(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title, note };
    setTodos([...todos, newTodo]);
    resetHandler();
  };

  const resetHandler = () => {
    setTitle('');
    setNote(''); 
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <form id='AddTodoForm' onSubmit={addHandler}>
        <div id='titleField'>
          <label id="todoTitle">Todo Title : </label><br />
          <input type='text' id='todoInputField' value={title} onChange={titleHandler} required />
        </div>
        <div id='todoTextField'>
          <label id='noteTitle'>Note : </label><br />
          <textarea id='todoTextArea' value={note} onChange={noteTextHandler} required></textarea>
        </div>
        <div id='todoBtn'>
          <button id='btnAdd'>Add</button>
          <button type="button" id='btnReset' onClick={resetHandler}>Reset</button>
        </div>
      </form>

      <div id='cardBody'>
      {todos.map((todo) => (
        <Card 
          key={todo.id} 
          title={todo.title} 
          note={todo.note} 
          onDelete={() => deleteHandler(todo.id)}
        />
      ))}
      </div>

    </div>
  );
};

export default AddTodoForm;
