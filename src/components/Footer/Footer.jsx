import React from 'react';

import './Footer.css';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter';

export default class Footer extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleVisible: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  onClickClearCompleted = () => {
    const { deleteItem, todos } = this.props;
    const completedTodos = todos.filter((item) => item.isCompleted);

    completedTodos.forEach((item) => deleteItem(item.id));
  };

  render() {
    const { todos, onToggleVisible } = this.props;
    const activeTodos = todos.filter((item) => !item.isCompleted);

    return (
      <footer className="footer">
        <span className="todo-count">{activeTodos.length} items left</span>
        <TasksFilter onToggleVisible={onToggleVisible} todos={todos} />
        <button type="button" onClick={this.onClickClearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}
