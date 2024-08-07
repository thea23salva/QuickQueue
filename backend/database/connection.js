import mongoose from 'mongoose';

const connection = async () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB is connected")
    }).catch((err) => {
      console.log("Failed to connect MongoDB", err)
    })
}

export { connection }