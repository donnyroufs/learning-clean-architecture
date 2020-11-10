import { IUserDto } from "../dto/IUserDto";

export interface ISigninUseCase {
  signin(userDto: IUserDto): Promise<IUserDto>;
}
