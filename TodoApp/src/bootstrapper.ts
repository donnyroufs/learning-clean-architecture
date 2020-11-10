import "dotenv/config"
import "reflect-metadata"

import express from "express"

import { TodoRepository } from "./infrastructure/repository/Todo"
import { ITodoRepository } from "./application/repository/ITodoRepository"
import { TodoServiceLocator } from "./configuration/usecase/TodoServiceLocator"
import { Types } from "./configuration/types"

import { InversifyExpressServer } from "inversify-express-utils"
import { Container } from "inversify"

import "./entrypoint/controllers/Todo"

const PORT = process.env.PORT

const container = new Container()

container
  .bind<TodoServiceLocator>(Types.TodoServiceLocator)
  .to(TodoServiceLocator)

container
  .bind<ITodoRepository>(Types.ITodoRepository)
  .to(TodoRepository)

const server = new InversifyExpressServer(container)

server.setConfig((application: express.Application) => {
  application.use(express.json())
})

const app = server.build()

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
)
