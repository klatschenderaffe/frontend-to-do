import { useState } from 'react';

function TodoInput({ addTodo }) {

  const [text, setText] = useState('');

  function handleChange() {
    addTodo({
      text: text,
      isComplete: false
    });
    setText('');
  }


  return (
    <div className="todo-input">
      <input type="text" placeholder="Add a new todo" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleChange}>Add</button>
    </div>
  );
}

export default TodoInput;