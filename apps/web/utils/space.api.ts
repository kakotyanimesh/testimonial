import axios  from "axios";


export const baseUrl = process.env.BASE_URL || "http://localhost:4000/api/v1"

const api = axios.create({
    baseURL : baseUrl,
    withCredentials : true
})



export const deleteSpacecall = async (spaceId : number) => {
    try {
        const res = await api.delete(`/space/deleteSpace/${spaceId}`)
        
        return res.data
    } catch (error) {
        throw new Error(`error while deleting space ${error}`)
    }
}

