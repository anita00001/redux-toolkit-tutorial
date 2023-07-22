import NavBar from './NavBar';
import CartContainer from './CartContainer';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <NavBar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
