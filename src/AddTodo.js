import React from "react";
import ReactDOM from "react-dom";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  handleonChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    this.props.addTodo(this.state);

    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate"
                onChange={this.handleonChange}
                placeholder="add Todo"
                value={this.state.title}
                required
              />
            </div>
            <span>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Add
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
