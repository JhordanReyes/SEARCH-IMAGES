import Card from "./card/Card"
import "./style.css"

const Main = ({search, images, mensaje}) => {
    return (
        <main className="main">
            <p>{mensaje}</p>
            <section className="main__section">            
                {
                    images.map( img =>
                        (<Card
                            key={img.id}
                            url={img.url}
                        />)
                    )
                }
            </section>
        </main>
    )
}

export default Main