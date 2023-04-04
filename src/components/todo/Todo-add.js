export default function TodoAdd(props) {
    const { taskValue, setValue } = props;


    const addTask = _ => {
        const { tasks } = props;
        const newTask = [...tasks]
        props.setState({
            tasks: newTask
        })
    }
    return (
        <div className='todo-add'>
            <input type="text" value={taskValue} onChange={e => setValue({taskValue: inputValue}) } />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}