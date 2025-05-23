import { password } from "bun"
import { z } from "zod"

export const signupobject = z.object({
    email : z.string().email({message : "Provide a valid email addess"}),
    username : z.string().max(30, {message : "username must be under 30 letters"}),
    password : z.string().max(50, {message  : "Password must be under 50 words"}),
})


export const signinObject = z.object({
    username : z.string().max(30, {message : "username must be under 30 letters"}),
    password : z.string().max(50, {message : "password must be under 50 letters "})
})


export const spaceObject = z.object({
    name : z.string().max(50, {message : "space name must be under 50 letters"}).min(3, {message : "minimum 3 letters is required for space name"}),
    displayName : z.string().max(200, {message : "max 30 letters is allowed for website name"}).min(7,{message : "minimum 7 letters is required for website url"})
})


export const testimonialObject = z.object({
    spaceId : z.string(),   
    customername : z.string().max(30, {message : "max 30 letters is allowed"}).min(3, {message : "minimum 3 letters are needed"}),
    review : z.string().min(10, {message : "minimum 10 letters needed for a review"}).max(200, {message : "max is 200 for review"}).optional(),
    customeremail : z.string().email(),
    videoUrl : z.string().optional(),
    customerimage : z.string().optional(),
    stars : z.string(),
    customerCompany : z.string().max(30, {message : "max 30 lettes allowed"}).optional()
})


export const testimonialQuestionsObject = z.object({
    spaceId : z.number(),
    formTitle : z.string().max(50, {message : "max 20 charcater is allowed"}),
    formDescripton : z.string().max(200, {message : "max 200 words are allowed"}),
    questionOne : z.string().trim().max(500, {message : "Questions have limit of 500 words"}),
    questionTwo : z.string().trim().max(500, {message : "Questions have limit of 500 words"}),
    questionThree : z.string().trim().max(500, {message : "Questions have limit of 500 words"}),
})