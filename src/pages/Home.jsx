import { Link } from "react-router-dom"

const Home = ({ language }) => {

    return (
        <section id="home">
            <div className="home-text">
                {language === "en" && <div className="home-text">
                    <h4>The power of big AI for your restaurant**</h4>
                    <Link to="/demoinfo" className="orange-button">See how it works</Link>
                    <p>**Yes, it is posible!</p>    
                </div>}
                {language === "es" && <div className="home-text">
                    <h4>El poder de la gran IA para tu restaurante**</h4>
                    <Link to="/demoinfo" className="orange-button">Ver cómo funciona</Link>
                    <p>**¡Sí, es posible!</p>    
                </div>}
                {language === "ca" && <div className="home-text">
                    <h4>The power of big AI for your restaurant**</h4>
                    <Link to="/demoinfo" className="orange-button">Mira com funciona</Link>
                    <p>**¡Sí, és posible!</p>   
                </div>}
            </div>
            <div className="home-img"></div>
        </section>
    )
}

export default Home