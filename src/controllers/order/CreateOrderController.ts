import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService.js";
import prisma from "../../prisma/index.js";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;

    const createOrderService = new CreateOrderService();

   const order = await prisma.order.create({
  data: {
    table,
    name
  }
});


    return res.json(order);
  }
}

export { CreateOrderController };


