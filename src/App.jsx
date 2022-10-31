import './App.css';
import LogoAfa from './img/afa.png';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';



function App() {

  return (
    <div className="App">

        <header className="App-header">    
          <img src={LogoAfa} alt="Logo AFA" className='LogoAfa'/>
        </header>

        <section className="App-section">       
          <ItemListContainer greet="NO EMPATEN"/>        
        </section>
    </div>
  );
}

export default App;
