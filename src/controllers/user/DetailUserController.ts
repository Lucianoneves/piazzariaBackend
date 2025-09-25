import { Request, Response} from "express";

import { DetailUserSercice } from '../../services/user/DetailUserService.js'

class DetailUserController {
  async handle(req: Request, res: Response) {

    const user_id = req.user_id;
  
  
     const detailUserService = new DetailUserSercice();

        const user= await detailUserService.execute(user_id);

   
        return res.json(user);
     

  }
}

export { DetailUserController };