import './App.css';
import LogoAfa from './img/afa.png';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';



function App() {

  return (
    <div className="App" id='grilla'>

        <header className="App-header">    
          <img src={LogoAfa} alt="Logo AFA" className='LogoAfa'/>
        </header>

        <section className="App-section">       
          <ItemListContainer greet="QUIZ DE LA SCALONETA"/>        
        </section>

        {/* <footer className="App-footer">
          <p>Acá va el footer </p>
        </footer> */}
        
      
    </div>
  );
}

export default App;
