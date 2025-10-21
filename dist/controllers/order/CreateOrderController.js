import { CreateOrderService } from "../../services/order/CreateOrderService.js";
class CreateOrderController {
    async handle(req, res) {
        const { table, name } = req.body; // pegando os dados da requisição
        const createOrderService = new CreateOrderService(); // instanciando a classe
        const order = await createOrderService.execute({
            table,
            name
        }); // passando os dados para o serviço
        return res.json(order); // retornando o pedido criado
    }
}
export { CreateOrderController };
//# sourceMappingURL=CreateOrderController.js.map