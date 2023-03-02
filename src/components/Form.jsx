const Form = () => {
    return (
        <>
            <section className="c-section c-section--bg-black">
                <div className="container">
                    <div className="c-form c-form--base">
                        <div className="c-form__inner">
                            <div className="c-form__title">Newsletter Signup</div>
                            <form action="">
                                <div className="c-form__body">
                                    <input className="c-form__input" type="text" placeholder="test@youremail.com"/>
                                </div>
                            </form>
                            <div className="c-form__actions">
                                <input  className="c-button c-button--base c-button--base--p" type="button" value="SIGNUP"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form