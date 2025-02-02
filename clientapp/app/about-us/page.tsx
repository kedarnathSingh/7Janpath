
import { Metadata } from "next";
import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";
import Image from "next/image";

import AboutUsContent from "./aboutUsContent";



const aboutUs = () => {
  //   const [data, setPageData] = useState([]);
  //   useEffect(() => {
  //     fetch(`${process.env.basePath}/settings/about_us`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPageData(data)
  //     })
  // }, []);

  return (
    <div>
      <HeadersComponent />
      <AboutUsContent />
      <FooterComponent />
    </div>
  )
};
export default aboutUs;

export function generateMetaData() {
  return {
    title: 'About 7Travel Money',
    description: 'About 7 travel money vision ans mission',
    keywords: ['Best currency rate in Noida', 'Currency exchange in Delhi and NCR', 'Buy foreign Currency in Noida', 'Sell Foreign currency in Noida']
  }
}