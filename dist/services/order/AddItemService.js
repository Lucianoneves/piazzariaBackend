import prismaClient from "../../prisma/index.js";
class AddItemService {
    async execute({ order_id, product_id, amount }) {
        const order = await prismaClient.item.create({
            data: {
                order_id,
                product_id: product_id,
                amount
            }
        });
        return order;
    }
}
export { AddItemService };
//# sourceMappingURL=AddItemService.js.map