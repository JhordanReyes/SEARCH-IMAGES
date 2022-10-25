import Card from "./card/Card"
import "./style.css"

const Main = ({images, mensaje, setModal, modal, setImage}) => {

    const handleModal = () => {
        setModal(!modal)
        const divModal = document.getElementById("modal");
        modal ? divModal.style.display = "none" : divModal.style.display = "flex";
    }



    return (
        <main className="main">
            <p>{mensaje}</p>
            <section className="main__section">            
                {
                    images.map( img =>
                        (<Card
                            setImage={setImage}
                            img={img}
                            handleModal={handleModal}
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