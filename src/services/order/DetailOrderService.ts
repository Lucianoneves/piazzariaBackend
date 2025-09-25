import PrismaClient from "../../prisma/index.js";



interface DetailRequest{ // ou criar uma interface
  order_id: string;
}



  class DetailOrderService{
  async execute({ order_id }: DetailRequest){

    const orders = await PrismaClient.item.findMany({ // ou findFirst
      where:{
        order_id: order_id
    }, 
    include:{ 
      product:true, // Incluindo os detalhes do produto associado a cada item
      order:true, // Incluindo os detalhes do pedido associado a cada item
    },
    })

    

    return orders;
  }
}

export { DetailOrderService }