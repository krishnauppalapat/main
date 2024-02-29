import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
// import Counter from './components/Counter';
// import TodoList from './components/TodoList';
import Products from './components/Products';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <Provider store={store}>
    <div>
      {/* <Counter/>
      <TodoList/> */}
      <Header/>
      <Products/>
    </div>
    </Provider>
  );
}

export default App;
