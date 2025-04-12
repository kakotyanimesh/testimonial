import { Router } from "express";
import { getwidget } from "../controller/widget";

export const widgetRouter : Router = Router()

widgetRouter.get("/pasteTestimonial", getwidget)