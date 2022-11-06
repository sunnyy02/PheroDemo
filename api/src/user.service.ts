import { User } from "./user.interface";
import { userData } from "./user.data";

export const findAll = async (): Promise<User[]> => Object.values(userData);