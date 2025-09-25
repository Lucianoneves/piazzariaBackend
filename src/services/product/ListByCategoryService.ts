import PrismaClient from "../../prisma/index.js";

interface ProductRequest { // tipagem dos dados que serão recebidos na requisição
 
    category_id: string; // id da categoria que será usada para filtrar os produtos
}

class ListByCategoryService {
    async execute({category_id}: ProductRequest) { // async pq é uma promessa
        const  findByCategory = await PrismaClient.product.findMany({ // findMany pq pode ter mais de um produto na mesma categoria
            where: { 
                categoryId: category_id  // filtrando pelo id da categoria
                
            }
        });

        return findByCategory;
    }
}
  export { ListByCategoryService }; // exportando a classe