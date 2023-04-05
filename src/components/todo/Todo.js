import { Component } from 'react';
import TodoList from './Todo-list'
import TodoAdd from './Todo-add'

export default class Todo extends Component {
    constructor() {
        super()
    }
    state = {
        tasks: [{ text: '12' }],
        taskValue: ''
    }

    render() {
        return (
            <section className='todo'>
              <TodoList tasks={this.state.tasks} theThis={this} />
              <TodoAdd tasks={this.state.tasks} taskValue={this.state.taskValue} theThis={this} />
            </section>
        )
    }
}

