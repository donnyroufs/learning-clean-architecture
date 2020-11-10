import { IUserRepository } from "./../../application/repository/IUserRepository";
import { inject, injectable } from "inversify";
import SigninUseCase from "../../application/usecase/SigninUseCase";
import { Types } from "../../../constants/types";

@injectable()
class AuthServiceLocator {
  constructor(
    @inject(Types.IUserRepository) private readRepository: IUserRepository
  ) {}

  public getSignInUseCase() {
    return new SigninUseCase(this.readRepository);
  }
}

export default AuthServiceLocator;
