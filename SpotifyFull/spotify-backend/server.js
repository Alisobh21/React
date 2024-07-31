import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRoute from './src/routes/albumRoute.js';


//App Config
const app = express();
const port = process.env.PORT || 4000;

connectDB()
connectCloudinary();


//Middlewares 
app.use(express.json())
app.use(cors())

//Routing
app.use('/api/song',songRouter)
app.use('/api/album',albumRoute)


//inital Routes
app.get('/',(req,res)=>{
    res.send('Working')
})


app.listen(port,()=>{
    console.log(`Server run on Port ${port}`);
})
