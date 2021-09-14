import Todos from '../components/todos'
import styles from './home.module.css';

export default function Home() {

  return(
    
    <main className={styles.main}>
      <h2>TODO</h2>

      <Todos />
    </main>

  )
}