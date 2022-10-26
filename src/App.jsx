// import logo from './logo.svg';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
// import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import LogoAfa from './img/afa.png';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';
import CartProvider from './context/Context';


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <header className="App-header">    
            <img src={LogoAfa} alt="Logo AFA" className='LogoAfa'/>
            
            {/* <NavBar/>   */}
        </header>
  {/* INTENTAR UTILIZAR CATEGORIAS CON ITEMDETAILCONTAINER, PARA QUE APRETANDO NIVELES DE DIFICULTAD DEL NAVBAR, NAVEGUE AL ITEMDETAIL CON SUS 5 PREGUNTAS CORRESPONDIENTES */}
        <section className="App-section">
          <Routes>
            <Route path="/" element={<ItemListContainer greet="QUIZ DE LA SCALONETA"/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer greet="SELCCIONA TU RESPUESTA"/>} />
            {/* <Route path="/detail/:categoryId" element={<ItemDetailContainer greet="SELCCIONA TU RESPUEsSTA"/>} /> */}
          </Routes>
        </section>

        <footer className="App-footer">
          <p>Acá va el footer </p>
        </footer>
        </BrowserRouter>
      </CartProvider>
      
      
    </div>
  );
}

export default App;
