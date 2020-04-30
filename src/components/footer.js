import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter className="font-small pt-0">
            <MDBContainer>
                <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">About us</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Products</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Awards</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Help</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Contact</a>
                        </h6>
                    </MDBCol>
                </MDBRow>
                <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                    <MDBCol md="8" sm="12" className="mt-5">
                        <p style={{ lineHeight: "1.7rem" }}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur.
            </p>
                    </MDBCol>
                </MDBRow>
                <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
                <MDBRow className="pb-3">
                    <MDBCol md="12">
                        <div className="mb-5 flex-center">
                           <a href = "https://www.facebook.com/Rashy.mr62/"><MDBIcon fab icon="facebook-f" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon></a>
                           <a href = "https://www.github.com/MdRashid62"><MDBIcon fab icon="github" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon></a>
                           <a href = "https://www.linkedin.com/in/rashid-muhammad-b36909153/"><MDBIcon fab icon="linkedin-in" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon></a>
                           <a href = "https://www.instagram.com/its_rashy/"><MDBIcon fab icon="instagram" size="lg" className="mx-2 white-text mr-md-4"></MDBIcon></a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright
                <a href="https://www.github.com/MdRashid62" alt="visit"> Muhammad Rashid </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;