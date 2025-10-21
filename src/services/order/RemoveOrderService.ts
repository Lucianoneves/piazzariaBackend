
  import PrismaClient from "../../prisma/index.js"; 



  interface OrderRequest { // tipagem dos dados que serão recebidos na requisição 
    order_id: string; // id do pedido que será removido
    }


  class RemoveOrderService {
    async execute({ order_id }: OrderRequest) { // método que executa a remoção do pedido
      if(!order_id) { // se o id do pedido não for informado
        throw new Error("ID do pedido é obrigatório"); // lança um erro
      }


      const order = await PrismaClient.order.delete({ // deletando o pedido do banco de dados
        where: {
          id: order_id // onde o id do pedido for igual ao id informado na requisição
        }
      });
      return order;
    }
  }

  export { RemoveOrderService };      