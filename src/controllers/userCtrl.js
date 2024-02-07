
import UserService from "../services/userService.js";

const register = async (req, res) => {

    const { username, password } = req.body
    const results = await UserService.registerService({ username, password })
    res.status(201).json({
        status: "success",
        results
    })

}

export {
    register,
}