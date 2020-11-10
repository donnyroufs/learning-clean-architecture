import { ITodoRepository } from "@app/repository/ITodoRepository"
import { Todo } from "@domain/Todo"
import { IGetTodos } from "@app/usecase/todo/IGetTodos"

export class GetTodos implements IGetTodos {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async fetch(): Promise<Todo[]> {
    return this.todoRepository.findMany()
  }
}
