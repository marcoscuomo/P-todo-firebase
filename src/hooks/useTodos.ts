import Todo from "../core/Todo";

export default function useTodos() {
  const todos = [
    new Todo('Lavar Louça', 'Lavar a louça da janta', false, true, new Date(), '1'),
    new Todo('Lavar Quintal', 'Lavar a louça da janta', true, true, new Date(), '2'),
    new Todo('Lavar Jardim', 'Lavar a louça da janta', true, true, new Date(), '3'),
    new Todo('Lavar Quarto', 'Lavar a louça da janta', false, true, new Date(), '4'),
    new Todo('Lavar Quarto', 'Lavar a louça da janta', false, false, new Date(), '5'),
    
  ]

  return {
    todos
  }
}