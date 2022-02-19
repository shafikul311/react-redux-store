import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'grey', textAlign: 'center'}}>Redux Store Creating...</h1>
      
      <Cart/>
      <Shop/>
      
    </div>
  );
}

export default App;
