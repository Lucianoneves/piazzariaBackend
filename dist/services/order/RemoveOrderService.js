import PrismaClient from "../../prisma/index.js";
class RemoveOrderService {
    async execute({ order_id }) {
        if (!order_id) { // se o id do pedido não for informado
            throw new Error("ID do pedido é obrigatório"); // lança um erro
        }
        const order = await PrismaClient.order.delete({
            where: {
                id: order_id // onde o id do pedido for igual ao id informado na requisição
            }
        });
        return order;
    }
}
export { RemoveOrderService };
//# sourceMappingURL=RemoveOrderService.js.map