import { ListOrdersService } from '../../services/order/ListOrdersService.js';
class ListOrdersController {
    async handle(req, res) {
        const listOrdersService = new ListOrdersService();
        const orders = await listOrdersService.execute();
        return res.json(orders);
    }
}
export { ListOrdersController };
//# sourceMappingURL=ListOrdersController.js.map