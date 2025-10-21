import PrismaClient from "../../prisma/index.js";
class CreateProductService {
    static execute(arg0) {
        throw new Error("Method not implemented.");
    }
    async execute({ name, price, description, banner, categoryId }) {
        if (!name || !price || !description || !banner || !categoryId) {
            throw new Error("Todos os campos são obrigatórios");
        }
        const product = await PrismaClient.product.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                banner,
                category_id: categoryId // renomeando para categoryId
            },
        });
        return product;
    }
}
export { CreateProductService }; // exportando a classe    
//# sourceMappingURL=CreateProductService.js.map