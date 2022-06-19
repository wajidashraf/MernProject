import colors from 'colors'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// import products from './products.js'
import User from './models/UserModel.js'
import Product from './models/ProductModel.js'
import bcrypt from 'bcrypt'
import router from './routes/productRoutes.js'
import { Error_Handler, Not_Found } from './Midlewares/error_Midleware.js'
const app = express()
dotenv.config()
app.use(cors())

connectDB()

app.use('/api/products', router)

app.use('/api/products', router)

// Error handler MiddleWare
app.use(Not_Found)

app.use(Error_Handler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server is runing on PORT ${PORT} in ${process.env.MODE_ENV}`.blue.underline
  )
})
