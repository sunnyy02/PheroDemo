import { createService } from '@phero/server'
import { User } from './user.interface';
import  * as UserService from "./user.service";

async function helloWorld(name: string): Promise<string> {
  return `Hi there, ${name}!`
}
async function getAllUsers(): Promise<User[]> {
  return await UserService.findAll();
}

export const helloWorldService = createService({
  helloWorld
})

export const userService = createService({
  getAllUsers,
},
  {
    cors: {
      originWhitelist: ["http://localhost:3000"]
    }
  }
)
