import User from "../../domain/entity/User";

export interface IUserRepository {
  fetch(user: User): Promise<User>;
}
