import { Types } from "../constants/types";
import { IUserRepository } from "./application/repository/IUserRepository";
import "reflect-metadata";

import express from "express";
import { Container } from "inversify";
import AuthServiceLocator from "./configuration/usecase/AuthServiceLocator";
import UserRepository from "./infrastructure/User.repository";
import { InversifyExpressServer } from "inversify-express-utils";

import "./entrypoint/controllers/Auth.controller";

const container = new Container();

container
  .bind<AuthServiceLocator>(Types.AuthServiceLocator)
  .to(AuthServiceLocator);

container
  .bind<IUserRepository>(Types.IUserRepository)
  .to(UserRepository);

const server = new InversifyExpressServer(container);

server.setConfig((application: express.Application) => {
  application.use(express.json());
});

const app = server.build();

app.listen(5000, () => {
  console.log("server started on port 5000");
});
