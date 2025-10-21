import multer from "multer";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  upload(folder: string) {
    return multer({
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", folder),
        filename: (req, file, cb) => {
          const fileHash = crypto.randomBytes(10).toString("hex");
          cb(null, `${fileHash}-${file.originalname}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
          cb(null, true);
        } else {
          cb(new Error("Formato de arquivo não permitido"));
        }
      },
    });
  },
};
