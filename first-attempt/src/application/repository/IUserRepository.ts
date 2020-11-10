import User from "../../domain/User.entity";

export interface IUserRepository {
  fetch(user: User): Promise<User>;
}
