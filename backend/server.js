import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

// APP CONFIG
const app = express()
const port = process.env.PORT || 4000
connectDB()


// MIDDLEWARES
app.use(express.json())
app.use(cors())

// API ENDPPOINTS

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=> console.log("Server Started on Port",port))