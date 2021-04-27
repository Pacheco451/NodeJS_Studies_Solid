import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreatUserUseCase";

export class CreateUserController {
    constructor(
        private createUserCase: CreateUserUseCase,
    ){}


  async handle(res: Response, req: Request): Promise<Response>{
    const { name, email, password } = req.body;
    
    try {
        await this.createUserCase.execute({
            name,
            email,
            password
        })        

        return res.status(201).send();
    } catch (error) {
        return res.status(400).json({
           message: error.message || 'Unexpected error'
        })
    }
  }
}