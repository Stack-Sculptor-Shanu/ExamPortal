require("dotenv").config()
const express=require("express")
const cors=require("cors")
const userRoute = require("./routes/UserRoutes")
const ConnectDB = require("./config/db")
const app=express()
const port = 3000
//!Connect to database
ConnectDB()
//!Middleware
app.use(express.json())
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];
app.use(cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));
//!router
app.use("/api",userRoute)
//!Server is running below
app.listen(process.env.port || port,()=>{
    console.log(`Server is running in http://localhost:${process.env.port || port}`)
})