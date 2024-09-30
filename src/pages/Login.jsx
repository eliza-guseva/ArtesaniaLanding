import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import authService from "../services/authServices";


const Login = () => {

    const initialForm = {
        username: "",
        password: ""
    };

    const [form, setForm] = useState(initialForm);
    const [errorMessage, setErrorMessage] = useState(undefined);

    const handleChange = (e) => {
        setForm(prev => {
            return ({
                ...prev,
                [e.target.name]: e.target.value
            })
        });
    };

    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login(form);
            if (response.authToken) {
                storeToken(response.authToken);
                authenticateUser();
                navigate('/demoinfo');
            } else {
                setErrorMessage('Unable to authenticate user 1');
            }
        } catch (error) {
            setErrorMessage('Unable to authenticate user 2');
        }
    };

    return (
        <section>
            <form action="/auth/login" method="post" id="login">

                <div className="form-input">
                    <label>Username</label>
                    <input type="text" name="username" value={form.username} onChange={handleChange} />    
                </div>
                
                <div className="form-input">
                    <label>Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} />    
                </div>

                <button type="submit" className="form-button" onClick={handleSubmit}>Log in</button>
            </form>
            { errorMessage && <p className="error-message">{errorMessage}</p> }    
        </section>
    )
}

export default Login