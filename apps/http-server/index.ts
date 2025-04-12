import cookieParser from "cookie-parser"
import express, { type Request, type Response } from "express"
import { userRouter } from "./routes/user.routes"
import { spaceRoute } from "./routes/space.routes"
import { testimonialRouter } from "./routes/testimonial.routes"
import cors from "cors"
import { verifyRouter } from "./controller/token.controller"
import { widgetRouter } from "./routes/widgets.routes"
require("dotenv").config()

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    optionsSuccessStatus : 200, 
    credentials : true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

const publicCors = cors({
    origin : "*",
    methods : ['GET']
})

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/space", spaceRoute)
app.use("/api/v1/testimonial", testimonialRouter)
app.use("/api/v1/token_verfify", verifyRouter)
app.use("/widgets",publicCors, widgetRouter)


app.listen(process.env.PORT , () => {
    console.log(`the app is running at http://localhost:${process.env.PORT}`);
    
})