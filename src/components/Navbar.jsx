import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

const Navbar = ({ language, setLanguage}) => {

    const { user, logOutUser } = useAuth();

    const handleSetLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <nav>
            <hr></hr>
            <div className="banner">
                <h2>Artesan IA</h2>
                {language === "en" && <p>We investigate the market so that you can focus on <span>what you truly care about</span></p>}
                {language === "ca" && <p>Investiguem el mercat per a que tu et puguis centrar <span>en lo que t'importa</span></p>}
                {language === "es" && <p>Investigamos el mercado para que puedas concentrarte <span>en lo que realmente te importa</span></p>}
                <div className="links">
                <div className="dropdown">
                    <p className="language">{language.toUpperCase()} <span>▼</span></p>
                    <div className="lang-menu">
                    {language !== "es" && <Link href="#" onClick={() => handleSetLanguage("es")}>ES</Link>}
                    {language !== "ca" && <Link href="#" onClick={() => handleSetLanguage("ca")}>CA</Link>}
                    {language !== "en" && <Link href="#" onClick={() => handleSetLanguage("en")}>EN</Link>}
                    </div>  
                </div>
                <Link to={'/'}>Home</Link>
                <Link to={'/demoinfo'}>Demo</Link>
                {user && user.type === "admin" && <Link to={'/labeling'}>Labeling</Link>}
                {<Link to={'/dashboard'}>Dashboard</Link>}
                {user && <Link href="#" onClick={logOutUser}>Log out</Link>}
                </div>
            </div>
            <hr></hr>
        </nav>
    )
}

export default Navbar