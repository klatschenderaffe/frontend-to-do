import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ todo, onToggleDone, onDelete, onUpdate }) {
  
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const todoStrikeClass = todo.isComplete ? 'todo-strikethrough' : '';
  const updateButtonText = isEditing ? 'Save' : 'Update';

  function handleUpdate() {
    if(isEditing) {
      setIsEditing(false);

      const updatedTodo = {
        ...todo,
        text: updatedText
      };

      onUpdate(updatedTodo);
    } else {
      setIsEditing(true);
    }
  }

  return (
    <div className="todo">
      <label className="custom-checkbox-container">
        <input 
          type="checkbox" 
          checked={todo.isComplete} 
          onChange={() => onToggleDone(todo.id)}
        />
        <span className="custom-checkbox"></span>
      </label>
      
      {isEditing ? (
        <input 
          type="text" 
          value={updatedText} 
          onChange={(e) => setUpdatedText(e.target.value)} 
        />
      ) : (
        <span className={todoStrikeClass}>{todo.text}</span>
      )}

      <div className="todo-btns">
        <button onClick={handleUpdate}>{updateButtonText}</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem;