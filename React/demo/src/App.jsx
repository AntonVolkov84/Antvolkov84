import React, {Component} from 'react';


// class App extends Component {
// state = {
//       count: 0,
//       isCounting: false
//     };


// componentDidMount(){
//   const userCount = localStorage.getItem('timer');
//   if (userCount) {
//     this.setState({count: +userCount});
//   }
// }
// componentDidUpdate(){
//   localStorage.setItem('timer', this.state.count);
// }
// componentWillUnmount(){
//   clearInterval(this.counterId);

// }
// handleReset = () => {
//    this.setState({isCounting: false, count: 0});
//    clearInterval(this.counterId);
// }

// handleStart = () =>{
//   this.setState({isCounting: true})
//   this.counterId = setInterval(() => {
//     this.setState({count: this.state.count + 1 });
//   }, 1000);
// }
// handleStop = () => {
//   this.setState({isCounting: false})
//   clearInterval(this.counterId);
// }
//   render(){
//     return (
//       <div className="App">
//         <h1>React counter</h1>
//         <h3>{this.state.count}</h3>
//         {!this.state.isCounting ? (<button onClick={this.handleStart}>Start</button>
//           ) : (
//           <button onClick={this.handleStop}>Stop</button>)}
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     )
//   }
// }

import{Posts} from './components/posts';
class App extends Component{
  state = {
    posts:[
      {id: 'abc1', name: 'JS Basic'},
      {id: 'abc2', name: 'JS Advanced'},
      {id: 'abc3', name: 'React'},
    ]
  };
  


render(){
  return(
    <div className="App">
       <Posts posts={post} />
    </div>
    )
}
}
export default App;
