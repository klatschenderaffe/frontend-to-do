import { useEffect, useState } from "react";
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const defaultTodos = [
//     { id: 1, text: 'Einkaufen gehen', isComplete: false },
//     { id: 2, text: 'Waschen', isComplete: false },
//     { id: 3, text: 'React lernen', isComplete: false },
//   ];

function TodoList() {

    useEffect(() => {
        // Hier werden die Daten vom Server geladen

        const zeit = 1000;
        if(zeit > 5000) {
            console.error("Netzwerkantwort dauert zu lange");
        }
        setTimeout(() => {
          
          setTodos([
            { id: 0, text: 'Learn React', isComplete: false },
            { id: 1, text: 'Learn Vue', isComplete: false },
            { id: 2, text: 'Learn Angular', isComplete: false },
          ]);
          
          setLoading(false);
          console.log("Todos erfolgreich geladen");
        }, zeit);
        // toast.success("Todos erfolgreich geladen 🚀!", {
        //     position: "bottom-left",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: false, 
        //     draggable: true,
        //     pauseOnHover: true,
        // })
      }, []);

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    function todoToggleDone(index) {
        const newTodos = todos.slice();
        newTodos[index].isComplete = !newTodos[index].isComplete;
        setTodos(newTodos);
        console.log("Aktuelle Todos nach der Änderung:", newTodos);
        toast.info(`${newTodos[index].text} wurde ${newTodos[index].isComplete ? 'erledigt' : 'wieder aufgenommen'}`);
    }

    function addTodo(todo) {

        if(!todo.text.trim()){
            console.warn("Versuch, ein leeres Todo hinzuzufügen");
            toast.warn("Leere Todos sind nicht erlaubt 🚫!")
            return;
        }

        const newId = todos.length;
        todo.id = newId;
        setTodos([...todos, todo]);
        console.log("Neues Todo hinzugefügt:", todo);
        console.log("Aktuelle Todos nach der Änderung:", [...todos, todo]);

    }

    function deleteTodo(index) {

        // Array mit Todos, das erste Element hat Index 0, letzte Element Index = Array.length
        if(index < 0 || index >= todos.length){
            console.error("Fehler: Ungültiger Index beim Löschen eines Todos")
            return;
        }
        const newTodos = todos.slice();
        newTodos.splice(index, 1);
        setTodos(newTodos);
        console.log("Todo erfolgreich gelöscht");
        toast.success("Todo erfolgreich gelöscht 🗑️")
    }

    function updateTodo(updatedTodo) {

        if(!updatedTodo.text.trim()){
            console.warn("Versuch, ein leeres Todo zu aktualisieren");
            toast.warn("Leere Todos können nicht aktualisiert werden 🚫!")
            return;
        }
        const newTodos = todos.map(todo => {
            if(todo.id === updatedTodo.id) {
                console.log("Aktualisiertes Todo:", updatedTodo);
                return updatedTodo;
            }
            return todo;
        });
        setTodos(newTodos);
        console.log("Aktuelle Todos nach Aktualisierung: ", newTodos);
    }

    return(
        <>        
        {loading ? <h1> Loading</h1> : (
            <div className="todo-list">

            <h2>Add new Todo</h2>

            <TodoInput addTodo={addTodo} />

            <h2>Todo List</h2>

            <div className="todos">
                {todos.map( (todo, index) =>(
                    <TodoItem
                    key={index}
                    todo={todo}
                    onToggleDone={ () => todoToggleDone(index)}
                    onDelete={() => deleteTodo(index)}
                    onUpdate={updateTodo}
                    />
                ))}
            </div>
            
        </div>
        )}
        </>
    )
}

export default TodoList;