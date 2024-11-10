import type { Response, Request } from "express";
import { CustomError, UserCreateUserDto } from "../../domain";
import { UserServices } from "../services/user.service";




export class UserController{
    constructor(
        private readonly userServices : UserServices   
    ){};

    // Errors
    private getErrorMessage = (error: unknown, res:Response):Response<any, Record<string, any>>=>{
        if(error instanceof CustomError){
            return res.status(error.statusCode).json({message: error.message});
        }
        return res.status(500).json({message: 'Something went very wrong! 🧨'})
    };

    createUser = (req:Request, res:Response):void=>{
        const [error, createUserDto] = UserCreateUserDto.create(req.body);
      
        if(error){
            res.status(422).json(error);
            return 
        }

        this.userServices.create(createUserDto!)
            .then(user => res.status(200).json(user))
            .catch(( error: unknown)=> this.getErrorMessage(error, res));

    }


}