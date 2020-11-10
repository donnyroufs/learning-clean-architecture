import { IUserDto } from "./IUserDto";

export interface ISigninUseCase {
  signin(userDto: IUserDto): Promise<IUserDto>;
}
