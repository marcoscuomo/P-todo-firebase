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
      console.log(showTodos)
    })
  }

  async function saveTodo(todo: Todo) {
    await repository.save(todo)
  }

  return {
    saveTodo,
    listAll,
    todo,
    todos,
    showTodos
  }
}