import type { Metadata, ResolvingMetadata } from 'next'
import BannerComponent from "../components/banner/BannerComponent";
import BodyComponent from "../components/body/BodyComponent";
import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

const home = () =>{
    return(
        <main className="wrapper">
	<HeadersComponent />
	<BannerComponent />
	<BodyComponent />
	<FooterComponent />
    </main>
    )
}
export default home;
interface PageParams {
  // Add relevant param types
}
export async function generateMetadata({ params }: { params: PageParams }) {
    return {
        title: '7Travel Money ',
        description: '7 travel money vision ans mission',
        keywords: ['Best currency rate in Noida', 'Currency exchange in Delhi and NCR', 'Buy foreign Currency in Noida', 'Sell Foreign currency in Noida']
      }
  }
// export const generateMetaData = () => {
//     return {
//       title: '7Travel Money ',
//       description: '7 travel money vision ans mission',
//       keywords: ['Best currency rate in Noida', 'Currency exchange in Delhi and NCR', 'Buy foreign Currency in Noida', 'Sell Foreign currency in Noida']
//     }
//   }