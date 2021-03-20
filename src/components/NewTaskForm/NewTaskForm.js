import React from 'react';
import './NewTaskForm.css';
import PropTypes from "prop-types";

export default class NewTaskForm extends React.Component {

    static propTypes = {
        addTodo: PropTypes.func
    }

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState( {
            label: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.label);
        this.setState({
            label: ''
        })
    }

    render () {

        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        onChange={this.onLabelChange}
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus
                        value={this.state.label} />
                </form>
            </header>
        )
    }
}