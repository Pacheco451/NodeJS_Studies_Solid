import { MailtrapMailprovider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgressUserRepository } from "../../repositories/implemantations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreatUserUseCase";

const mailtrapMailProvider = new MailtrapMailprovider()
const postgressUserRepository = new PostgressUserRepository()

const createUserUseCase = new CreateUserUseCase(
    postgressUserRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }