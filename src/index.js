import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Popup from "./View/Popup";

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
      isActive: true,
      showPopup: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incCountTheme = this.incCountTheme.bind(this);
    this.decCountTheme = this.decCountTheme.bind(this);
    this.exitTheme = this.exitTheme.bind(this);
    this.wordsInput = this.wordsInput.bind(this);
    this.wordsShow = this.wordsShow.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value =
      target.name === "themes" ? target.value.trim().split(",") : target.value;
    const name = target.name;
    console.log(value);
    if (name === "time" && value < 0) {
      alert("Can not have negative number!");
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const list = [];

    for (let i = 0; i < this.state.themes.length; i++) {
      list.push([]);
    }
    console.log(list);

    if (
      this.state.time === 0 ||
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.themes.length === 0
    ) {
      alert("Todos os campos são obrigatórios!");
    } else {
      this.setState({
        nextPage: true,
        words: list
      });
    }
    console.log(this.state.words);
  }

  incCountTheme() {
    this.wordValue.value = "";
    this.setState({
      countTheme: this.state.countTheme + 1
    });
    this.render();
  }

  decCountTheme() {
    this.wordValue.value = "";
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

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  wordsInput(event) {
    event.preventDefault();
    const lst = this.state.words;
    if (this.wordValue.value.trim() === "") {
      alert("Não é possível inserir palavra vazia");
      this.wordValue.value = "";
      return;
    }
    lst[this.state.countTheme].push(this.wordValue.value.trim());
    console.log(lst);
    console.log(this.wordValue.value);
    console.log(this.state.words);
    this.wordValue.value = "";
    this.setState({
      words: lst
    });
    console.log(this.state.words);
  }

  popupRender() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }

  endPage() {
    return (
      <div>
        <div>
          {this.state.showPopup ? (
            <Popup
              text='Click "Close Button" to hide popup'
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
        </div>
        <div>
          <div>
            <button className="btn btn-dark" onClick={this.handleSubmit}>
              Review
            </button>
          </div>
          <div>
            <button className="btn btn-dark" onClick={this.handleSubmit}>
              Exit
            </button>
          </div>
          <div>
            <a href="/themes.txt">Download</a>
          </div>
          <div>
            <button className="btn btn-dark" onClick={this.handleSubmit}>
              Feedback
            </button>
          </div>
        </div>
      </div>
    );
  }

  wordsShow() {
    const listHTML = [];
    for (let i = 0; i < this.state.words[this.state.countTheme].length; i++) {
      listHTML.push(<td> {this.state.words[this.state.countTheme][i]} </td>);
    }
    return (
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
          <tr>
            <th className="text-center">Words</th>
          </tr>
        </thead>
        <tbody>
          <tr>{listHTML}</tr>
        </tbody>
      </table>
    );
  }

  formRender() {
    return (
      <form className="p-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Title
            </span>
          </div>
          <input
            name="title"
            type="text"
            placeholder="Water"
            value={this.state.title}
            onChange={this.handleInputChange}
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Description
            </span>
          </div>
          <input
            name="description"
            type="text"
            placeholder="About things"
            value={this.state.description}
            onChange={this.handleInputChange}
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Time (in seconds)
            </span>
          </div>
          <input
            name="time"
            type="number"
            placeholder="60"
            value={this.state.time}
            onChange={this.handleInputChange}
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Themes
            </span>
          </div>
          <input
            name="themes"
            type="text"
            placeholder="water,waste,economy"
            value={this.state.themes}
            onChange={this.handleInputChange}
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <button className="btn btn-dark" onClick={this.handleSubmit}>
          Send
        </button>
      </form>
    );
  }

  pageRender() {
    return (
      <div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button
              className="btn btn-dark"
              disabled={this.state.countTheme === 0}
              onClick={this.decCountTheme}
            >
              Back
            </button>
          </div>
          <div className="input-group-prepend">
            <input
              type="text"
              disabled="true"
              value={this.state.themes[this.state.countTheme]}
              className="input-group-text"
              id="inputGroupFile03"
            />
            {this.state.countTheme === this.state.themes.length - 1 ? (
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.exitTheme}
              >
                Exit
              </button>
            ) : (
              <button className="btn btn-dark" onClick={this.incCountTheme}>
                Next
              </button>
            )}
          </div>
        </div>

        <br />
        {this.wordsShow()}
        <br />
        <div class="input-group mb-3">
          <input
            id="word"
            name="word"
            type="text"
            ref={el => (this.wordValue = el)}
          />
          <div class="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={this.wordsInput}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.nextPage ? this.pageRender() : this.formRender();
  }
}

ReactDOM.render(<Reservation />, document.getElementById("root"));
