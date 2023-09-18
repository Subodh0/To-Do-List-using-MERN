import './App.css';
import Hearder from './components/header';
import ToDoForm from './components/todoForm';
import Todos from './components/TODOS';

function App() {
  return (
    <div>
      <Hearder /> 
      <ToDoForm />
      <Todos />
    </div>
  );
}

export default App;
