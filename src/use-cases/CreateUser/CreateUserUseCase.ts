import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from '../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    email,
    password,
    discord
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const hashedPassword = await hash(password, 10);

    await this.usersRepository.create({
      email,
      password: hashedPassword,
      discord,
    })

  }
}

export { CreateUserUseCase }
