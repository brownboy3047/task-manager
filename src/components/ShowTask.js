const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  //   const tasks = [
  //     { id: 10001, name: "TASK A", time: "2:09:01 AM 9/14/2030" },
  //     { id: 10002, name: "TASK B", time: "2:09:01 AM 9/14/2030" },
  //     { id: 10003, name: "TASK C", time: "2:09:01 AM 9/14/2030" },
  //   ];

  const handleEdit = (id) => {
    const selectedTask = taskList.find((list) => list.id === id);
    setTask(selectedTask);
  };

  const handledelete = (id) => {
    setTaskList(taskList.filter((list) => list.id !== id));
  };

  return (
    <div>
      <section className="showTask">
        <div className="head">
          <div>
            <span className="title">Todo</span>
            <span className="count">{taskList.length}</span>
          </div>

          <button className="clearAll" onClick={() => setTaskList([])}>
            Clear All
          </button>
        </div>

        <ul>
          {taskList.map((list) => (
            <li key={list.id}>
              <p>
                <span className="name">{list.name}</span>
                <span className="time">{list.time}</span>
              </p>

              <i
                className="bi-pencil-square"
                onClick={() => handleEdit(list.id)}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => handledelete(list.id)}
              ></i>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ShowTask;
