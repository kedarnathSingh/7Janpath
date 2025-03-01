import ContactUs from './ContactUs'
import HeadersComponent from '../components/headers/HeadersComponent'
import FooterComponent from '../components/footer/FooterComponent'
function page() {
  return (
    <div>
      <HeadersComponent/>
        <ContactUs/>
        <FooterComponent/>
    </div>
  )
}

export default page