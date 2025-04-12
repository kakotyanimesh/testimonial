import { api } from "./api"



export const deleteAPIkeyCall = async (spaceId : string) => {
    try {
        const res = await api.delete(`/user//deletApikey/${spaceId}`)

        return res.data
    } catch (error) {
        throw new Error(`eRROR AT API key delete ${error}`)
    }
}