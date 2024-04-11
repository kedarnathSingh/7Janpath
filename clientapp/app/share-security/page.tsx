import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

const security = () =>{
    return(
        <div>
          <HeadersComponent />
          <div style={{height: '300px'}}>
          <img className="under-maintenance" src="images/site-under-maintenance.png" alt="under-maintenence" />
          </div>
          <FooterComponent />
        </div>
    )
}

export default security;