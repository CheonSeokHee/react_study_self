import {useRef, userCallback, useState} from 'react';


const App = () => {

  const nextId = useRef(1);
  const[form, setForm] = useState({name:'', usename: ''});
  const[data, setData] = useState({

    array:[],
    uselessValue: null

  });

 const onChange = userCallback(

    e => {

      const {name, value} = e.target;
      setForm({

        ...form, 
        


      })
    }

 )


}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
