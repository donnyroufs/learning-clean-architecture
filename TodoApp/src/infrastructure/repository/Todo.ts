import { Todo } from "@domain/Todo"
import { ITodoRepository } from "@app/repository/ITodoRepository"
import { injectable } from "inversify"

@injectable()
export class TodoRepository implements ITodoRepository {
  async findMany(): Promise<Todo[]> {
    return [
      { id: 1, title: "some todo", completed: false },
      { id: 2, title: "todo some", completed: true },
    ]
  }
}
