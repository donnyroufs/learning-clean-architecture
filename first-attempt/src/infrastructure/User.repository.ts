import { injectable } from "inversify";
import User from "../domain/User.entity";
import { IUserRepository } from "./../application/repository/IUserRepository";

@injectable()
class UserRepository implements IUserRepository {
  public async fetch(user: User): Promise<User> {
    return {
      id: "1",
      name: "iamchets",
      email: "iamchets@mail.com",
    };
  }
}

export default UserRepository;
