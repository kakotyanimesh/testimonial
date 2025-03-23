import cookieParser from "cookie-parser"
import express, { type Request, type Response } from "express"
import { userRouter } from "./routes/user.routes"
import { spaceRoute } from "./routes/space.routes"
import { testimonialRouter } from "./routes/testimonial.routes"
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/space", spaceRoute)
app.use("/api/v1/testimonial", testimonialRouter)


app.listen(process.env.PORT , () => {
    console.log(`the app is running at http://localhost:${process.env.PORT}`);
    
})