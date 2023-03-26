// import { useState } from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  //   const [taskText, setTaskText] = useState("");

  //   const handleChange = (e) => {
  //     setTaskText(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTask = taskList.map((list) =>
        list.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : list
      );

      setTaskList(updateTask);
      setTask({});
    } else {
      const date = new Date();

      const newTask = {
        //   id: Math.floor(Math.random() * 10000),
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTaskList([...taskList, newTask]);
      //   e.target.task.value = "";
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          value={task.name || ""}
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
        />
        <button type="submit">{task.id ? "Update" : "Add"} </button>
      </form>
    </section>
  );
};

export default AddTask;
