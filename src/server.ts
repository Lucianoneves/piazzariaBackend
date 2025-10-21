import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { router } from './routes.js';
import path from 'path';
import { fileURLToPath } from "url";
import fileUpload from 'express-fileupload';
import 'dotenv/config.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }, // Limite de tamanho do arquivo (50MB)  
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));
app.use(router);



app.use('/files', // rota para acessar os arquivos estáticos (imagens)
   express.static(path.resolve(__dirname, '..', 'tmp'))); // rota para acessar os arquivos estáticos (imagens)

// Middleware de tratamento de erros global
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    // Se for uma instancia do tipo error
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  });
});

app.listen(process.env.PORT, () => console.log('Servidor Rodandooooo'));
