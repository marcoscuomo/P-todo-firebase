import ITodoRepository from '../../core/interfaces/ITodoRepository';
import Todo from '../../core/Todo';
import firebase from '../config'

export default class CollectionTodo implements ITodoRepository {
  
  #conversor = {
    toFirestore(todo: Todo) {
      return {
        title: todo.title,
        description: todo.description
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, option: firebase.firestore.SnapshotOptions): Todo {
      const values = snapshot?.data(option)
      return new Todo(values.title, values.description, snapshot?.id)
    }
  }

  private colection() {
    return firebase.firestore().collection('todo').withConverter(this.#conversor)
  }
  
  async save(todo: Todo): Promise<Todo | void> {
    const docRef = await this.colection().add(todo)
    const doc = await docRef.get()
    return doc.data()
  }
  
  delete(todo: Todo): Promise<void> {
    return this.colection().doc(todo.id).delete()
  }
  
  async listAll(): Promise<Todo[]> {
    const query = await this.colection().get()
    return query.docs.map(doc => doc.data()) ?? []
  }
  
  checked(id: string): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
  
  updateDescription(id: string): Promise<Todo> {
    throw new Error('Method not implemented.');
  }

}