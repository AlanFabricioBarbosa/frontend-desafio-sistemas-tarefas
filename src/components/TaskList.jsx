import PropTypes from "prop-types";
import { useState } from "react";
import { FaEdit, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
import "../styles/components/_task.scss";

function TaskList({ tasks, editTask, removeTask, reorderTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEditClick = (task) => {
    setEditingTaskId(task._id);
    editTask(task);
  };

  return (
    <ul className="task-list">
      {tasks
        .sort((a, b) => a.order - b.order)
        .map((task, index) => (
          <li
            key={task._id}
            className={`task-item ${task.cost >= 1000 ? "high-cost" : ""} ${
              editingTaskId === task._id ? "editing" : ""
            }`}
          >
            <h2>{task.name}</h2>
            <h4>ID: {task._id}</h4>
            <p>Custo: R${task.cost}</p>
            <p>Prazo Final: {new Date(task.deadline).toLocaleDateString()}</p>
            <div className="task-actions">
              <button onClick={() => handleEditClick(task)}>
                <FaEdit className="icon edit-icon" />
              </button>
              <button
                onClick={() => {
                  if (confirm("Deseja realmente excluir esta tarefa?")) {
                    removeTask(task._id);
                  }
                }}
              >
                <FaTrash className="icon delete-icon" />{" "}
              </button>
              {index > 0 && (
                <button onClick={() => reorderTask(task._id, "up")}>
                  <FaArrowUp className="icon move-up-icon" />{" "}
                </button>
              )}
              {index < tasks.length - 1 && (
                <button onClick={() => reorderTask(task._id, "down")}>
                  <FaArrowDown className="icon move-down-icon" />{" "}
                </button>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      deadline: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
    })
  ).isRequired,
  editTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  reorderTask: PropTypes.func.isRequired,
};

export default TaskList;
