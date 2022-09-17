import { prisma } from "../database/prismaClient";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create({
    email,
    password,
    discord
  }: ICreateUserDTO): Promise<void> {
    await prisma.users.create({
      data: {
        email,
        password,
        discord,
        created_at: new Date(),
        updated_at: new Date()
      }
    })    
  }
  
  async findByEmail(email: string): Promise<User | null> {
    const existentClient = await prisma.users.findFirst({
      where: {
        email: {
          mode: "insensitive",
        }
      }
    })

    if (!existentClient) {
      return null;
    }
    return existentClient;
  }
}

export { UsersRepository }
