import PrismaClient from "../../prisma/index.js";



interface OrderRequest { // tipagem dos dados que serão recebidos na requisição 
    table: number; // número da mesa que fez o pedido
    name: string | null; // nome do cliente que fez o pedido, pode ser nulo
}




  class CreateOrderService {
    async execute({table, name}:OrderRequest) { // async pq é uma promessa

        const order = await PrismaClient.order.create({ 
            data: {
                table: table,
                name: name,  
            }
        })

        return order;
    }
    
}


    export { CreateOrderService }