import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
//import EventPractice from './EventPractice';
//import ValidationSample from './ValidationSample';
//import MyComponent from './MyComponent';


class App extends Component{

    render(){
        return(
            <div>
            <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
            <button onClick={() => this.ScrollBox.ScrollToBottom()} >
                맨 밑으로~
            </button>
            </div>
            //<ValidationSample/>
            //<EventPractice/>
            //<MyComponent name="React" age={5}/>
        );
    }
}

// function App() {
//     return (
//         <div>Hello</div>
//     );
// }
 
export default App;