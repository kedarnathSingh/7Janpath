import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

interface PageParams {
  // Add relevant param types
}

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
export async function generateMetadata({ params }: { params: PageParams }) {
  return {
      title: 'Share & Security ',
      description: '7 travel money Share & Security',
      keywords: ['Best Share and Security tips', 'Share and Security helps', 'Share investment']
    }
}