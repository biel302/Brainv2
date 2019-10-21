import React from "react";

const formRender = () => {
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
};

export default formRender;
