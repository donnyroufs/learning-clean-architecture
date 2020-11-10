import { Todo } from "@/domain/entity/Todo"
import { ITodoRepository } from "@domain/gateway/todo/ITodoRepository"

export class GetTodos {
  constructor(private todoRepository: ITodoRepository) {}

  async exec(): Promise<Todo> {
    return this.todoRepository.findMany()
  }
}
