import Image from 'next/image';
import BannerComponent from './components/banner/BannerComponent';
import HeadersComponent from './components/headers/HeadersComponent';
import FooterComponent from './components/footer/FooterComponent';
import BodyComponent from './components/body/BodyComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '7Travel Money',
  description: 'Currency exchange, travel insuarance, send money abroad, Money exchnage in Delhi and NCR',
  keywords: ['Best Foreign currency rate in Delhi and NCR', 'Currency exchange in Delhi', 'Sell Currency in Noida', 'Buy Currency in Noida']
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
