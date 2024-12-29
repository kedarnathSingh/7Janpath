import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

interface PageParams {
  // Add relevant param types
}

const sendmoney = () =>{
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

export default sendmoney;

export async function generateMetadata({ params }: { params: PageParams }) {
  return {
      title: 'Send Money Abroad',
      description: '7 travel money Send Money Abroad',
      keywords: ['Send Money Abroad', 'Best conversion rate In India', 'Send Money to Us', 'Send Money to UK', 'Send money to Canada', 'Send Money to Australia', 'Send Money to Singapore', 'Send Money to New Zealand']
    }
}