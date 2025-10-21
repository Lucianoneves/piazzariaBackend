import { CreateUserService } from "../../services/user/CreateUserService.js";
class CreateUserController {
    async handle(req, res) {
        console.log("REQ BODY:", req.body); // 👈 adicione isso
        const { name, email, password } = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({ name, email, password });
        return res.json(user);
    }
}
export { CreateUserController };
//# sourceMappingURL=CreateUserController.js.map