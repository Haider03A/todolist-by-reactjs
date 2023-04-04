import { Component } from 'react';
import TodoList from './Todo-list'
import TodoAdd from './Todo-add'

export default class Todo extends Component {
    constructor() {
        super()
        this.taskValue = ''
    }
    state = {
        tasks: [{ text: '12' }]
    }

    render() {
        return (
            <section className='todo'>
                <TodoList tasks={this.state.tasks} />
                <TodoAdd tasks={this.state.tasks} setValue={this} />
            </section>
        )
    }
}

