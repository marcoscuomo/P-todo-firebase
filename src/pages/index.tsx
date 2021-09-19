import Link from 'next/link'
import React from 'react'
import Head from 'next/head'


import Todos from '../components/todos'
import Button from '../components/button'
import useTodos from '../hooks/useTodos';
import styles from './home.module.css';

export default function Home() {

  const { todos, todo, listAll, saveTodo, showTodos, deleteTodo } = useTodos();

  return(
    <>
      <Head> 
        <title>Todo with Firebase - Home</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.main_header}>
          <h2>TODO</h2>
          <Link href='/addTodo'>
            <Button typeButton='add'> Add  +</Button>
          </Link>
        </div>

        <Todos 
          todos={todos} 
          showTodos={showTodos}
          deleteTodo={deleteTodo} 
        />
      </main>
    </>

  )
}