import FooterComponent from "../components/footer/FooterComponent";
import HeadersComponent from "../components/headers/HeadersComponent";

interface PageParams {
  // Add relevant param types
}

const finacialservices = () =>{
    return(
        <div>
          <HeadersComponent />
          <div style={{height: '300px'}}>
          <img className="under-maintenance" src="images/site-under-maintenance.png" alt="under-maintenence" />
          </div>
          <FooterComponent />
        </div>
    )
};

export default finacialservices;
export async function generateMetadata({ params }: { params: PageParams }) {
  return {
      title: 'Financial Services',
      description: 'Financial Services, Home loan, Personal loan, Education loan, Business loan, Loan against property, Loan against securities, Loan against insurance policy, Loan against mutual funds, Loan against fixed deposits, Loan against gold, Loan against shares, Loan against mutual funds, Loan against insurance policy, Loan against fixed deposits, Loan against gold, Loan against shares',
      keywords: ['Best Home loan rate in Delhi, Noida Gurgaon', 'Best Personal loan rate in Delhi, Noida Gurgaon', 'Best Business loan rate in Delhi, Noida Gurgaon', 'Best Loan against property rate in Delhi, Noida Gurgaon', 'Best Loan against securities rate in Delhi, Noida Gurgaon', 'Best Loan against insurance policy rate in Delhi, Noida Gurgaon', 'Best Loan against mutual funds rate in Delhi, Noida Gurgaon', 'Best Loan against fixed deposits rate in Delhi, Noida Gurgaon', 'Best Loan against gold rate in Delhi, Noida Gurgaon', 'Best Loan against shares rate in Delhi, Noida Gurgaon', 'Best Loan against mutual funds rate in Delhi, Noida Gurgaon', 'Best Loan against insurance policy rate in Delhi, Noida Gurgaon', 'Best Loan against fixed deposits rate in Delhi, Noida Gurgaon', 'Best Loan against gold rate in Delhi, Noida Gurgaon', 'Best Loan against shares rate in Delhi, Noida Gurgaon']
    }
}