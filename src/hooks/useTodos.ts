import { useEffect, useState } from "react";
import CollectionTodo from "../backend/collections/CollectionTodo";
import ITodoRepository from "../core/interfaces/ITodoRepository";

import Todo from "../core/Todo";

export default function useTodos() {
  
  const repository: ITodoRepository = new CollectionTodo()

  const [todo, setTodo] = useState<Todo>()
  const [todos, setTodos] = useState<Todo[]>([])
  const [showTodos, setShowTodos] = useState<boolean>(false);

  useEffect(listAll, [])

  function listAll(){
    //TODO: Mudar para async await
    repository.listAll().then(todos => {
      setTodos(todos)
      todos.length > 1 ? setShowTodos(true) : setShowTodos(false)
    })
  }

  async function saveTodo(todo: Todo) {
    await repository.save(todo)
  }

  async function deleteTodo(todo: Todo) {
    await repository.delete(todo)
    listAll()
  }

  return {
    saveTodo,
    listAll,
    todo,
    setTodo,
    todos,
    showTodos,
    deleteTodo
  }
}