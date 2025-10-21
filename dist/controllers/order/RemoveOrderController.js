import { RemoveOrderService } from "../../services/order/RemoveOrderService.js";
class RemoveOrderController {
    async handle(req, res) {
        try {
            const order_id = req.query.order_id; // pegando o id do pedido que será removido da query da requisição
            const removeOrderService = new RemoveOrderService(); // instanciando a classe RemoveOrderService
            const order = await removeOrderService.execute({
                order_id,
            });
            return res.json(order);
        }
        catch (err) { // capturando o erro
            return res.status(400).json({ error: err.message }); // retornando o erro para o cliente com status 400 (bad request
        }
    }
}
export { RemoveOrderController };
//# sourceMappingURL=RemoveOrderController.js.map