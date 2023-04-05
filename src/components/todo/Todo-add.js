export default function TodoAdd(props) {
  const { tasks, taskValue, theThis, inputRef } = props;

  const addTask = (_) => {
    const newTask = [...tasks];
    const value = taskValue.trimStart();
   if(value != ""){
    newTask.push({ text: value })
    localStorage.setItem('tasks', JSON.stringify(newTask));
    theThis.setState({
      tasks: newTask,
      taskValue: "",
    });
   }
    
    inputRef.current.focus()
  };

  const setValue = (e) => {
    theThis.setState({ taskValue: e.target.value });
  };

  const addTaskOnPress = (e) => {
    e.keyCode == 13 && addTask();
  };

  return (
    <div className="todo-add">
      <input
        type="text"
        value={taskValue}
        ref={inputRef}
        onChange={setValue}
        onKeyDown={addTaskOnPress}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
