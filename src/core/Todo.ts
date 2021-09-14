export default class Todo {
  #id: string;
  #title: string;
  #description: string;
  #isCompleted: boolean;
  #isActive: boolean;
  #createdAt: Date;

  constructor(
    title: string, 
    description: string, 
    isCompleted: boolean = false, 
    isActive: boolean = true, 
    createdAt: Date = new Date(),
    id: string = '',
  ) {
    this.#id = id,
    this.#title = title,
    this.#description = description,
    this.#isCompleted = isCompleted,
    this.#isActive = isActive,
    this.#createdAt = createdAt
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

  get isActive() {
    return this.#isActive
  }

  get createdAt() {
    return this.#createdAt
  }
}