import { UserRole, Users } from "./user.interface";

export const userData: Users = {
    1: {
      name: "John",
      age: 42,
      role: UserRole.ADMIN
    },
    2: {
      name: "Jane",
      age: 30,
      role: UserRole.USER
    }
  };