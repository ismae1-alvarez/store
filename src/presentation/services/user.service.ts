import { UserCreateUserDto } from "../../domain";

export class UserServices {
    constructor(){}

    async create(userData:UserCreateUserDto){
        const { email, username } = userData;

        console.log("Holas")
        // return { email, username}
    }
}