 import PrismaClient from "../../prisma/index.js";

interface CategoryRequest{
  name: string;
}

class CreateCategoryService{
  async execute({ name }: CategoryRequest){
    
    if(name === ''){
      throw new Error('Name invalid')
    }

    const category = await PrismaClient.category.create({
      data:{
        name: name,
      },
      select:{
        id: true,
        name: true,
      }
    })


    return category;

  }
}

export { CreateCategoryService }