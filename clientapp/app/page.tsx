import Image from 'next/image';
import HeadersComponent from './components/headers/HeadersComponent';
import BannerComponent from './components/banner/BannerComponent';
import BodyComponent from './components/body/BodyComponent';
import FooterComponent from './components/footer/FooterComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <HeadersComponent />
      </div>
      <div>
        <BannerComponent />
      </div>
      <div>
        <BodyComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </main>
  )
}
