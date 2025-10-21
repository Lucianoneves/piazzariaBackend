import PrismaClient from "../../prisma/index.js";
class DetailUserSercice {
    async execute(user_id) {
        const user = await PrismaClient.user.findFirst({
            where: {
                id: user_id // buscando pelo id do usuário
            },
            select: {
                id: true,
                name: true,
                email: true // selecionando apenas os campos que queremos retornar
            }
        });
        return user;
    }
}
export { DetailUserSercice };
//# sourceMappingURL=DetailUserService.js.map