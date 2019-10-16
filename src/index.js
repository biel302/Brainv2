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
      isActive: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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
    console.log("oi2");
    this.setState({
      nextPage: true
    });
    event.preventDefault();
  }

  formRender() {
    return (
      <form>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Time (in minutes):
          <input
            name="time"
            type="number"
            value={this.state.time}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Themes:
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
    console.log("oi");
    return <h1>{this.state.themes[this.state.countTheme]}</h1>;
  }

  render() {
    return this.state.nextPage ? this.pageRender() : this.formRender();
  }
}

ReactDOM.render(<Reservation />, document.getElementById("root"));
