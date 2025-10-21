import PrismaClient from "../../prisma/index.js";
class ListByCategoryService {
    async execute({ category_id }) {
        const findByCategory = await PrismaClient.product.findMany({
            where: {
                category_id: category_id // filtrando pelo id da categoria
            }
        });
        return findByCategory;
    }
}
export { ListByCategoryService }; // exportando a classe
//# sourceMappingURL=ListByCategoryService.js.map