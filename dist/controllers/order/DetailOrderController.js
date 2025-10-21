import { DetailOrderService } from "../../services/order/DetailOrderService.js";
class DetailOrderController {
    async handle(req, res) {
        const order_id = req.query.order_id; // ✅ correto
        const detailOrderService = new DetailOrderService();
        const orders = await detailOrderService.execute({ order_id });
        return res.json(orders);
    }
}
export { DetailOrderController };
//# sourceMappingURL=DetailOrderController.js.map