import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService.js";

class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    console.log("🟡 order_id recebido:", order_id);

    if (!order_id) {
      return res.status(400).json({ error: "❌ order_id não foi enviado na URL" });
    }

    try {
      const removeOrder = new RemoveOrderService();
      const order = await removeOrder.execute({ order_id });
      return res.json({ message: "✅ Pedido deletado com sucesso!", order });
    } catch (error: any) {
      console.log("❌ Erro no serviço:", error.message);
      return res.status(400).json({ error: error.message });
    }
  }
}

export { RemoveOrderController };
