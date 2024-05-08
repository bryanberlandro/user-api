import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from "./routes/UsersRoute.js"
import User from './models/UserModel.js';

const app = express();
app.use(cors(
    {
        origin: ['https://user-api-livid-two.vercel.app', 'http://localhost:5173'],
        methods: ["POST", "GET", "PATCH", "DELETE"],
        credentials: true
    }
))

app.get('/', async (req, res) => {
    const db = await User.find({});
    res.send(db)
})

app.use(express.json());
app.use(UserRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('server up and running...'))
