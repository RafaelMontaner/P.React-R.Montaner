import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer greeting="¡Hola Coder, Bienvenido a PC World!"/>
    </div>
  );
}


export default App;
