import PropTypes from "prop-types";

const TodoItem = ({ todo, removeTodo, toggleComplete }) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span onClick={() => toggleComplete(todo.id)} style={{ cursor: "pointer" }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TodoItem;
