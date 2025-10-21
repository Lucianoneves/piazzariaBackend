import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController.js';
import { AuthUserController } from './controllers/user/AuthUserController.js';
import { DetailUserController } from './controllers/user/DetailUserController.js';
import { CreateCategoryController } from './controllers/category/CreateCategoryController.js';
import { ListCategoryController } from './controllers/category/ListCategoryController.js';
import { CreateProductController } from './controllers/product/CreateProductController.js';
import { ListByCategoryController } from './controllers/product/ListByCategoryController.js';
import { CreateOrderController } from './controllers/order/CreateOrderController.js';
import { RemoveOrderController } from './controllers/order/RemoveOrderController.js';
import { AddItemController } from './controllers/order/AddItemController.js';
import { RemoveItemController } from './controllers/order/RemoveItemController.js';
import { SendOrderController } from './controllers/order/SendOrderController.js'; // Importando o controlador SendOrderController
import { ListOrdersController } from './controllers/order/ListOrdersController.js'; // Importando o controlador ListOrdersController
import { DetailOrderController } from './controllers/order/DetailOrderController.js'; // Importando o controlador DetailOrderController
import { FinishOrderController } from './controllers/order/FinishOrderController.js'; // Importando o controlador FinishOrderController
import { isAuthenticted } from './middlewares/isAuthenticted.js';
const router = Router();
//-- ROTAS USER --
router.post('/users', new CreateUserController().handle); // criar usuario
// ROTA DE AUTENTICAÇÃO SENHA E LOGIN
router.post('/session', new AuthUserController().handle); // Rota de autenticação de usuário
router.get('/me', isAuthenticted, new DetailUserController().handle); // Rota que traz os detalhes do usuário logado
//-- Rotas Category --
router.post("/category", new CreateCategoryController().handle); // Criar categoria
router.get('/category', isAuthenticted, new ListCategoryController().handle); // Listar categorias
//-- Rotas Produto --
//router.post("/product", uploadConfig.upload("tmp").single("file"), new CreateProductController().handle); // Rota para criar produtos com upload de imagem
router.post("/product", isAuthenticted, new CreateProductController().handle); // Rota para criar produtos com upload de imagem
router.get('/category/product', isAuthenticted, new ListByCategoryController().handle); // Rota para listar produtos por categoria
//-- Rotas Ordem/Pedidos --
router.post('/order', isAuthenticted, new CreateOrderController().handle); // servirá para criar uma nova ordem/pedido
router.delete('/order', isAuthenticted, new RemoveOrderController().handle);
//-- Rotas Itens Ordem/Pedidos --
router.post('/order/add', isAuthenticted, new AddItemController().handle); // Rota para adicionar um item ao pedido
router.delete('/order/remove', isAuthenticted, new RemoveItemController().handle);
router.put('/order/send', isAuthenticted, new SendOrderController().handle); // 
router.get('/orders', isAuthenticted, new ListOrdersController().handle); // Rota para listar todos os pedidos que já foram finalizados (status: true e draft: false)
router.get('/order/detail', isAuthenticted, new DetailOrderController().handle); // Rota para listar os detalhes de um pedido específico (itens do pedido) pelo order_id
router.put('/order/finish', isAuthenticted, new FinishOrderController().handle); // Rota para finalizar um pedido (mudar o status para true)
export { router };
//# sourceMappingURL=routes.js.map