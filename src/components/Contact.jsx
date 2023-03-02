import bg from "../assets/img/contact-bg.png";

const Contact = () => {
    return (
        <>
            <section className="c-section c-section--base c-section--images c-section--bg" style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="container">
                    <div className="c-section__body-2">
                        <h2 className="c-section__title-2">Want to build something amazing?</h2>
                    </div>
                    <div className="c-section__action">
                        <a className="c-button c-button--base" href="#">GET IN TOUCH</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact