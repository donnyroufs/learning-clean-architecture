import { ListTodosUseCase } from "./../../application/usecase/todo/ListTodosUseCase"
import { inject, injectable } from "inversify"
import { ITodoRepository } from "@app/repository/ITodoRepository"
import { Types } from "../types"

@injectable()
export class TodoServiceLocator {
  constructor(
    @inject(Types.ITodoRepository) private repository: ITodoRepository
  ) {}

  public getListTodosUseCase() {
    return new ListTodosUseCase(this.repository)
  }
}
