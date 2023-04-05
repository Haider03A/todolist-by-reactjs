export default function TodoAdd(props) {
  const { tasks, taskValue, theThis } = props;

  const addTask = (_) => {
    const newTask = [...tasks];
    const value = taskValue.trimStart();
    value != "" && newTask.push({ text: value });
    theThis.setState({
      tasks: newTask,
      taskValue: "",
    });
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
        onChange={setValue}
        onKeyDown={addTaskOnPress}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
