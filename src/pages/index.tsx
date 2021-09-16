import Todos from '../components/todos'
import useTodos from '../hooks/useTodos';
import styles from './home.module.css';

export default function Home() {

  const { todos, todo, listAll, saveTodo, showTodos } = useTodos();

  return(
    
    <main className={styles.main}>
      <h2>TODO</h2>

      <Todos todos={todos} showTodos={showTodos} />
    </main>

  )
}