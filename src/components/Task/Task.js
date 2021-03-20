import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './Task.css';
import PropTypes from "prop-types";

export default class Task extends React.Component {

    static propTypes = {
        label: PropTypes.string,
        isCompleted: PropTypes.bool,
        visible: PropTypes.bool,
        deleteItem: PropTypes.func,
        onToggleActive: PropTypes.func
    }

    state = {
        formatDistanceToNow: formatDistanceToNow(this.props.timeOfCreation)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.refreshTimer(),
            60000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    refreshTimer = () => {
        this.setState({
            formatDistanceToNow: formatDistanceToNow(this.props.timeOfCreation)
        })
    }

    render () {
        const { label, isCompleted,  visible, deleteItem, onToggleActive } = this.props;

        let className = isCompleted ? "completed" : '';

        if (!visible) className += ' hidden';
        if (this.state.isEditing) className += ' edit';

        return (
            <li className={className}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onChange={onToggleActive}
                    />
                    <label>
                        <span className="description">{ label }</span>
                        <span className="created">created { this.state.formatDistanceToNow } ago</span>
                    </label>
                    <button className="icon icon-edit" />
                    <button className="icon icon-destroy" onClick={deleteItem} />
                </div>
            </li>
        )
    }
}
