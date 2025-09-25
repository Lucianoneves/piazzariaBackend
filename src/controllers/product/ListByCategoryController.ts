import { Request, Response } from "express"; 
import { ListByCategoryService } from "../../services/product/ListByCategoryService.js";

class ListByCategoryController {
    async handle(req: Request, res: Response) { // async pq é uma promessa
        const  category_id  = req.query.category_id as string; // pegando o id da categoria dos parametros da requisição

        console.log("category_id recebido:", category_id);
        
        const listByCategoryService = new ListByCategoryService(); // instanciando a classe

        const products = await listByCategoryService.execute({
             category_id
            }); // passando o id da categoria para o serviço



        return res.json(products);
    }
}

export { ListByCategoryController } 
