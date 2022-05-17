import React from 'react'

// Import icons
import 
{  
    FaFacebookF,
    FaTwitter,
    FaGoogle,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaHome,
    FaEnvelope,
    FaPhone,
    FaPrint
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
        
            <footer className="text-center text-lg-start bg-light text-muted">
            
                <section className="d-flex justify-content-center justify-content-lg-around p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="/" className="me-4 text-reset">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaTwitter />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaGoogle />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaInstagram />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaLinkedin />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaGithub />
                        </a>
                    </div>
                </section>
                

                
                <section >
                    <div className="container text-center text-md-start mt-5">
                    
                    <div className="row mt-3">
                        
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        

                        
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>
                        
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><FaHome /> New York, NY 10012, US</p>
                            <p>
                                <FaEnvelope /> info@example.com
                            </p>
                            <p><FaPhone /> + 01 234 567 88</p>
                            <p><FaPrint /> + 01 234 567 89</p>
                        </div>
                    
                    </div>
                    
                    </div>
                </section>

   
                <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                    &copy; 2022 Copyright:
                    <a className="text-reset fw-bold" href="/">Looking For Helpers</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer