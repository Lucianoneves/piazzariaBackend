import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService.js";

class DetailOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.params; // Pegando o order_id da query da requisição

    const detailOrderService = new DetailOrderService(); // Instanciando a classe DetailOrderService


    const orders = await detailOrderService.execute({ // Chamando o método execute da classe DetailOrderService
        order_id 
    },
)
    return res.json(orders);
  }
}

export { DetailOrderController } 


