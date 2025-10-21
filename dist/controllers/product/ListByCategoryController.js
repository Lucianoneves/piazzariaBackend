import { ListByCategoryService } from "../../services/product/ListByCategoryService.js";
class ListByCategoryController {
    async handle(req, res) {
        const category_id = req.query.category_id; // pegando o id da categoria dos parametros da requisição
        console.log("category_id recebido:", category_id);
        const listByCategoryService = new ListByCategoryService(); // instanciando a classe
        const products = await listByCategoryService.execute({
            category_id
        }); // passando o id da categoria para o serviço
        return res.json(products);
    }
}
export { ListByCategoryController };
//# sourceMappingURL=ListByCategoryController.js.map