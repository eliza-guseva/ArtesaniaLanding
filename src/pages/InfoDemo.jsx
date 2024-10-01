import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const InfoDemo = ({ language }) => {

    const { user, isLoading } = useAuth();

    return (
        <>
            {!isLoading && <section id="demo">
                <div className="background-clear"></div>
                {language === "en" && <div className="demo-work">
                    {/* {!user && <Link to={'/login'} className="orange-button login">Log in</Link>} */}
                    {user && <p>Hello {user.username}</p>}
                    <h4>We are working on our demo.</h4>
                    <p>Important! Please read.</p>
                    <p>If we have given you an username and password you can press the button on top to log in and see the early access demo.</p>
                    <p className="light-font">If you want to get credentials to see the demo, please write us in the contact mail</p>
                    <Link to="/ArtesaniaLanding/demo" className="orange-button">See the demo</Link>
                </div>}
                {language === "ca" && <div className="demo-work">
                    {/* {!user && <Link to={'/login'} className="orange-button login">Log in</Link>} */}
                    {user && <p>Hola {user.username}</p>}
                    <h4>Estem treballant en la nostra demo.</h4>
                    <p>Important! Si us plau, llegir.</p>
                    <p>Si us hem donat un username i una paraula de pas, podeu prémer el botó d'adalt per iniciar sessió i veure la demostració.</p>
                    <p className="light-font">Si voleu obtenir les credencials per veure la demostració, escriviu-nos al correu electrònic.</p>
                    <Link to="/ArtesaniaLanding/demo" className="orange-button">Veure la demo</Link>
                </div>}
                {language === "es" && <div className="demo-work">
                    {/* {!user && <Link to={'/login'} className="orange-button login">Log in</Link>} */}
                    {user && <p>Hola {user.username}</p>}
                    <h4>Estamos trabajando en nuestra demo.</h4>
                    <p>¡Importante! Por favor lea.</p>
                    <p>Si le hemos proporcionado un username y una contraseña, puede presionar el botón arriba para iniciar sesión y ver la demostración.</p>
                    <p className="light-font">Si desea obtener credenciales para ver la demostración, escríbanos en el correo electrónico.</p>
                    <Link to="/ArtesaniaLanding/demo" className="orange-button">Ver la demo</Link>
                </div>}
            </section>}                
        </>

    )
}

export default InfoDemo