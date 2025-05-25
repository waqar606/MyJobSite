
import express from "express";
import cookieParser from "cookie-parser"; 
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import path from "path";
import bodyParser from 'body-parser'
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";


dotenv.config({});
const app = express();

const _dirname = path.resolve();

app.use(bodyParser.json())


//middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// const corsOptions = {
//     origin: 'https://my-job-site-x1or.vercel.app',
//     // credentials: true
// }
// app.use(cors(corsOptions));


const allowedOrigins = ['https://my-job-site-x1or.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};


const cors = require('cors');
app.use(cors(corsOptions));

//Routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);


//  app.use(express.static(path.join(_dirname,"/frontend/dist")));
//  app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
//  })

//test
app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false
  });
});

const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`server running on port ${PORT}`);
})

