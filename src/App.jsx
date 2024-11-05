import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, createTask, updateTask, deleteTask } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data.sort((a, b) => a.order - b.order));
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = {
      ...task,
      order: tasks.length ? tasks[tasks.length - 1].order + 1 : 1,
    };
    const response = await createTask(newTask);
    setTasks([...tasks, response.data].sort((a, b) => a.order - b.order));
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

  const reorderTask = (id, direction) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((task) => task._id === id);
      const newTasks = [...prevTasks];

      if (direction === "up" && index > 0) {
        [newTasks[index], newTasks[index - 1]] = [
          newTasks[index - 1],
          newTasks[index],
        ];
      } else if (direction === "down" && index < newTasks.length - 1) {
        [newTasks[index], newTasks[index + 1]] = [
          newTasks[index + 1],
          newTasks[index],
        ];
      }

      return newTasks.map((task, i) => ({ ...task, order: i + 1 }));
    });
  };

  return (
    <div>
      <h1>Sistema de Tarefas</h1>
      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTaskData={updateTaskData}
        tasks={tasks}
      />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        removeTask={removeTask}
        reorderTask={reorderTask}
      />
    </div>
  );
}

export default App;
