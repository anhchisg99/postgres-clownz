import {
    register,
} from "../db/user.js";

class UserService {
    registerService = async (user) => {
        try {

            return await register(user);
        } catch (error) {
            throw new Error("not create user!!")
        }
    }
 
   
   
}

export default new UserService