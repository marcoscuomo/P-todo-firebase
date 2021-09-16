import Todos from '../../core/Todo'
import {IconTrash, IconEdit} from '../../components/Icons';
import styles from './styles.module.css';

interface ITodosProps {
  todos: Todos[],
  showTodos: boolean
}

export default function Todo({todos, showTodos}: ITodosProps) {

  function renderTodos() {

    function teste() {
      console.log('teste')
    }

    return todos.map(todo => (
      <li key={todo.id} onClick={() => teste()}>
        <p>{todo.title}</p>
        <div className={styles.action}>
          {IconEdit}
          {IconTrash}
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