import express from 'express'

import userRouter from './Routes/User.js'
import messageRouter from './Routes/Message.js'
import userDetailsRouter from './Routes/UserDetails.js'
import categoryRouter from './Routes/Category.js'
import productRouter from './Routes/Product.js'
import cartRouter from './Routes/Cart.js'
import wishlistRouter from './Routes/Wishlist.js'
import reviewRouter from './Routes/Review.js'
import feedbackRouter from './Routes/Feedback.js'
import imageRouter from './Routes/Image.js'
import paymentRouter from './Routes/Payment.js'

import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import cors from 'cors'
import { errorMiddleware } from './Middleware/ErrorHandler.js'
import mongoose from 'mongoose'
import { checkForAuthentication } from './Utils/Auth.js'
import fileUpload from 'express-fileupload'
import cloudinary from 'cloudinary'
import Razorpay from 'razorpay'

const PORT = 8000 || process.env.PORT

const app = express()
config({path: './.env'})

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDb Connected!"))

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(checkForAuthentication("CustomerToken"))

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.get('/', (req,res)=>{
    console.log("Hello")
    res.send("Hello")
})

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
)

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_SECRET_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

app.use('/api/v1/user', userRouter)
app.use('/api/v1/message', messageRouter)
app.use('/api/v1/userDetails', userDetailsRouter)
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/wishlist', wishlistRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/feedback', feedbackRouter)
app.use('/api/v1/images', imageRouter)
app.use('/api/v1/payment', paymentRouter)

app.use(errorMiddleware)

app.listen(PORT, (req,res)=>{
    console.log("Server Started")
})