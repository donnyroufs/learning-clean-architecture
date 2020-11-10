import { IUserDto } from "../dto/IUserDto";
import { ISigninUseCase } from "./ISigninUseCase";
import { IUserRepository } from "../repository/IUserRepository";
import User from "../../domain/entity/User";

class SigninUseCase implements ISigninUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async signin(userDto: IUserDto): Promise<IUserDto> {
    const user = new User(
      userDto.id,
      userDto.name,
      userDto.email,
      userDto.password
    );

    const foundUser = await this.userRepository.fetch(user);

    if (!foundUser) {
      throw new Error("No user found.");
    }

    return foundUser;
  }
}

export default SigninUseCase;
