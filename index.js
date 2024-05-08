import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from "./routes/UsersRoute.js"

const app = express();
// app.use(cors(
//     {
//         origin: [''],
//         methods: ["POST", "GET", "PATCH", ["DELETE"]],
//         credentials: true
//     }
// ))

app.use(cors());
app.use(express.json());
app.use(UserRoute)

app.listen(3000, () => console.log('server up and running...'))
