import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/UserModel.js'
import Order from './models/orderModel.js'
import Product from './models/ProductModel.js'
import products from './products.js'
import Users from './Users.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(Users)
    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported . ', adminUser)
    process.exit()
  } catch (error) {
    console.log('Error . ', error)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed. ')
  } catch (error) {
    console.log('Error . ', error)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
