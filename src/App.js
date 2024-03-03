import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
// import Counter from './components/Counter';
// import TodoList from './components/TodoList';
import Products from './components/Products';
import Header from './components/Header';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';

function App() {
    return (
      <Provider store={store}>
         <Router>
    <div>
      {/* <Counter/>
      <TodoList/> */}
      <Header/>
      <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
