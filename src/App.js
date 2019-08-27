import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const [advice, setAdvice] = useState('');

  useEffect(()=>{
    async function getAdvice(){
      if(advice !== "") return;
      const respuesta =  await fetch('https://api.adviceslip.com/advice')
      const data = await respuesta.json();
  
  
      setAdvice(data.slip.advice)
      
      
    }
    getAdvice();
  }, [advice])

  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="React logo"/>
        <h3>React Advices</h3>
      </div>
      <div className="App">
        <div className="adviceContainer">
          <p className="advice">{advice}</p>
        </div>
      </div>
      <footer>
        <p>Daniel Pat &copy; / Adivices by <a href="https://api.adviceslip.com/">Advice Slip JSON API</a></p>
      </footer>
    </>
  );
}

export default App;
