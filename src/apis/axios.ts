import _axios from 'axios'

const instance = _axios.create({
    baseURL: 'https://test.terplayer.org',
    timeout: 30000,
    headers: {
        Authorization: 'Bearer merlinadmin'
    }
})

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        config.headers["Id-Token"] = window.sessionStorage.getItem('jwt')
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error?.response?.data)
    }
)

export default instance
