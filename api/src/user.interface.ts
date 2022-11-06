export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface User {
  name: string;
  age: number;
  role: UserRole;
}

export interface Users {
  [key: number]: User;
}
