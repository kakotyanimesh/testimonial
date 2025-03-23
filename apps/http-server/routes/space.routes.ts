import { Router } from "express";
import { createSpace, deleteSpace, getAllSpace, getSpaceData, updateSpaceData } from "../controller/space.controller";
import { authMiddleware } from "../middleware/auth";

export const spaceRoute : Router = Router()


spaceRoute.post('/createspace', authMiddleware ,createSpace)
spaceRoute.get("/getAllSpace",authMiddleware, getAllSpace)
spaceRoute.get("/getSpaceData/:spaceId",authMiddleware, getSpaceData)
spaceRoute.put("/updateSpaceData",authMiddleware,  updateSpaceData)
spaceRoute.delete("/deleteSpace/:spaceId",authMiddleware, deleteSpace)