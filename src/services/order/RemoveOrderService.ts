
  import PrismaClient from "../../prisma/index.js"; 



 interface OrderRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrderRequest) {
    const order = await PrismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { RemoveOrderService };
    