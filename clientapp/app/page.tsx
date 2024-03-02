import Image from 'next/image';
import BannerComponent from './components/banner/BannerComponent';
import HeadersComponent from './components/headers/HeadersComponent';
import FooterComponent from './components/footer/FooterComponent';
import BodyComponent from './components/body/BodyComponent';

export const metadata= {
  title: 'Travel Money',
  description: 'Currency exchange, travel insuarance, send money abroad'
};
export default function App() {
  return (
    <main className="wrapper">
	<HeadersComponent />
	<BannerComponent />
	<BodyComponent />
	<FooterComponent />
    </main>
  // <div>
    
  // </div>
  )
}
