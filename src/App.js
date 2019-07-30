import React, { Component } from "react";
import Header from "./Header";
import { Cards } from "./styles";
import GlobalStyle from "./globalStyles";

const returnDictionaries = (response) => response.items;

class App extends Component {

  state = {
    words: []
  }

  componentDidMount() {
    this.fetchWords()
  }

  fetchWords() {
    fetch('./dictionary.json')
    .then(res => res.json())
    .then(returnDictionaries)
    .then(words => this.setState({ words }));
  }

  render() {

    return (
      <>
        <GlobalStyle />
        <Header />
        <Cards>
        { this.state.words.map((word, key) => (
          <div key={key}>
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
