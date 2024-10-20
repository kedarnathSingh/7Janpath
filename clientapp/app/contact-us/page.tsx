import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

const contactus = () => {
    return(
        <div>
          <HeadersComponent />
          <div style={{height: '300px'}}>
          <img className="under-maintenance" src="images/site-under-maintenance.png" alt="under-maintenence" />
          </div>
          <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="contact-container">
              <div className="row">
               <div className="col-xs-6">
               <h4>Enquire Now</h4>
               <div className="row">
                 <div className="colx-xs-6"></div>
                 <div className="colx-xs-6"></div>
               </div>
               <div className="row">
                 <div className="colx-xs-6"></div>
                 <div className="colx-xs-6"></div>
               </div>
               <div className="row">
                 <div className="colx-xs-6"></div>
                 <div className="colx-xs-6"></div>
               </div>
               <div className="row">
                 <div className="colx-xs-6"></div>
                 <div className="colx-xs-6"></div>
               </div>
               <div className="row">
                 <div className="colx-xs-6"></div>
                 <div className="colx-xs-6"></div>
               </div>
               </div>
              </div>
              

            </div>
          </div>
          <FooterComponent />
        </div>
    )
}
export default contactus;