export default class Todo {
  #id: string;
  #title: string;
  #description: string;
  #isCompleted: boolean;
  #createdAt: Date;

  constructor(
    title: string, 
    description: string,
    id: string = '', 
    isCompleted: boolean = false, 
    createdAt: Date = new Date()
  ) {
    this.#id = id,
    this.#title = title,
    this.#description = description,
    this.#isCompleted = isCompleted,
    this.#createdAt = createdAt
  }

  static todoEmpty() {
    return new Todo('', '');
  }

  get id() {
    return this.#id
  }

  get title() {
    return this.#title
  }

  get description() {
    return this.#description
  }

  get isCompleted() {
    return this.#isCompleted
  }

  get createdAt() {
    return this.#createdAt
  }
}