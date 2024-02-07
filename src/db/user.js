import pool from '../../config/index.js'
import { hashPassword,comparePassword } from '../utils/hashPassword.js'


const register = async ({ username, password }) => {
    const hashUser = await hashPassword(password)
    const { rows: user } = await pool.query(`insert into user(username,password) values($1,$2)`, [username, hashUser])
    return user[0]
}
// const login = async ({username,password}) => {

//     const { rows: user } = await pool.query(`select username from user where `,[username,password])
//     return user
// }
export {
    register,
    // login,
}