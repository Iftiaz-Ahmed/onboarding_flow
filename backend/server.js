import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import adminRouter from './routes/adminRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// Middlewares
app.use(express.json())
app.use(cors())

// Api Endpoints
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

app.get('/', (req, res)=> {
    res.send("API working")
})

app.listen(port, ()=> console.log('Server started on PORT: ' + port))