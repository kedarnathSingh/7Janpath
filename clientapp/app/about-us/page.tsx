import { Metadata } from "next";
import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

export const metadata: Metadata = {
  title: 'About 7Travel Money',
  description: 'About 7 travel money vision ans mission',
  keywords: ['Best currency rate in Noida', 'Currency exchange in Delhi and NCR', 'Buy foreign Currency in Noida', 'Sell Foreign currency in Noida']
};

const aboutUs = () =>{
    return(
        <div>
          <HeadersComponent />
          <div style={{height: '360px'}}>
          <img className="under-maintenance" src="images/site-under-maintenance.png" alt="under-maintenence" />
          </div>
          <FooterComponent />
        </div>
    )
};
export default aboutUs;