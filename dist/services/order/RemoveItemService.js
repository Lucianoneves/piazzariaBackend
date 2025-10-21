import PrismaClient from "../../prisma/index.js";
class RemoveItemService {
    async execute({ item_id }) {
        const order = await PrismaClient.item.delete({
            where: {
                id: item_id
            }
        });
        return order;
    }
}
export { RemoveItemService };
//# sourceMappingURL=RemoveItemService.js.map