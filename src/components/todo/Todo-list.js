export default function TodoList(props) {
    const { tasks } = props;
    return(
        <div className='todo-list'>
            <ul>
                {tasks.map((task, index)=> {
                    return <li key={index}>{task.text}</li>
                })}
            </ul>
        </div>
    )
}