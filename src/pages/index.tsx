import Todos from '../components/todos'
import Button from '../components/button'
import useTodos from '../hooks/useTodos';
import styles from './home.module.css';

export default function Home() {

  const { todos, todo, listAll, saveTodo, showTodos } = useTodos();

  return(
    
    <main className={styles.main}>
      <div className={styles.main_header}>
        <h2>TODO</h2>
        <Button> Add  +</Button>
      </div>

      <Todos todos={todos} showTodos={showTodos} />
    </main>

  )
}