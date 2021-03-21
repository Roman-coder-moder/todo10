import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';
import './TaskList.css';

export default class TaskList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteItem: PropTypes.func.isRequired,
    onToggleActive: PropTypes.func.isRequired,
  };

  render() {
    const { todos, deleteItem, onToggleActive } = this.props;

    const elements = todos.map((item) => {
      const { id } = item;

      return <Task {...item} deleteItem={() => deleteItem(id)} onToggleActive={() => onToggleActive(id)} key={id} />;
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
