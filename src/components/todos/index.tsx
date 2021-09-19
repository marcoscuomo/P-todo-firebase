import Todos from '../../core/Todo'
import {IconTrash, IconEdit} from '../../components/Icons'
import styles from './styles.module.css'

interface ITodosProps {
  todos: Todos[],
  showTodos: boolean,
  deleteTodo: (todo: Todos) => void
}

export default function Todo({todos, showTodos, deleteTodo}: ITodosProps) {
  
  async function handleDelete(todo: Todos) {
    await deleteTodo(todo)
  }
  
  function renderTodos() {

    return todos.map(todo => (
      <li key={todo.id}>
        <p>{todo.title}</p>
        <div className={styles.action}>
          <a href="">
            {IconEdit}
          </a>
          <a onClick={() => handleDelete(todo)}>
            {IconTrash}
          </a>
        </div>
      </li>
    ))
  }

  return(
  
    <div className={styles.container}>
      {
        showTodos ? (
          <ul>
            {renderTodos()}
          </ul>
        ) : (
          <p className={styles.noTodoFound}>No todos found!</p>
        )
      }
    </div>
  )
}