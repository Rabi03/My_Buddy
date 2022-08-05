import React,{useState} from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Context from './context/rootContext';



function App() {
  const [state,setAppState]=useState(0);
  const [music,setMusic]=useState([]);
  const [news,setNews]=useState([]);
  const [search,setSearch]=useState([]);
  return (
    <Context.Provider value={{music,setMusic,news,setNews,search,setSearch,state,setAppState}}>
      <div className="App">
     <Homepage></Homepage>
    </div>
    </Context.Provider>
    
  );
}

export default App;
