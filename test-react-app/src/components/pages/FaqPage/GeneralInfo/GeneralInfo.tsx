import React from 'react'

export const GeneralInfo = () => {
    return (
        <div className="accordion" id="accordionGeneral">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralOne" aria-expanded="true" aria-controls="accordionGeneralOne">
                        What is this Little Fashion?
                    </button>
                </h2>

                <div id="accordionGeneralOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionGeneral">

                    <div className="accordion-body">
                        <p className="large-paragraph"><strong>Little Fashion</strong> is free Bootstrap 5 website template for everyone. There are 8 HTML pages included in this template and you can expand more pages as you need.</p>

                        <p className="large-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
        </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralTwo" aria-expanded="false" aria-controls="accordionGeneralTwo">
                                        What is Tooplate website?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionGeneral">

                                        <div className="accordion-body">
                                            <p className="large-paragraph"><a href="https://www.tooplate.com/free-templates" target="_blank">Tooplate</a> is a great website to download free HTML website templates for your business or personal use. Tooplate website has been online for almost 8 years now. Thank you for visiting our website.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralThree" aria-expanded="false" aria-controls="accordionGeneralThree">
                                        How do I support your website?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionGeneral">

                                        <div className="accordion-body">
                                            <p className="large-paragraph">You can support our Tooplate website by sharing it to your friends or colleagues on the web or social media.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
    )
}