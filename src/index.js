import express from 'express';
import connectDB from './config/dataBaseConfig.js';
import { PORT } from './config/serverConfig.js';



const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({ message: "success" });
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}...!!`);
});

import { userRouter } from './routes/userRoute.js';
app.use('/api/v1/user', userRouter);