import Todos from '../../core/Todo'

import styles from './styles.module.css';

interface ITodosProps {
  todos: Todos[]
}

export default function Todo({todos}: ITodosProps) {

  function renderTodos() {
    return todos.map(todo => (
      <li key={todo.id}>
        {todo.title}
      </li>
    ))
  }

  return(
    <div className={styles.container}>
      <ul>
        {renderTodos()}
      </ul>
    </div>
  )
}