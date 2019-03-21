import React from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class Main extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "By Eggs"
      },
      {
        id: 2,
        title: "By Vegetables"
      },
      {
        id: 3,
        title: "By Milk"
      }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(f => {
      return f.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });

    console.log(todo);
  };
  render() {
    return (
      <div className="container">
        <h1 className="top blue-light">Todo s List</h1>
        <AddTodo addTodo={this.addTodo} />

        <Todos todo={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default Main;
