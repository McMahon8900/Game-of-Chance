import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
//import { render } from 'react-dom';


// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={apiResponse:""};
//   }

//   callAPI(){
//     fetch("http://localhost:9000/testAPI")
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}));
//   }

//   componentWillMount(){
//     this.callAPI();
//   }
// }

// render()
//   return (
//     <div className="App">
//       <header className="App-header">
//         </header>
//         <p>{this.state.apiResponse}</p>
//     </div>
//   );





//function that returns div with Home Page
//const App = () => <div>Hellow World</div>
const App = () => 
<div className="ui container">
  <Route path="/" exact component={HomePage} />
  <Route path="/login" exact component={LoginPage} />
</div>



export default App;
