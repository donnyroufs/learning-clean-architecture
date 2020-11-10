import { Todo } from "@domain/entity/Todo"

export interface ITodoRepository {
  findMany(query?: number | string | boolean): Promise<Todo[]>
}
