import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";
import ContactUs from "../contact-us/ContactUs";

const security = () =>{
    return(
        <div>
          <HeadersComponent />
          <ContactUs/>
          <FooterComponent />
        </div>
    )
}

export default security;