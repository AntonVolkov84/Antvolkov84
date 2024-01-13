import React, {Component} from 'react';
import {Posts} from './components/Posts';

class App extends Component {
 constructor(){
    super();
    this.state = { 
    posts: [
      {id: 'abc1', name: 'Volkov Anton'},
      {id: 'abc2', name: 'Kitaev Tima'},
      {id: 'abc3', name: 'Sinko Yevgen'},
    ],}
  };
  handleSomething = (event) =>{
    this.setState(this.state.posts.find(post => ((post.id == event.target.id) ? (post.name = 'Roman Rodomanov') : console.log('null'))))
   }
   handleDel = (id) => {
    // const l = this.state.posts.filter(post => (post.id !== event.target.closest('h2').id))
    // this.setState({posts: l}) 
    const l = this.state.posts.filter(post => (post.id !== id))
    this.setState({posts: l})
  }
   
  render(){
  return (
      <div className="App">
        <Posts posts={this.state.posts} cb={this.handleSomething} hd={this.handleDel}/>
      </div>
    );
  }
}  
  
export default App;
