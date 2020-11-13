import { Todo } from "@domain/Todo"

export interface IListTodosUseCase {
  fetch(): Promise<Todo[]>
}
