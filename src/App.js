import TodoList from "./TodoList";
import "./styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <main>
      <h1>ToDo List</h1>
      <TodoList />
      <ToastContainer />
    </main>
  );
}

export default App;