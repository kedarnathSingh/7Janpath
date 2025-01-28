import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";
import "./contact.scss";

const ContactUs = () => {
    return(
        <div>
          <HeadersComponent />
          <div className="contact-us">
            <div className="header">
              <h2>Contact Us</h2>
            </div>
          <div className="contact-container">
            <div className="row">
              <div className="col-sm-6">
                <h4>Enquire Now</h4>
                <div className="row">
                  <div className="col-sm-6 contact-input-box">
                    <label htmlFor="username">Name</label>
                    <input type="text" placeholder="Enter name" name="username" />
                  </div>
                  <div className="col-sm-6 contact-input-box">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" name="useremail" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 contact-input-box">
                    <label>Phone</label>
                    <input type="text" placeholder="Enter number" name="userphone" />
                  </div>
                  <div className="col-sm-6 contact-input-box">
                    <label>Enquiry type</label>
                    <select>
                      <option value="">Select enquiry type</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6"></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6"></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6"></div>
                </div>
              </div>
              <div className="col-sm-6">
                <h4>Our Office</h4>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6"></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6"></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6"></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6"></div>
                </div>
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6"></div>
                </div>
                </div>
            </div>
          </div>
          </div>
          <FooterComponent />
        </div>
    )
}
export default ContactUs;