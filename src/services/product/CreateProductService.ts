import PrismaClient from "../../prisma/index.js";
          
      



    interface ProductRequest{ // tipagem dos dados que serão recebidos na requisição 
        name:string;
        description:string;
        price:string;
        banner:string;
        categoryId:string;
    }



  class CreateProductService {
    async execute( {name, price, description, banner, categoryId}:ProductRequest) { // async pq é uma promessa

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