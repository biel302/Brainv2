import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      time: 0,
      themes: [],
      countTheme: 0,
      nextPage: false,
      words: [],
      isActive: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incCountTheme = this.incCountTheme.bind(this);
    this.decCountTheme = this.decCountTheme.bind(this);
    this.exitTheme = this.exitTheme.bind(this);
    this.wordsInput = this.wordsInput.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value =
      target.name === "themes" ? target.value.trim().split(",") : target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const list = [];

    for (let i = 0; i < this.state.themes.length; i++) {
      list.push([]);
    }
    console.log(list);
    
    if (this.state.time === 0 || this.state.title === '' || this.state.description === '' || this.state.themes.length === 0) {
      alert('Todos os campos são obrigatórios!');
    } else {
      this.setState({
        nextPage: true,
        words: list
      });
    }
    console.log(this.state.words);    
  }

  incCountTheme() {
    this.setState({
      countTheme: this.state.countTheme + 1
    });
    this.render();
  }

  decCountTheme() {
    this.setState({
      countTheme: this.state.countTheme - 1
    });
    this.render();
  }

  exitTheme() {
    this.setState({
      title: "",
      description: "",
      time: 0,
      themes: [],
      countTheme: 0,
      nextPage: false,
      isActive: true
    });
  }

  wordsInput(event) {
    event.preventDefault();
    const lst = this.state.words
    lst[this.state.countTheme].push(this.wordValue.value);
    console.log(lst);
    console.log(this.wordValue.value);
    console.log(this.state.words);
    this.setState({
      words: lst
    });
    console.log(this.state.words);
  }

  formRender() {
    return (
      <form>
        <label>
          Title*:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Description*:
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Time (in seconds)*:
          <input
            name="time"
            type="number"
            value={this.state.time}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Themes*:
          <input
            name="themes"
            type="text"
            value={this.state.themes}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button className="square" onClick={this.handleSubmit}>
          Enviar
        </button>
      </form>
    );
  }

  pageRender() {
    return ( 
    <div>
       {(this.state.countTheme > 0) ?
        <button
          type="button"
          onClick={this.decCountTheme}
        >
          Back
        </button> : ""
        }

      <h1>{this.state.themes[this.state.countTheme]}</h1>    

      { (this.state.countTheme === this.state.themes.length - 1) ?
        <button
          type="button"
          onClick={this.exitTheme}
        >
          Exit
        </button> :
        <button
                type="button"
                onClick={this.incCountTheme}
              >
                Next
        </button>
      }      
      <br />
      <p>{this.state.words[this.state.countTheme]}</p>
      <br />
      <input id="word" name="word" type="text" ref = {el => this.wordValue=el}></input>
      <button
                type="button"
                onClick={this.wordsInput}
              >
                enviar
        </button>
    </div>
    );
  }

  render() {
    return this.state.nextPage ? this.pageRender() : this.formRender();
  }
}

ReactDOM.render(<Reservation />, document.getElementById("root"));
