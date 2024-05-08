import mongoose from "mongoose";
import "dotenv/config"

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongooDB")
    })
    .catch((err) => {
        console.log(err)
    })

export default mongoose;