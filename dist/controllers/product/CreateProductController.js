import prisma from "../../prisma/index.js";
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
class CreateProductController {
    async handle(req, res) {
        try {
            const { name, price, description, category_id } = req.body;
            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).json({ error: "Imagem do produto é obrigatória" });
            }
            const file = req.files["file"];
            console.log("📦 Arquivo recebido:", {
                name: file.name,
                size: file.size,
                mimetype: file.mimetype,
                tempFilePath: file.tempFilePath,
            });
            // Verifica se o arquivo temporário realmente existe
            if (!file.tempFilePath || !fs.existsSync(file.tempFilePath)) {
                return res.status(400).json({ error: "Arquivo temporário não encontrado." });
            }
            // 🔥 Upload com leitura de arquivo
            const resultFile = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: "produtos",
                resource_type: "auto",
            });
            console.log("✅ Upload concluído com sucesso:", resultFile.secure_url);
            // Remove o arquivo temporário depois do upload
            fs.unlinkSync(file.tempFilePath);
            // Cria o produto no banco
            const product = await prisma.product.create({
                data: {
                    name,
                    price: parseFloat(price),
                    description,
                    banner: resultFile.secure_url, // Usando a URL segura do Cloudinary
                    category_id,
                },
            });
            return res.status(201).json({
                message: "Produto criado com sucesso!",
                product,
            });
        }
        catch (error) {
            console.error("🚨 Erro ao criar produto:", error);
            return res.status(500).json({
                error: "Erro interno ao criar o produto",
                details: error.message,
            });
        }
    }
}
export { CreateProductController };
//# sourceMappingURL=CreateProductController.js.map