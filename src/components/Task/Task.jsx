import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './Task.css';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
    deleteItem: PropTypes.func.isRequired,
    onToggleActive: PropTypes.func.isRequired,
    timeOfCreation: PropTypes.number.isRequired,
  };

  state = {
    formatDistanceToNow: formatDistanceToNow(this.props.timeOfCreation),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.refreshTimer(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  refreshTimer = () => {
    const { timeOfCreation } = this.props;
    this.setState({
      formatDistanceToNow: formatDistanceToNow(timeOfCreation),
    });
  };

  render() {
    const { label, isCompleted, visible, deleteItem, onToggleActive } = this.props;

    let className = isCompleted ? 'completed' : '';

    if (!visible) className += ' hidden';

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleActive} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {this.state.formatDistanceToNow} ago</span>
          </label>
          <button type="button" className="icon icon-edit" aria-label="edit todo" />
          <button type="button" className="icon icon-destroy" onClick={deleteItem} aria-label="delete todo" />
        </div>
      </li>
    );
  }
}
