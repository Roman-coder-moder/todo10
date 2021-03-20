import React from 'react';

import './TasksFilter.css';
import PropTypes from "prop-types";

export default class TasksFilter extends React.Component {

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.object),
        onToggleVisible: PropTypes.func
    }

    state = {
        filters: [
            { name: 'all', isSelected: true },
            { name: 'Active', isSelected: false },
            { name: 'Completed', isSelected: false }
        ]
    }

    onClickFilterAll = () => {
        const { todos, onToggleVisible } = this.props;

        todos.forEach(({ id }) => {
            onToggleVisible(id, true);
        })

        this.setState({
            filters: [
                { name: 'all', isSelected: true },
                { name: 'Active', isSelected: false },
                { name: 'Completed', isSelected: false }
            ]
        })
    }

    onClickFilterActive = () => {
        const { todos, onToggleVisible } = this.props;

        todos.forEach(({ isCompleted, id }) => {
            if (!isCompleted) {
                onToggleVisible(id, true);
            }   else {
                onToggleVisible(id, false);
            }
        })

        this.setState({
            filters: [
                { name: 'all', isSelected: false },
                { name: 'Active', isSelected: true },
                { name: 'Completed', isSelected: false }
            ]
        })
    }

    onClickFilterCompleted = () => {
        const { todos, onToggleVisible } = this.props;

        todos.forEach(({ isCompleted, id }) => {
            if (isCompleted) {
                onToggleVisible(id, true);
            } else {
                onToggleVisible(id, false);
            }
        })

        this.setState({
            filters: [
                { name: 'all', isSelected: false },
                { name: 'Active', isSelected: false },
                { name: 'Completed', isSelected: true }
            ]
        })
    }

    render () {
        const { filters } = this.state;

        return (

            <ul className="filters">
                <li>
                    <button
                        className={filters[0].isSelected ? "selected" : ""}
                        onClick={this.onClickFilterAll}>
                        All
                    </button>
                </li>
                <li>
                    <button
                        className={filters[1].isSelected ? "selected" : ""}
                        onClick={this.onClickFilterActive}>
                        Active
                    </button>
                </li>
                <li>
                    <button
                        className={filters[2].isSelected ? "selected" : ""}
                        onClick={this.onClickFilterCompleted}>
                        Completed
                    </button>
                </li>
            </ul>
        )
    }
}