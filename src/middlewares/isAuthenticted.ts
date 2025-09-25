import { Request, Response, NextFunction } from 'express'; 
import pkg from 'jsonwebtoken';



const { verify } = pkg;

interface PayLood{
   sub: string;
}




 export function isAuthenticted( 
    req: Request,
    res: Response,
    next: NextFunction
 ){
  const authToken = req.headers.authorization;  

  if(!authToken){
   return res.status(401).end();
  }

 const [, token] = authToken.split(" ")

 try{
   const {sub} = verify(
      token,
      process.env.JWT_SECRET,
   )as PayLood;

   console.log(sub)


    req.user_id = sub;

   return next();



 }catch(err){
   return res.status(401).end();
 }


 
 }