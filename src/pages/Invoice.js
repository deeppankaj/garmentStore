import React from "react";
import html2pdf from 'html2pdf.js';
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export default function Invoice() {

    function handleDownloadPDF() {
        const url = window.location.href;
        const element = document.body;
      
        html2pdf().from(element).save(`${url}.pdf`);
      }
      



  return (
    <MDBContainer className="py-5">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer className="mb-2 mt-3">
            <MDBRow className="d-flex align-items-baseline">
              <MDBCol xl="9">
                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                  Invoice &gt; &gt; <strong>ID: #123-123</strong>
                </p>
              </MDBCol>
              <MDBCol  >
                <button
                  color="light"
                  ripple="dark"
                  onClick={handleDownloadPDF}
                >
                  <MDBIcon  icon="print" color="primary"  />
                  Print
                </button>
                <button
                  color="light"
                  ripple="dark"
                  
                >
                  <MDBIcon
                    
                    icon="file-pdf"
                    color="danger"
                   
                  />
                  Export
                </button>
                <hr />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <MDBIcon
                fab
                icon="mdb"
                size="4x"
                className="ms-0 "
                style={{ color: "#5d9fc5" }}
              />
              <p className="pt-0">Deepnap Softech</p>
            </MDBCol>
          </MDBContainer>
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  To: <span style={{ color: "#5d9fc5" }}>rohi</span>
                </li>
                <li className="text-muted">Street, City</li>
                <li className="text-muted">State, Country</li>
                <li className="text-muted">
                  <MDBIcon fas icon="phone-alt" /> 123-456-789
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
              <p className="text-muted">Invoice</p>
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">ID:</span>#123-456
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Creation Date: </span>Jun
                  23,2021
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Status:</span>
                  <span className="badge bg-warning text-black fw-bold ms-1">
                    Unpaid
                  </span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">1</th>
                  <td>Pro Package</td>
                  <td>4</td>
                  <td>$200</td>
                  <td>$800</td>
                </tr>
                <tr>          
                  <th scope="row">2</th>
                  <td>Web hosting</td>
                  <td>1</td>
                  <td>$10</td>
                  <td>$10</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Consulting</td>
                  <td>1 year</td>
                  <td>$300</td>
                  <td>$300</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8">
              <p className="ms-3">
                Add additional notes and payment information
              </p>
            </MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled>
                <li className="text-muted ms-3">
                  <span className="text-black me-4">SubTotal</span>$1110
                </li>
                <li className="text-muted ms-3 mt-2">
                  <span className="text-black me-4">Tax(15%)</span>$111
                </li>
              </MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
                <span style={{ fontSize: "25px" }}>$1221</span>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="10">
              <p>Thank you for your purchase</p>
            </MDBCol>
          
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}