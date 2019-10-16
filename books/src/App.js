import React,{Component} from 'react';
import './App.css';
// import Car from './components/car.js'
import PageRouter from './components/pageRouter'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:''
    };
  }

   callAPI(){
     fetch("http://localhost:9000/member")
     .then(res => res.text())
     .then(res =>  this.setState({apiResponse:res}))
     .catch(err => err);
   }

   componentDidMount(){
     this.callAPI();
   }

   render(){
     return(
        <div>
          <PageRouter/>
          {/* <Car year= "2012"/> */}
          {/* <p className="App-intro">;{this.state.apiResponse}</p> */}
        </div>
     );
   }
}

export default App;