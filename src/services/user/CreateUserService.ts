  import {} from "express";
  import PrismaClient from "../../prisma/index.js";
  import { hash } from "bcryptjs";   //biblioteca para criptografar senha evitar ataques

 

  interface  UserRequest {
    name: string;
    email: string;
    password: string;
  }

  class CreateUserService {
    async execute({ name, email, password }: UserRequest){
      
    //verificar se o email foi  enviado
    if(!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await PrismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(userAlreadyExists) {
      throw new Error("User already exists");
    }

    
    
    const passwordHash = await hash(password, 8);  //hash da senha com 8 caracteres
    
    //verificar se o email ja esta cadastrado na plataforma
    const user = await PrismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash //senha criptografada escondida
      },
      select: { //para nao retornar a senha
        id: true,
        name: true,
        email: true
    
      }

    })

    return user;
  }
}

export { CreateUserService };