import { ITodoRepository } from "@app/repository/ITodoRepository"
import { Todo } from "../../../domain/Todo"
import { IListTodosUseCase } from "@app/usecase/todo/IListTodosUseCase"

export class ListTodosUseCase implements IListTodosUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async fetch(): Promise<Todo[]> {
    return this.todoRepository.findMany()
  }
}
