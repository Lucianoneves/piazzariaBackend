import PrismaClient from "../../prisma/index.js";

class ListOrdersService{
  async execute(){

    const orders = await PrismaClient.order.findMany({
      where:{
        draft: false,  // Listar apenas pedidos finalizados   0 seja, draft: false
        status: false,
      },
      orderBy:{
        createdAt: 'desc'
      }
    })

    return orders;

  } 
}

export { ListOrdersService }