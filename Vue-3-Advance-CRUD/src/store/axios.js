import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
    config => {
        const token = 'localStorageService.getAccessToken()';
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYyODQwODgyMiwiZXhwIjoxNjMxMDAwODIyLCJuYmYiOjE2Mjg0MDg4MjIsImp0aSI6InZPdW5pRkkzRU9MMHhISVciLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.O9eVRT5W1kCACoZJij0PYhQdzdEgxf4axdPgKW_pdm8';
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

//Add a response interceptor
axios.interceptors.response.use((response) => {
    return response
}, function(error) {
    return Promise.reject(error);
});