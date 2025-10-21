import PrismaClient from "../../prisma/index.js";
class CreateOrderService {
    async execute({ table, name }) {
        const order = await PrismaClient.order.create({
            data: {
                table: table,
                name: name,
            }
        });
        return order;
    }
}
export { CreateOrderService };
//# sourceMappingURL=CreateOrderService.js.map