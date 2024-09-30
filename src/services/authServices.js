import axios from "axios";

class authServices {
    constructor () {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/auth`
        })

        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}`}
            };
            return config;
        })
    };


    login(body) {
        return this.api.post('/login', body).then(({ data }) => data).catch( err => console.log(err))
    }

    me() {
        return this.api.get('/me').then(({ data }) => data).catch( err => console.log(err));
    };
}

const authService = new authServices();
export default authService;