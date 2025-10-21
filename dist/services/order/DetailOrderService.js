import PrismaClient from "../../prisma/index.js";
class DetailOrderService {
    async execute({ order_id }) {
        const orders = await PrismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true, // Incluindo os detalhes do produto associado a cada item
                order: true, // Incluindo os detalhes do pedido associado a cada item
            },
        });
        return orders;
    }
}
export { DetailOrderService };
//# sourceMappingURL=DetailOrderService.js.map