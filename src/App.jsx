// import logo from './logo.svg';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
// import LogoAfa from './img/afa.png';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">    
          {/* <Link to="/"><img src={LogoAfa} alt="Logo AFA" className='LogoAfa'/></Link> */}
          <NavBar/>  
      </header>

      <section className="App-section">
        <Routes>
          <Route path="/" element={<ItemListContainer greet="QUIZ DE LA SCALONETA"/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greet="SELCCIONA TU RESPUESTA"/>} />
        </Routes>
      </section>

      <footer className="App-footer">
        <p>Acá va el footer </p>
      </footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
