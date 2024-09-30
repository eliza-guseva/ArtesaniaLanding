
const Demo = ({ language }) => {

    return (
        <>
            {language === "en" && <section id="show">
                <section className="in-progress">
                    <div className="announcement">
                        <h4>WELCOME</h4>
                        <p>We are working on our demo for you. At the moment you will only be able to see the main outlines of the features 
                            that will be available t our customers. We'll add notes next to every one of them to explain what we plan to add.</p>
                        <p>Excuse us for our current appearance. 
                            The website UI/UX will eventually be a proper interactive dashboard for restaurant owners</p>            
                    </div>
                </section>
                <section className="in-progress-info">
                    <div className="text">
                        <p>All our data and examples are based on one real restaurant in Barcelona that we really enjoy and frequent.
                        This restaurant had a couple of tough months, when the quality visibly gone down. So we wanted to see what went 
                        wrong and which opportunities they have now. All data is limited to 2023-02-14</p>
                        <p className="span">Our UI is a subject to change according to our conversation with our restaurant contacts.</p>    
                    </div>
                </section>
                <section className="in-progress-example">
                    <div className="example">
                        <h3 className="category">Basic feature #1</h3>
                        <h4>Overall and local comparison accourding to user ratings</h4>
                        <p>The following figure compares the chosen restaurant with all other restaurants in the city 
                            where the restaurant is located. In the future this graph will be interactive, so that restaurant owner 
                            can zoom in and for example see how she/he compares with say all restaurants rated better than 4.</p>
                        <img src="/images/example1.png" alt=""/>
                    </div>
                    <div className="example">
                        <h3 className="category">Advanced feature #1</h3>
                        <h4>Analysis of what customers liked and didn't like and how it changed over time</h4>
                        <p>If a place has quite a few reviews, it could be tricky to understand what was liked the most and what 
                            could use some improvement. The following figure shows the most common words used in reviews which
                            were associated with positive and negative emotions. 
                            For example if reviews mentioned "fantastic empanadas", the graph below will show "empanadas" in green.
                            The reviews are aggregated by month, so that the restaurant owner can see how the sentiment changed over time.
                            In the future this graph will be interactive and we also sort the words by their frequency of use.
                            This analysis has been done by fine-tuning a modern pretrained AI language model.
                        </p>
                        <p>We are also working on extracting the most popular food items specifically, so that
                            our customers can focus on what is the most popular on their menu and what is not so much.
                            We do not have this model ready yet. It requires some additional fine-tuning.</p>
                        <img src="/images/rating.png" alt=""/>
                    </div>
                    <div className="example">
                        <h3 className="category">Advanced feature #2</h3>
                        <h4>What about the neighborhood?</h4>
                        <p>This particular feature is under development. We want to show to the owners several 
                            things about their neighborhood. 
                            For example, how many restaurants are there, and what people think about them.
                            We will aggregate the data into various categories: eg, foods that have a lot of good representation in the neighborhood,
                            foods that are mentioned often, but poorely rated (indicating an opportunities). 
                            In addition, we'll be adding the degree of admiration of some items. For example, if there are croissant
                            specialists around. And various other profilings of the neighborhood. 
                            This feature requires analysis of hundreds of thousands of reviews and will be available in the future.
                            So far we can only provide an approximation by word cloud.
                        </p>
                        <img src="/images/wordcloud.jpeg" alt=""/>
                    </div>
                </section>
            </section>}
            {language === "es" && <section id="show">
                <section className="in-progress">
                    <div className="announcement">
                        <h4>BIENVENIDO</h4>
                        <p>Estamos trabajando en nuestra demostración para usted. Por el momento solo podrás ver los esquemas principales de las características
                            que estará disponible para nuestros clientes. Agregaremos notas junto a cada uno de ellos para explicar lo que planeamos agregar.</p>
                        <p>Discúlpenos por nuestra apariencia actual.</p>        
                    </div>
                </section>
                <section className="in-progress-info">
                    <div className="text">
                        <p>Todos nuestros datos y ejemplos se basan en un restaurante real en Barcelona que realmente disfrutamos y frecuentamos.
                        Este restaurante tuvo un par de meses difíciles, cuando la calidad disminuyó visiblemente. Así que queríamos ver qué pasaba
                        mal y qué oportunidades tienen ahora. Todos los datos están limitados al 2023-02-14</p>
                        <p className="span">Nuestra interfaz de usuario está sujeta a cambios de acuerdo con nuestra conversación con los contactos de nuestro restaurante.</p>
                    </div>
                </section>
                <section className="in-progress-example">
                    <div className="example">
                        <h3 className="category">Función básica #1</h3>
                        <h4>Comparación global y local según valoraciones de usuarios</h4>
                        <p>La siguiente figura compara el restaurante elegido con
                            todos los demás restaurantes de la ciudad
                            donde se encuentra el restaurante. En el futuro esto
                            gráfico será interactivo, de modo que el dueño del restaurante
                            puede hacer zoom y, por ejemplo, ver cómo ella/él
                            se compara con, digamos, todos los restaurantes calificados con más de 4.</p>
                        <img src="/images/example1.png" alt=""/>
                    </div>
                    <div className="example">
                        <h3 className="category">Función avanzada #1</h3>
                        <h4>Análisis de lo que les gustó y no les gustó a los clientes y cómo cambió con el tiempo</h4>
                        <p>Si un lugar tiene bastantes reseñas, puede ser difícil entender qué fue lo que más gustó y qué
                            podría usar alguna mejora. La siguiente figura muestra las palabras más comunes utilizadas en las reseñas que
                            se asociaron con emociones positivas y negativas.
                            Por ejemplo, si las reseñas mencionaron "empanadas fantásticas", el siguiente gráfico mostrará "empanadas" en verde.
                            Las reseñas se agregan por mes, para que el dueño del restaurante pueda ver cómo cambió el sentimiento con el tiempo.
                            En el futuro este gráfico será interactivo y también ordenaremos las palabras por su frecuencia de uso.
                            Este análisis se ha realizado ajustando un modelo de lenguaje de IA moderno preentrenado.
                        </p>
                        <p>También estamos trabajando en la extracción específica de los alimentos más populares, para que
                            nuestros clientes pueden centrarse en lo que es más popular en su menú y lo que no lo es tanto.
                            Todavía no tenemos este modelo listo. Requiere algunos ajustes adicionales.</p>
                        <img src="/images/rating.png" alt=""/>
                    </div>
                    <div className="example">
                        <h3 className="category">Función avanzada #2</h3>
                        <h4>¿Qué pasa con el vecindario?</h4>
                        <p>Esta función en particular está en desarrollo. Queremos mostrar a los propietarios varios
                            cosas de su barrio.
                            Por ejemplo, cuántos restaurantes hay y qué piensa la gente de ellos.
                            Agregaremos los datos en varias categorías: por ejemplo, alimentos que tienen una buena representación en el vecindario,
                            alimentos que se mencionan a menudo, pero mal calificados (lo que indica oportunidades).
                            Además, iremos añadiendo el grado de admiración de algunos artículos. Por ejemplo, si hay croissant
                            especialistas alrededor. Y varios otros perfiles del barrio.
                            Esta función requiere el análisis de cientos de miles de reseñas y estará disponible en el futuro.
                            Hasta ahora solo podemos proporcionar una aproximación por nube de palabras.
                        </p>
                        <img src="/images/wordcloud.jpeg" alt=""/>
                    </div>
                </section>
            </section>}
            {language === "ca" && <section id="show">
                    <section className="in-progress">
                        <div className="announcement">
                            <h4>BENVINGUTS</h4>
                            <p>Estem treballant en la nostra demostració per a tu. De moment només podreu veure els contorns principals de les característiques
                                que estarà disponible per als nostres clients. Afegirem notes al costat de cadascun d'ells per explicar què volem afegir.</p>
                            <p>Perdoneu-nos pel nostre aspecte actual i el nostre català
                                La IU/UX del lloc web serà finalment un tauler de control interactiu adequat per als propietaris de restaurants</p>        
                        </div>
                    </section>
                    <section className="in-progress-info">
                        <div className="text">
                            <p>Totes les nostres dades i exemples es basen en un restaurant real de Barcelona que ens agrada molt i freqüentem.
                            Aquest restaurant va tenir un parell de mesos durs, quan la qualitat va baixar visiblement. Així que volíem veure què passava
                            malament i quines oportunitats tenen ara. Totes les dades estan limitades al 2023-02-14</p>
                            <p className="span">La nostra interfície d'usuari pot canviar segons la nostra conversa amb els contactes del nostre restaurant.</p>
                        </div>
                    </section>
                    <section className="in-progress-example">
                        <div className="example">
                            <h3 className="category">Funció bàsica núm. 1</h3>
                            <h4>Comparació global i local segons les valoracions dels usuaris</h4>
                            <p>La figura següent compara el restaurant escollit amb la resta de restaurants de la ciutat
                                on es troba el restaurant. En el futur aquest gràfic serà interactiu, de manera que el propietari del restaurant
                                pot apropar-se i, per exemple, veure com es compara amb, 
                                per exemple, tots els restaurants amb una puntuació millor que 4.</p>
                            <img src="/images/example1.png" alt=""/>
                        </div>
                        <div className="example">
                            <h3 className="category">Funció avançada núm. 1</h3>
                            <h4>Anàlisi de què els ha agradat i què no els ha agradat als clients i com ha canviat amb el temps</h4>
                            <p>Si un lloc té unes quantes ressenyes, pot ser complicat entendre què li ha agradat més i què
                                podria fer servir alguna millora. La figura següent mostra les paraules més habituals utilitzades a les ressenyes que
                                Estaven associats amb emocions positives i negatives.
                                Per exemple, si les ressenyes mencionen "empanades fantàstiques", el gràfic següent mostrarà "empanades" en verd.
                                Les ressenyes s'agreguen per mes, de manera que el propietari del restaurant pugui veure com ha canviat el sentiment al llarg del temps.
                                En el futur aquest gràfic serà interactiu i també ordenarem les paraules per la seva freqüència d'ús.
                                Aquesta anàlisi s'ha fet ajustant un model de llenguatge d'IA preentrenat modern.
                            </p>
                            <p>També estem treballant per extreure específicament els aliments més populars, de manera que
                                els nostres clients poden centrar-se en què és el més popular del seu menú i què no ho és tant.
                                Encara no tenim aquest model preparat. Requereix alguns ajustaments addicionals.</p>
                            <img src="/images/rating.png" alt=""/>
                        </div>
                        <div className="example">
                            <h3 className="category">Funció avançada núm. 2</h3>
                            <h4>I el barri?</h4>
                            <p>Aquesta característica en particular està en desenvolupament. Volem ensenyar als propietaris diversos
                                coses del seu barri.
                                Per exemple, quants restaurants hi ha i què en pensa la gent.
                                Agregarem les dades en diverses categories: per exemple, aliments que tenen molta bona representació al barri,
                                aliments que s'esmenten sovint, però mal valorats (indicant una oportunitat).
                                A més, hi afegirem el grau d'admiració d'alguns articles. Per exemple, si hi ha croissant
                                especialistes al voltant. I altres perfils diversos del barri.
                                Aquesta funció requereix l'anàlisi de centenars de milers de ressenyes i estarà disponible en el futur.
                                Fins ara només podem oferir una aproximació per núvol de paraules.
                            </p>
                            <img src="/images/wordcloud.jpeg" alt=""/>
                        </div>
                    </section>
            </section>}             
        </>
   
    )
}

export default Demo