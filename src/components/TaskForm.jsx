import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TaskForm({ addTask, editingTask, updateTaskData, tasks }) {
  const [task, setTask] = useState({
    name: "",
    cost: "",
    deadline: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = tasks.some(
      (t) => t.name === task.name && t._id !== editingTask?._id
    );
    if (isDuplicate) {
      setError("Uma tarefa com esse nome já existe!");
      return;
    }

    if (editingTask) {
      updateTaskData(editingTask._id, task);
    } else {
      addTask(task);
    }

    setTask({ name: "", cost: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Nome da Tarefa"
        required
      />
      <input
        name="cost"
        value={task.cost}
        onChange={handleChange}
        placeholder="Custo"
        type="number"
        required
      />
      <input
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        placeholder="Prazo"
        type="date"
        required
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">
        {editingTask ? "Atualizar Tarefa" : "Adicionar Tarefa"}
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  editingTask: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    cost: PropTypes.number,
    deadline: PropTypes.string,
  }),
  updateTaskData: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default TaskForm;
