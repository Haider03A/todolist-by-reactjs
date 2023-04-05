export default function TodoList(props) {
    const { tasks, theThis } = props;
    
    const done = index => {
      const newTask = [...tasks];
    newTask.splice(index, 1)
    theThis.setState({
      tasks: newTask,
    })
    }
    
    return(
        <div className='todo-list'>
            <ul>
                {tasks.map((task, index)=> {
                    return <li key={index}>{task.text} <button onClick={_ => done(index)}>Done</button></li>
                })}
            </ul>
        </div>
    )
}