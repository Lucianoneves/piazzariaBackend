import PrismaClient from "../../prisma/index.js";


interface OrderRequest{ // ou criar uma interface
  order_id: string;
}



class FinishOrderService{ //
  async execute({ order_id }: OrderRequest){
    const order = await PrismaClient.order.update({ 
      where: {
        id: order_id,
        
      },
      data:{      
        status: true,
      }
    })  
        

    return order;
  }
}

export { FinishOrderService }