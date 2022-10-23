import Card from "./card/Card"
import "./style.css"

const Main = ({images, mensaje}) => {
    return (
        <main className="main">
            <p>{mensaje}</p>
            <section className="main__section">            
                {
                    images.map( img =>
                        (<Card
                            key={img.id}
                            url={img.url}
                            likes={img.likes}
                            comments={img.comments}
                        />)
                    )
                }
            </section>
        </main>
    )
}

export default Main