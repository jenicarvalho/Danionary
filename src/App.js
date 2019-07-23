import React, { Component } from "react";
import Header from "./Header";
import { Cards } from "./styles";
import GlobalStyle from "./globalStyles";

class App extends Component {

  state = {
    words: []
  }

  componentDidMount() {
    this.fetchWords()
  }

  fetchWords() {
    fetch('http://localhost:3005/items')
    .then(res => res.json())
    .then(data => this.setState({words: data}));
  }

  render() {

    return (
      <>
        <GlobalStyle />
        <Header />
        <Cards>
        { this.state.words.map(word => (

          <div>
            <h2>{word.name}</h2>
            <p>
              <strong>Definição:</strong> {word.definition}
            </p>
            <p>
              <strong>Sinônimos:</strong> {word.synonyms}
            </p>
          </div>
        ))}
        </Cards>
      </>
    );
  }
}

export default App;
