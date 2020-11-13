import { TodoServiceLocator } from "./../../configuration/usecase/TodoServiceLocator"
import { Types } from "../../configuration/types"
import { IListTodosUseCase } from "@app/usecase/todo/IListTodosUseCase"
import { inject } from "inversify"
import { controller, httpGet, response } from "inversify-express-utils"
import express from "express"

@controller("/todo")
export class TodoController {
  private readonly getTodosUseCase: IListTodosUseCase

  constructor(
    @inject(Types.TodoServiceLocator) serviceLocator: TodoServiceLocator
  ) {
    this.getTodosUseCase = serviceLocator.getListTodosUseCase()
  }

  @httpGet("/")
  public async index(@response() res: express.Response) {
    const todos = await this.getTodosUseCase.fetch()
    res.status(200).json(todos)
  }
}
