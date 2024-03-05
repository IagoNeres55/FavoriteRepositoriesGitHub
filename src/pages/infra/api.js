import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/repos'
})



const getInformation = async (caminhorepo) => {
    try {
        const response = await api.get(`/${caminhorepo}`)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export default getInformation;



const getRepoIssues = async (caminhorepo) => {
    try {
        const response = await api.get(`${caminhorepo}/issues`, {
            params: {
                state: 'open',
                per_page: 5
            }
        })
        return response.data

    } catch (error) {
        console.log(error)
        return null
    }
}

export { getInformation, getRepoIssues };