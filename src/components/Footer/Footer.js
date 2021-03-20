import React from 'react';

import './Footer.css';
import TasksFilter from '../TasksFilter';
import PropTypes from "prop-types";

export default class Footer extends React.Component {

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.object),
        onToggleVisible: PropTypes.func
    }

    onClickClearCompleted = () => {
        const deleteItem = this.props.deleteItem;
        const completedTodos = this.props.todos.filter(item => item.isCompleted);

        completedTodos.forEach(item => deleteItem(item.id));
    }

    render () {
        const { todos, onToggleVisible } = this.props;
        const activeTodos = todos.filter(item => !item.isCompleted);

        return (
            <footer className="footer">
                <span className="todo-count">{activeTodos.length} items left</span>
                <TasksFilter
                    onToggleVisible={onToggleVisible}
                    todos={todos} />
                <button
                    onClick={this.onClickClearCompleted}
                    className="clear-completed" >
                    Clear completed
                </button>
            </footer>
        )
    }
}