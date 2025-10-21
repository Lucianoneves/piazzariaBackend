import { FinishOrderService } from '../../services/order/FinishOrderService.js';
class FinishOrderController {
    async handle(req, res) {
        const { order_id } = req.body;
        const finishOrderService = new FinishOrderService(); // Instanciando a classe FinishOrderService
        const order = await finishOrderService.execute({
            order_id
        });
        return res.json(order);
    }
}
export { FinishOrderController };
//# sourceMappingURL=FinishOrderController.js.map