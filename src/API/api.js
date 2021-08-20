import axios from 'axios'
const BASE_URL = 'https://reqres.in'

const getHeaders = (options) => {
    // const token = JSON.parse(localStorage.getItem("token"))
    const headers = {
        // "Authorization": `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
        ...options
    }
    return headers
}
function payload(options, type) {
    // const { } = options
    let payload = {}
    payload.headers = getHeaders({})
    switch (type) {
        case "GET":
            return {
                ...payload,
                params: options
            }
        default: return payload
    }

}
function Post(url, config, base = BASE_URL) {
    const { data, options } = config
    return axios.post(`${base}${url}`, data, payload(options, "POST"))
}
function Get(url, config, base = BASE_URL) {
    const { params } = config
    return axios.get(`${base}${url}`, payload(params, "GET"))
}
export const api = {
    login: (config) => Post('/api/login', config),
    getData: (page = 1, config = {}) => Get(`/api/users?page=${page}`, config),
}