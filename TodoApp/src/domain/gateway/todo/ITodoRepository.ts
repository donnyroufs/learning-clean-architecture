import { Todo } from "@domain/entity/Todo"

export interface ITodoRepository {
  findMany(): Promise<Todo>
}
