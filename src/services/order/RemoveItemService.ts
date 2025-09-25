import PrismaClient from "../../prisma/index.js";




interface ItemRequest { // tipagem dos dados que serão recebidos na requisição
  item_id: string; // id do item that será removido
  }


  class RemoveItemService {
    async execute({ item_id }: ItemRequest) { // método que executa a remoção do item 
      

      const order = await PrismaClient.item.delete({ // deletando o item do banco de dados
        where: {
          id: item_id
        }
      });
      return order;
    }
  }

  export { RemoveItemService };