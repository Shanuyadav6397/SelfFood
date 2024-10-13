import express from 'express';
import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';



const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({ message: "pong" });
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${PORT}...!!`);
});