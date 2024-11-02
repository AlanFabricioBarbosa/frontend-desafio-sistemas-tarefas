import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TaskForm({ addTask, editingTask, updateTaskData }) {
  const [task, setTask] = useState({
    name: "",
    cost: "",
    deadline: "",
    order: "",
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      updateTaskData(editingTask._id, task);
    } else {
      addTask(task);
    }
    setTask({ name: "", cost: "", deadline: "", order: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input
        name="order"
        value={task.order}
        onChange={handleChange}
        placeholder="Ordem"
        type="number"
        required
      />
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
    order: PropTypes.number,
  }),
  updateTaskData: PropTypes.func.isRequired,
};

export default TaskForm;
