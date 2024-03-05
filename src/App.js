
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Todolist from './TodoList';

function App() {
  return (
    <div>
      <Provider store={store}>
          <Todolist/>
      </Provider>
    </div>
  );
}

export default App;
