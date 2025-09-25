import PrismaClient from "../../prisma/index.js";

interface SendOrderRequest {
  order_id: string; // id do pedido que será enviado
}

class SendOrderService {
  async execute({ order_id }: SendOrderRequest) {
    const order = await PrismaClient.order.update({ // atualizando o pedido


        where: { id: order_id },  // onde o id do pedido é igual ao id do pedido que está sendo enviado
        data: {
          draft: false, // alterando o rascunho para falso deixando o pedido como finalizado
          status: true  // alterando o status para true, indicando que o pedido foi enviado
        }
    });
    return order;
  }
}


export { SendOrderService }