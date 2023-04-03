import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1'

export const getCandidates = async () => {
    const response = await axios.get(`${BASE_URL}/candidate`)
    return response.data
}

export const createCandidate = async (candidateData) => {
    const response = await axios.post(`${BASE_URL}/candidate/new`, candidateData)
    return response.data
}

export const updateCandidate = async (candidateData) => {
    const response = await axios.put(`${BASE_URL}/candidate/${candidateData.id}`, candidateData)
    return response.data
}

export const deleteCandidate = async (candidateId) => {
    const response = await axios.delete(`${BASE_URL}/candidate/${candidateId}`)
    return response.data
}
