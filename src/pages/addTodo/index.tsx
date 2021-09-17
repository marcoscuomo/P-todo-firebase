import Link from 'next/link'

import Button from '../../components/button';
import InputTodo from '../../components/inputTodo';
import styles from './styles.module.css';

export default function AddTodo() {
  return(
    <main className={styles.container}>
      <Link href='/'>
        <Button type="back">Back</Button>
      </Link>
      <form>
        <h2>Create Todo</h2>
        <InputTodo placeholder="Todo" />
        <InputTodo placeholder="Description" />

        <Button type="create">Create</Button>
      </form>

    </main>
  )
}