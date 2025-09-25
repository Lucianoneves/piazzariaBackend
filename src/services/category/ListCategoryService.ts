 import PrismaClient from "../../prisma/index.js";



 class ListCategoryService {

    async execute(){

        const category = await PrismaClient.category.findMany({
            select:{
                id:true,
                name:true,
            }
        })

        return category;
    }

 }

 export {ListCategoryService}
 