import PrismaClient from "../../prisma/index.js";
class FinishOrderService {
    async execute({ order_id }) {
        const order = await PrismaClient.order.update({
            where: {
                id: order_id,
            },
            data: {
                status: true,
            }
        });
        return order;
    }
}
export { FinishOrderService };
//# sourceMappingURL=FinishOrderService.js.map