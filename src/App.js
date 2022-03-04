import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@mui/material';

function App() {
  const [todos, setTodos] = useState(['']);

  const [input, setInput] = useState('');
  // this fires off the event after click the button
  // console.log('🚀', input);

  const addTodo = (event) => {
    event.preventDefault();
    // console.log('It works');
    setTodos([...todos, input]);
    setInput(''); // clears input
  };

  return (
    <div className="App">
      <h1>TODOLISTAPP</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo✅</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button disabled={!input} onClick={addTodo} variant="contained">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
