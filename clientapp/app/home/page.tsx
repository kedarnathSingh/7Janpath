import { Metadata } from "next";
import BannerComponent from "../components/banner/BannerComponent";
import BodyComponent from "../components/body/BodyComponent";
import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

export const metadata: Metadata = {
    title: 'About 7Travel Money',
    description: 'Currency exchange in Noida',
    keywords: ['Best currency rate', 'Send Money Abroad', 'Buy dollars', 'Buy Euro']
  };

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