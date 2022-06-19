import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)

    console.log('connected to DataBase', connect.connection.host.yellow.bold)
  } catch (error) {
    console.log('DataBaes Connection Failed', error.message)
  }
}

export default connectDB
