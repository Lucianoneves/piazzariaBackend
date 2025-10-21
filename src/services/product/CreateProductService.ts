import PrismaClient from "../../prisma/index.js";
          
      



    interface ProductRequest{ // tipagem dos dados que serão recebidos na requisição 
        name:string;
        description:string;
        price:string;
        banner:string;
        categoryId:string;
    }



  class CreateProductService {
    static execute(arg0: { name: void; price: any; description: any; banner: string; category_id: any; }) {
      throw new Error("Method not implemented.");
    }
    async execute( {name, price, description, banner, categoryId}:ProductRequest) { // async pq é uma promessa
         if (!name || !price || !description || !banner || !categoryId) {
         throw new Error("Todos os campos são obrigatórios");
         }

        const product = await PrismaClient.product.create({
            data:{
                name,
                description,
                 price: parseFloat(price),
                banner,
                category_id: categoryId // renomeando para categoryId
            },
        })
        return product;
    }
  }

  export { CreateProductService }; // exportando a classe    