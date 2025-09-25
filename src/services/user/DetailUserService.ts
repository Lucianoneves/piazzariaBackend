  import {} from "express";
  import PrismaClient from "../../prisma/index.js";

  class DetailUserSercice{
    async execute(user_id: string){

      const user = await PrismaClient.user.findFirst({ // findUnique não funciona pq o id é string
         where:{
         id: user_id // buscando pelo id do usuário
        },
        select:{
          id:true,
          name:true,
          email: true // selecionando apenas os campos que queremos retornar

          
        }
        

      })
        return user;
    }
  }

  export {DetailUserSercice}