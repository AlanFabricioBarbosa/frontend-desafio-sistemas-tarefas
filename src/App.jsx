import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, createTask, updateTask, deleteTask } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const response = await createTask(task);
    setTasks([...tasks, response.data]);
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTaskData = async (id, updatedTask) => {
    const response = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    setEditingTask(null);
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>Sistema de Tarefas</h1>
      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTaskData={updateTaskData}
      />
      <TaskList tasks={tasks} editTask={editTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
