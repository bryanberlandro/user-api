import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from "./routes/UsersRoute.js"

const app = express();
app.use(cors(
    {
        origin: ['https://user-data-bryan-berlandros-projects.vercel.app'],
        methods: ["POST", "GET", "PATCH", "DELETE"],
        credentials: true
    }
))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(express.json());
app.use(UserRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('server up and running...'))
