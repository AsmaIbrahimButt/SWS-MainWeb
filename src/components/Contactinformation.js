import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
function Contactinformation() {
  return (
    <div>
      <Navbar/>
        <section className="h-100 " >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="./img/10.jpg" style={{height:"84%",width:"100%"}}
                alt="Sample photo" className="img-fluid"
                 />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Volunteer Application</h3>
                <h4>Contact Information</h4>
                
                  
                  <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">phone no 1</label>
                </div>
                
                  
                
                  <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">Phone no 2</label>
                </div>
                

                <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">Postal code</label>
                </div>

                 <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">CNIC no</label>
                </div>

               
               
                
                
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4 mx-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4 mx-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 mx-3">
                    <input  style={{border:"1px solid black"}} className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6 mb-4" style={{float:"left"}} >

                    <select className="select" style={{width:"215px"}}>
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4" style={{float:"right"}}>

                    <select className="select" style={{width:"215px"}}>
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input style={{border:"1px solid black"}} type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">DOB</label>
                </div>

                

               
              
                <div className="d-flex justify-content-end pt-3">
                 
                 <Link to="/docv1"> <button type="button" className="btn btn-primary ms-2">Save & Next</button>
                 </Link> </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
    
  )
}

export default Contactinformation