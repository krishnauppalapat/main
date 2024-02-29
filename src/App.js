import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
function App() {
    return (
      <Provider store={store}>
    <div>
      <h1>Welcome to Redux</h1>
      <Counter/>
      <TodoList/>
    </div>
    </Provider>
  );
}

export default App;
