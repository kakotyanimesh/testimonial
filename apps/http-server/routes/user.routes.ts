import { Router } from "express";
import { signin, signup } from "../controller/user.controller";

export const userRouter : Router = Router()


userRouter.post("/signup", signup)
userRouter.post("/signin", signin)