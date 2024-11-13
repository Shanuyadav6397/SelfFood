import express from 'express';
import connectDB from './config/dataBaseConfig.js';
import { CORS_ORIGIN, PORT } from './config/serverConfig.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';



const app = express();

app.use(
    cors({
      origin: CORS_ORIGIN,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    })
  );

app.use(express.json({limit: '32kb'}));
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({ message: "success" });
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}...!!`);
});

import { userRouter } from './routes/userRoute.js';
import { authRouter } from './routes/userAuthRoute.js';
import { productRouter } from './routes/productRoute.js';
import { feedbackRouter } from './routes/feedbackRoute.js';
import { orderRouter } from './routes/orderRoute.js';
app.use('/api/v1/user', userRouter);
app.use('/api/v1/user', authRouter);
app.use('/api/v1/user', productRouter);
app.use('/api/v1/user', feedbackRouter);
app.use('/api/v1/order', orderRouter);