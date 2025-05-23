import axios  from "axios";


export const baseUrl = process.env.BASE_URL || "http://localhost:4000/api/v1"

export const api = axios.create({
    baseURL : baseUrl,
    withCredentials : true
})


export const signupcall = async (userdata : {username : string , password : string, email : string}) => { 
    try {
        const res = await api.post("/user/signup", userdata)
        return res.data
    } catch (error) {
        console.error(`error while sign up ${error}`)
        throw error
    }
}

export const signincall = async (userdata : {username : string, password : string}) => {
    try {
        const res = await api.post("/user/signin", userdata)
        // console.log(res.data);
        
        return res.data
    } catch (error) {
        console.error(`error while signin ${error}`)
        throw error
    }
}

export const verrifyToken = async(Access_token : string) => {
    try {
        const res = await api.post("/token_verfify/access_token", {}, {
            headers : {
                Authorization : `${Access_token}`
            }
        })

        // console.log(res);
        return res
        
    } catch (error) {
       throw new Error(`error while verifying token ${error}`) 
    }
}


export const createSpacecall = async({name, displayName} : {name : string, displayName : string}) => {
    try {
        const res = await api.post(`/space/createspace`, {
            displayName,
            name
        })
        return res.data
    } catch (error) {
        throw new Error(`error while creating space ${error}`)
    }
}

export const getSpacecall = async() => {
    try {
        const res = await api.get(`/space/getAllSpace`)
        // console.log(res);
        
        return res.data
    } catch (error) {
        // throw new Error(`error while fetching space data from server ${error}`)
        console.error(error)
    }
}


export const getonespacedatacall = async ({id} : {id : string}) => {
    try {
        const res = await api.get(`/space/getSpaceData/${id}`)
        // console.log(res);
        
        return res.data.spaceData
    } catch (error) {
        throw new Error(`error while fetching single space data ${error}`)
    }
}


export const createFormcall = async({spaceId, questionOne, questionTwo, questionThree, formTitle, formDescripton } : {spaceId : number, questionOne : string, questionTwo : string, questionThree : string, formTitle : string,formDescripton : string }) => {
    try {
        const res = await api.post(`/testimonial/createTestimonialForm`, {
            spaceId,
            questionOne,
            questionTwo, 
            questionThree,
            formDescripton,
            formTitle
        })
        
        return res.data
    } catch (error) {
        throw new Error(`error while creating form ${error}`)
    }
}


export const getTestimonialFormDataCall = async({spaceId} : {spaceId : number}) => {
    try {
        const res = await api.get(`/testimonial/getTestimonialFormData/${spaceId}`)

        
        return res.data.testimonialQuestionData
    } catch (error) {
        throw new Error(`error while calling testimonial form question ${error}`)
    }
}


export const getClientSideQuestionsCall = async ({uniqueLink} : {uniqueLink : string}) => {
    try {
        const res = await api.get(`/testimonial/customerTestimonialQuestions/${uniqueLink}`)

        
        return res.data.testimonialQuestions
    } catch (error) {
        throw new Error(`error while calling testimonial form question ${error}`)
        
    }
}


export const submitTestimonialCall = async (formData : FormData) => {
    try {
        const res = await api.post(`/testimonial/submitTestimonial`, formData, {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })

        return res.data
    } catch (error) {
        throw new Error(`error while uploading testimonial ${error}`)
        
    }
}


export const deleteTestimonialFormCall = async (uniqueLink : string)=> {
    try {
        const res = await api.delete(`/testimonial/deleteTestimonialFrom/${uniqueLink}`)

        // console.log(res);
        
        return res.data
    } catch (error) {
        throw new Error(`error while deleteting testimonial ${error}`)
        
    }
}


export const apikeycall = async (spaceId : number) => {
    try {
        const res = await api.post(`/user/generateApikey/${spaceId}`)


        return res.data.saveInDB.key

    } catch (error) {
        throw new Error(`"error at generating api key ${error}`)
    }
} 


export const getAPIcall = async (spaceId : number) => {
    try {
        const res = await api.get(`/user/getApikey/${spaceId}`)
        // console.log(res.data);
        
        return res.data.apikey.key
    } catch (error) {
        throw new Error(`error at getting api key ` , {cause : error})
    }
}