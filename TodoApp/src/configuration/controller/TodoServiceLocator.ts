import { GetTodos } from "./../../application/usecase/todo/GetTodos"
import { inject, injectable } from "inversify"
import { ITodoRepository } from "@app/repository/ITodoRepository"
import { Types } from "../types"

@injectable()
export class TodoServiceLocator {
  constructor(
    @inject(Types.ITodoRepository) private repository: ITodoRepository
  ) {}

  public execGetTodosUseCase() {
    return new GetTodos(this.repository)
  }
}
