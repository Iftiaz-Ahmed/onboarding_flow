import express from 'express'
import { loginUser, updateUserData, userList } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/login', loginUser)
userRouter.post('/updateUser', updateUserData)
userRouter.post('/userList', userList)

export default userRouter;