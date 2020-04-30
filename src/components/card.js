import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/mockup.webp"

const CardExample = () => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Project Name</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                    <MDBBtn href="#">Visit</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default CardExample;
