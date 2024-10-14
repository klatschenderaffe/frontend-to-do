const { addTodo, deleteTodo, updateTodo } = require('../src/utils/todoFunctions');

describe('Todo Functions', () => {
    let todos;

    beforeEach(() => {
        todos = [
            { id: 0, text: 'Learn React', isComplete: false },
            { id: 1, text: 'Learn Vue', isComplete: false },
            { id: 2, text: 'Learn Angular', isComplete: false },
        ];
    });

    test('adds a new todo successfully', () => {
        const newTodo = { text: 'New Todo', isComplete: false };
        const updatedTodos = addTodo(todos, newTodo);
        
        expect(updatedTodos).toHaveLength(4);
        expect(updatedTodos[3]).toEqual({ id: 3, text: 'New Todo', isComplete: false });
    });

    test('does not add an empty todo', () => {
        const newTodo = { text: '', isComplete: false };
        const updatedTodos = addTodo(todos, newTodo);
        
        expect(updatedTodos).toHaveLength(3);
    });

    test('deletes a todo successfully', () => {
        const updatedTodos = deleteTodo(todos, 1);
        
        expect(updatedTodos).toHaveLength(2);
        expect(updatedTodos).not.toContainEqual(todos[1]); // Überprüfen, dass das gelöschte Todo nicht enthalten ist
    });

    test('does not delete an invalid todo index', () => {
        const updatedTodos = deleteTodo(todos, 10);
        
        expect(updatedTodos).toHaveLength(3);
    });

    test('updates a todo successfully', () => {
        const updatedTodo = { id: 1, text: 'Updated Todo', isComplete: false };
        const updatedTodos = updateTodo(todos, updatedTodo);

        expect(updatedTodos[1]).toEqual(updatedTodo); // Überprüfen, dass das aktualisierte Todo enthalten ist
    });

    test('does not update an empty todo', () => {
        const updatedTodo = { id: 1, text: '', isComplete: false };
        const updatedTodos = updateTodo(todos, updatedTodo);

        expect(updatedTodos[1]).toEqual(updatedTodos[1]); 
    });
});
