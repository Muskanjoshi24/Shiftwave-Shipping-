import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';

//import router
import bidshipmentRouter from './routes/bidshipment.router.js';
import categoryRouter from './routes/category.router.js';
import shipmentRouter from './routes/shipment.router.js';
import subcategoryRouter from './routes/subcategory.router.js';
import userRouter from './routes/user.router.js';


const app=express();

// we cors to prevent from cross plateform origin error
app.use(cors());
//import api routers

//to extract body data from request (POST , PUT , DELETE , PATCH)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));//urlencode is used to decode data
 

//to handle file content
app.use(fileUpload());

//to allow cross origin request
app.use(cors());

//to allow cross origin request


//route level middleware to load api router
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",subcategoryRouter);
app.use("/shipment",shipmentRouter);
app.use("/bid",bidshipmentRouter)



app.listen(3001);
console.log("server invoked at link http://localhost:3001");
