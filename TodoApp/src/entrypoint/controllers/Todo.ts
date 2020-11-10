import { TodoServiceLocator } from "./../../configuration/usecase/TodoServiceLocator"
import { Types } from "../../configuration/types"
import { IGetTodos } from "@app/usecase/todo/IGetTodos"
import { inject } from "inversify"
import { controller, httpGet, request, response } from "inversify-express-utils"
import express from "express"

@controller("/todo")
export class TodoController {
  private readonly getTodosUseCase: IGetTodos

  constructor(
    @inject(Types.TodoServiceLocator) serviceLocator: TodoServiceLocator
  ) {
    this.getTodosUseCase = serviceLocator.execGetTodosUseCase()
  }

  @httpGet("/")
  public async index(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    return this.getTodosUseCase.fetch()
  }
}
