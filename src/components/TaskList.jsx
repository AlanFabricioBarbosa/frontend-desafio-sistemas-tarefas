import PropTypes from "prop-types";

function TaskList({ tasks, editTask, removeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <h3>{task.name}</h3>
          <p>Custo: {task.cost}</p>
          <p>Prazo Final: {new Date(task.deadline).toLocaleDateString()}</p>
          <p>Ordem: {task.order}</p>
          <button onClick={() => editTask(task)}>Editar</button>
          <button onClick={() => removeTask(task._id)}>Deletar</button>
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
};

export default TaskList;
