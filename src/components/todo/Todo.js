import React, { Component, useEffect } from 'react';
import TodoList from './Todo-list'
import TodoAdd from './Todo-add'

export default class Todo extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
    }
    state = {
        tasks: [{ text: '@Haider03A' }],
        taskValue: '',
        localData: localStorage.getItem("tasks")
    }

    componentDidMount () {
        this.state.localData && 
        this.setState({
            tasks: JSON.parse(this.state.localData)
        })
    }

    render() {
        return (
            <section className='todo'>
              <TodoList tasks={this.state.tasks} theThis={this} />
              <TodoAdd tasks={this.state.tasks} taskValue={this.state.taskValue} theThis={this} inputRef={this.inputRef} />
            </section>
        )
    }
}

