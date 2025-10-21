import PrismaClient from "../../prisma/index.js";
import { hash } from "bcryptjs"; //biblioteca para criptografar senha evitar ataques
class CreateUserService {
    async execute({ name, email, password }) {
        //verificar se o email foi  enviado
        if (!email) {
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await PrismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        const passwordHash = await hash(password, 8); //hash da senha com 8 caracteres
        //verificar se o email ja esta cadastrado na plataforma
        const user = await PrismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash //senha criptografada escondida
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        return user;
    }
}
export { CreateUserService };
//# sourceMappingURL=CreateUserService.js.map