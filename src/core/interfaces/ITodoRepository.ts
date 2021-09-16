import Todo from "../Todo";

export default interface ITodoRepository {
  save(todo: Todo): Promise<Todo | void>
  delete(todo: Todo): Promise<void>
  listAll(): Promise<Todo[]>
  checked(id: string): Promise<Todo>
  updateDescription(id: string): Promise<Todo>
}