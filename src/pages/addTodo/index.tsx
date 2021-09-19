import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';

import Todo from '../../core/Todo';
import Button from '../../components/button';
import InputTodo from '../../components/inputTodo';
import useTodos from '../../hooks/useTodos';
import styles from './styles.module.css';

export default function AddTodo() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { todo, setTodo, saveTodo } = useTodos();
  const router = useRouter();

  async function sendTodo(){
    const todo = new Todo(title, description)

    await saveTodo(todo); 
    router.push('/')
  }
  
  return(
    <main className={styles.container}>
      <Link href='/'>
        <Button typeButton="back">Back</Button>
      </Link>
      <form>
        <h2>Create Todo</h2>
    
        <InputTodo 
          placeholder="Todo" 
          onChange={setTitle}
          value={title} 
        />
        <InputTodo 
          placeholder="Description" 
          onChange={setDescription}
          value={description}
          />

        <Button 
          typeButton="create"
          onClick={sendTodo}
        >
          Create
        </Button>
      </form>

    </main>
  )
}