import mongoose from 'mongoose'

const connectDb = async () => {
    try {
          if (mongoose.connections[0].readyState) return;
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb is connected !")
    }
    catch (err) {
        console.log(err)
    }

}
export {connectDb}