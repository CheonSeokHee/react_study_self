// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React start
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Device from './Device';
 
function App() {
    return (
         <div >
          HELLO
          { <input name='myName'></input> }
        <br></br>
        <Device mydevice='1' myfavoritecolor='red' mynum={1}/>
        <Device mydevice='2' myfavoritecolor='orange' mynum={2}/>
        <Device mydevice='3' myfavoritecolor='yellow' mynum={3}/>
        <Device mydevice='4' myfavoritecolor='green' mynum={4}/>
        <Device mydevice='5' myfavoritecolor='blue' mynum={5}/>
        </div>
    );
}
 
export default App;
