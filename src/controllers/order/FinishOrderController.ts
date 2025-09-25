import  {Request, Response} from 'express';
import { FinishOrderService } from '../../services/order/FinishOrderService.js';




class FinishOrderController{ 
  async handle(req: Request, res: Response){ // req: Request, res: Response
    const { order_id } = req.body;

    const finishOrderService = new FinishOrderService(); // Instanciando a classe FinishOrderService

    const order = await finishOrderService.execute({  // Chamando o método execute da classe FinishOrderService
        order_id 
    });

    return res.json(order);
  }
}

export { FinishOrderController }


