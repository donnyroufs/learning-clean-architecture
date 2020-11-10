import { Todo } from "@domain/Todo"

export interface IGetTodos {
  fetch(): Promise<Todo[]>
}
