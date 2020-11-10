import { IUserDto } from "./../../application/usecase/IUserDto";
import { Types } from "./../../constants/types";
import express from "express";
import { ISigninUseCase } from "./../../application/usecase/ISigninUseCase";
import {
  controller,
  httpPost,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import AuthServiceLocator from "../../configuration/usecase/AuthServiceLocator";

@controller("/auth")
class AuthController implements interfaces.Controller {
  private readonly signInUseCase: ISigninUseCase;

  constructor(
    @inject(Types.AuthServiceLocator) serviceLocator: AuthServiceLocator
  ) {
    this.signInUseCase = serviceLocator.getSignInUseCase();
  }

  @httpPost("/signin")
  public async signin(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    const userDto: IUserDto = req.body;
    this.signInUseCase
      .signin(userDto)
      .then((foundUserDto: IUserDto) => {
        res.status(200).json(foundUserDto);
      })
      .catch((err: Error) => {
        res.status(400).json({ error: err.message });
      });
  }
}

export default AuthController;
