import { Todo } from "../../domain/Todo"
import { ITodoRepository } from "@app/repository/ITodoRepository"
import { injectable } from "inversify"
import db from "../../drivers/db/database"

@injectable()
export class TodoRepository implements ITodoRepository {
  async findMany(): Promise<Todo[]> {
    const todos = await db("Todo").select("*")
    return todos.map(
      (todo: Todo) =>
        new Todo(
          todo.id,
          todo.title,
          todo.isCompleted,
          todo.created_at,
          todo.updated_at
        )
    )
  }
}
