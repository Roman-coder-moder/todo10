import React from 'react';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import Footer from '../Footer';
import './App.css';

export default class App extends React.Component {
  maxId = 100;

  state = {
    todos: [
      { label: 'run', visible: true, isCompleted: false, timeOfCreation: new Date(2014, 6, 2), id: 1 },
      { label: 'jump', visible: true, isCompleted: false, timeOfCreation: new Date(2015, 6, 2), id: 2 },
      { label: 'sit', visible: true, isCompleted: false, timeOfCreation: new Date(2021, 3, 16), id: 3 },
    ],
  };

  createNewTodo = (label) => {
    this.maxId += 1;
    return {
      label,
      visible: true,
      isCompleted: false,
      timeOfCreation: Date.now(),
      id: this.maxId,
    };
  };

  addTodo = (label) => {
    this.setState(({ todos }) => {
      const newArr = [...todos, this.createNewTodo(label)];

      return {
        todos: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((item) => item.id === id);
      const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)];

      return {
        todos: newArr,
      };
    });
  };

  onToggleActive = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((item) => item.id === id);
      const oldItem = todos[idx];
      const newItem = { ...oldItem, isCompleted: !oldItem.isCompleted };
      const newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];

      return {
        todos: newArr,
      };
    });
  };

  onToggleVisible = (id, visible) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((item) => item.id === id);
      const oldItem = todos[idx];
      const newItem = { ...oldItem, visible };
      const newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];

      return {
        todos: newArr,
      };
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <section className="todoapp">
        <NewTaskForm addTodo={this.addTodo} />
        <section className="main">
          <TaskList todos={todos} deleteItem={this.deleteItem} onToggleActive={this.onToggleActive} />
          <Footer onToggleVisible={this.onToggleVisible} todos={todos} deleteItem={this.deleteItem} />
        </section>
      </section>
    );
  }
}
