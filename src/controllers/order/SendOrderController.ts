 import { Request, Response } from "express";
 import { SendOrderService } from "../../services/order/SendOrderService.js";

 class SendOrderController {
   async handle(req: Request, res: Response) {
     const { order_id } = req.body; // pegando o id do pedido que será enviado


     const sendOrder = new SendOrderService();
     
     const order = await sendOrder.execute({
         order_id
         });


     return res.json(order);
   }
}
    export { SendOrderController }