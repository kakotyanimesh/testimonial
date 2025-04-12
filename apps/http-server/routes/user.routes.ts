import { Router } from "express";
import { deleteAPIkey, generateAPIkey, getAPIKey, signin, signup } from "../controller/user.controller";
import { authMiddleware } from "../middleware/auth";

export const userRouter : Router = Router()


userRouter.post("/signup", signup)
userRouter.post("/signin", signin)
userRouter.post("/generateApikey/:spaceId",authMiddleware, generateAPIkey)
userRouter.get("/getApikey/:spaceId",authMiddleware, getAPIKey)
userRouter.delete("/deletApikey/:spaceId", authMiddleware, deleteAPIkey)