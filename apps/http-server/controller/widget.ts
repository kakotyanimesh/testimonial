import { prisma } from "@repo/db";
import type { Request, Response } from "express";

export const getwidget = async (req : Request, res : Response) => {
    const { apikey } = req.query

    if(!apikey || typeof apikey !== "string"){
        res.status(400).json({
            msg : "No api key found "
        })
        return
    }

    // get information from db 
    try { 
        const dbCallAPI = await prisma.apiKey.findUnique({
            where : { key : apikey},
            include : {
                spaces : {
                    include : {
                        testimonials : {
                            where : {
                                approaved : true
                            }
                        }
                    }
                }
            }
        })

        if(!dbCallAPI || !dbCallAPI.spaces){
            res.status(401).json({
                msg : "Invalid api key"
            })
            return
        }

        // console.log(dbCallAPI);
        

        res.setHeader('Content-type', 'application/javascript')
        res.status(200).send(dbCallAPI.spaces.testimonials)
    } catch (error) {
        res.setHeader("Content-type", "application/jsvascript")
        res.status(500).send(`Error : ${error instanceof Error ? error.message : "Unknow error at widget "}`)
    }
}