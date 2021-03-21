import React from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { addTodo } = this.props;
    const { label } = this.state;
    event.preventDefault();
    addTodo(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onLabelChange}
            className="new-todo"
            placeholder="What needs to be done?"
            value={label}
          />
        </form>
      </header>
    );
  }
}
