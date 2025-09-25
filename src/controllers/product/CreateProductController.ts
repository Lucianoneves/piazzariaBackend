import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService.js";

 class CreateProductController {
    async handle(req:Request, res:Response){ // async pq é uma promessa
        const {name, price, description,category_id} = req.body; // pegando os dados do corpo da requisição

        const createProductService = new CreateProductService();

  
      if(!req.file){
        throw new Error("Error upload file")
      }else{

        const {originalname, filename: banner} = req.file; // pegando o nome do arquivo e renomeando para banner

    

         const product =  await createProductService.execute({  // passando os parametros 
            name,
            price,
            description,
            banner,
            categoryId: category_id // renomeando para categoryId 
        });
        return res.json(product);
      }   

    }
}

export {CreateProductController}  
      

