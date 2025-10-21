import prisma from "../../prisma/index.js";

class CreateCategoryController {
  async handle(req, res) {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Nome obrigatório" });

    const category = await prisma.category.create({
      data: { name },
    });
    return res.json(category);
  }
}

export { CreateCategoryController };
