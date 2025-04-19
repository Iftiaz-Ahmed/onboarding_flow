import express from 'express'
import { updateComponent, getComponent } from '../controllers/adminController.js'

const adminRouter = express.Router();

adminRouter.post('/updateComponent', updateComponent)
adminRouter.get('/component', getComponent)

export default adminRouter;