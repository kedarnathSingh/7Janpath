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