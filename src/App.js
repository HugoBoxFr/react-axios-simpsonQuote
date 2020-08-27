import React from 'react';
import axios from 'axios';
import './App.css';
import DisplaySimpson from './components/DisplaySimpson';

const sampleSimpson = {
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  quote: "Gah, stupid sexy Flanders!"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: sampleSimpson
    };

    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data[0]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.getSimpson}>Get Simpson</button>
        <DisplaySimpson simpson={this.state.simpson} />
      </div>
    );
  }
}

export default App;