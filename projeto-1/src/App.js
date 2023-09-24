import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/* <p onClick={() => console.log('P clicado')}> evento sintético 
Em uma arrow function não tem this, não havendo nessecidade de bind
ex: this.handleClick = this.handleClick.bind(this) // não precisa
*/

class App extends Component {
  state = {
    name: 'Evangelista Franco',
    counter: 0,
  };

  handlePClick = () => {
    this.setState({ name: 'Jessica Alba' });
  };
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state; //destructuring
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
