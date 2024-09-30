import axios from "axios";

class labelsService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/labels`
        })

        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}`}
            };
            return config;
        })
    }

    getRandomLabel() {
        return this.api.get('/').then(({ data }) => data).catch(err => console.error(err))
    }

    updateLabel(id, body) {
        return this.api.put(`/${id}`, body).then(({ data }) => data).catch(err => console.error(err))
    }
}

const labelService = new labelsService();
export default labelService;