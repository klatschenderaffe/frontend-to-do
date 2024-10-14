function addTodo(todos, newTodo) {
    if (!newTodo.text.trim()) {
        return todos; // Rückgabe der alten Liste, wenn der Text leer ist
    }
    const newId = todos.length; // ID basierend auf der aktuellen Länge
    return [...todos, { ...newTodo, id: newId }];
}

function deleteTodo(todos, index) {
         // Array mit Todos, das erste Element hat Index 0, letzte Element Index = Array.length
         if(index < 0 || index >= todos.length){
            return todos;
        }
        const newTodos = todos.slice();
        newTodos.splice(index, 1);
        return newTodos;
}

function updateTodo(todos, updatedTodo) {

    if(!updatedTodo.text.trim()){
        return todos;
    }
    return todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
}

module.exports = { addTodo, deleteTodo, updateTodo };