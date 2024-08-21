import React from "react";
import avatar from "./ava.png";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem, MDBProgress, MDBProgressBar, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

function App() {
  return (
    <section style={{ backgroundColor: "#eee", height: "100vh" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage src={avatar} alt="avatar" className="rounded-circle" style={{ width: "150px" }} fluid />
                <p className="mb-1">&nbsp;</p>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Austin, Texas</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn href="mailto:MirkhelkerYogesh@gmail.com">Message</MDBBtn>
                  <MDBBtn outline className="ms-1" href="https://github.com/continuouslearner24" target="_blank">
                    GitHub
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://YMB.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: "#333333" }} />
                    <MDBCardText>continuouslearner24</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: "#55acee" }} />
                    <MDBCardText>@continuouslearner24</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: "#ac2bac" }} />
                    <MDBCardText>continuouslearner24</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: "#3b5998" }} />
                    <MDBCardText>continuouslearner24</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><span className="text-primary font-italic me-1">Mirkhelker, Yogesh</span></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">MirkhelkerYogesh@Gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(123) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Austin, Texas</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">Foundational</span> Skills and Tools
                    </MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: ".77rem" }}>
                      HTML/CSS
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      JavaScript
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Version Control/Git
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Responsive Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Understanding of Backend Development
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      Types Of <span className="text-primary font-italic me-1">Web Development</span> I Master
                    </MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: ".77rem" }}>
                      Responsive Web Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Minimalist Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      One Pager
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Parallax Scrolling Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Material Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default App;
