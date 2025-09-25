import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';

import { router } from './routes.js';

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(express.json());
app.use(cors());

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

app.listen(3333, () => console.log('Servidor onlineeeeee'));
