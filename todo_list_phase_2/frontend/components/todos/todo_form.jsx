import React from 'react';
import uniqueId from "../../util/unique_id";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addTodo(
      {id: uniqueId(),
      title: this.state.text,
      body: this.state.text,
      done: false
      });
    this.setState({text: ""});
  }
  
  update(e) {
    this.setState( {text: e.target.value} );
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleClick.bind(this)}>
          <label>
            New To Do: <input id="todo-input" type="text" onChange={this.update.bind(this)} value={this.state.text}></input>
          </label>
          <button type="submit" name="button">Create To Do</button>
        </form>
      </>
    )
  }
}

export default TodoForm;