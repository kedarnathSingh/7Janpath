import next from "next";
import './BodyComponent.scss';
import Currencylist from "./currency-list";

const BodyComponent = () => {
    return(
        <main className="main-middle-content-section pt-5 pb-5">

    <div className="container-fluid pb-5">	
				{/* <div className="container-fluid">
					<Currencylist></Currencylist>
				</div> */}
			</div>

      <div className="container-fluid pt-5 pb-5">	
				<div className="container-fluid">
					<div className="head-container-sec mb-5">
						<h5>Empowering Your financial Transactions</h5>
						<h2>Expert Currency Exchange</h2>
					</div>

						
					<div className="row">
						<div className="col-lg-4 product-card-main">
							<figure>
								<img src="images/money-trasfer.svg"/>
							</figure>
							<h3>Money Transfer</h3>
							<p>Whether you want to send money for your child’s education fees or send money for business purposes, we provide you a variety of options for Money transfer to abroad.</p>
							<button>Read More..</button>
						</div>
						<div className="col-lg-4 product-card-main">
							<figure>
								<img src="images/travel-insurance.svg"/>
							</figure>
							<h3>Travel Insurance</h3>
							<p>Travel Insurance is done when we are going on the long trip for the long duration of the time. in this insurance,we cover the exact duration of the trip and multi-trip policy.</p>
							<button>Read More..</button>
						</div>
						<div className="col-lg-4 product-card-main">
							<figure>
								<img src="images/foriegn-exchange.png"/>
							</figure>
							<h3>Buy & Sell Foriegn Exchange</h3>
							<p>In finance, an exchange rate is the rate at which one currency will be exchanged for another currency.</p>
							<button className="mt-5 mt-sm-0">Read More..</button>
						</div>
						<div className="col-lg-4 product-card-main">
							<figure>
								<img src="images/send-moeny.svg"/>
							</figure>
							<h3>Send Money Abroad</h3>
							<p>Send Money Abroad at Best and Live Rate with Hassle free transaction and no extra cost. Looking for International Money Transfer just one click away reach us now!</p>
							<button className="mt-5 mt-sm-0">Read More..</button>
						</div>
						<div className="col-lg-4 product-card-main">
							<figure>
								<img src="images/travel-card.svg"/>
							</figure>
							<h3>Travel Card</h3>
							<p>Often while traveling abroad, keeping cash along with you can increase the risk factor of you losing the money. Travel cards are a safe way to keep your money safe with you while you relish your travel.</p>
							<button>Read More..</button>
						</div>
						<div className="col-lg-4 product-card-main">
							<figure>
								<img src="images/currency-exchange.svg"/>
							</figure>
							<h3>Currency Exchange</h3>
							<p>Foreign exchange market is a global market for the trading of currencies.In this money is exchanged in one currency for another.It includes buying, selling and exchanging currencies at current prices.</p>
							<button>Read More..</button>
						</div>
					</div>
				</div>
			</div>

      <div className="container-fluid pt-5 pb-5 bg-grey">	
				<div className="container-fluid">		
					<div className="row pt-3 pb-3">
						<div className="col-lg-6">
							<figure>
								<img className="w-90" src="images/about-sidebg.png"/>
							</figure>
						</div>
						<div className="col-lg-6">
							<div className="head-container-sec-2">
								<h5>About us</h5>
								<h2>Transfer & Exchange Your Money Anytime In this World</h2>
								<p>At 7Janpath Forex, it’s all about our esteemed customers. They are at the forefront of the services we offer. Our Forex rates are the best in the city. At no point,</p>
							</div>
							<div className="about-content-main-sec">

								<ul>
									<li>
										<figure>
											<img src="images/convenince.svg"/>
										</figure>
										<div className="about-text-sec">
											<h4>CONVENIENCE</h4>
											<p>Options of multiple payment methods and free delivery to your doorstep.</p>
										</div>
									</li>
									<li>
										<figure>
											<img src="images/security.svg"/>
										</figure>
										<div className="about-text-sec">
											<h4>SECURITY</h4>
											<p>Data encryption across the website to ensure you can transact with confidence.</p>
										</div>
									</li>
									<li>
										<figure>
											<img src="images/value.svg"/>
										</figure>
										<div className="about-text-sec">
											<h4>VALUE</h4>
											<p>Get the most competitive rates when you do forex transactions on Forex On Wheels.</p>
										</div>
									</li>
									<li>
										<figure>
											<img src="images/speed.svg"/>
										</figure>
										<div className="about-text-sec">
											<h4>SPEED</h4>
											<p>Simply upload your documents online and save them for future transactions.</p>
										</div>
									</li>
								</ul>

							</div>
						</div>
						
					</div>
				</div>
			</div>



			<div className="container-fluid pt-5 pb-5">	
				<div className="container-fluid">
					<div className="head-container-sec mt-5 mb-5 pb-2">
						<h5>Effortless Currency Exchange</h5>
						<h2>Reliable Service, Competitive Rates</h2>
					</div>
					
					<div className="row mb-5 pb-5">
						<div className="col-lg-3">
							<div className="service-card-main">
								<figure>
									<img src="images/door-step.svg"/>
								</figure>
								<h3>Door Step Delivery</h3>
								<p>Make forex simple and hastle-free.</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="service-card-main">
								<figure>
									<img src="images/foreign-currency-exchange.svg"/>
								</figure>
								<h3>Currency Exchange</h3>
								<p>Get best rates in currency exchange</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="service-card-main">
								<figure>
									<img src="images/current-rate.svg"/>
								</figure>
								<h3>Freeze Current Rates</h3>
								<p>Freeze current rates to avoid higher rates.</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="service-card-main active-card">
								<figure>
									<img src="images/expert-exp.svg"/>
								</figure>
								<h3>Expert Guidance</h3>
								<p>Get guidance on forex </p>
							</div>
						</div>
						

					</div>
				</div>
			</div>

      <div className="container-fluid pt-5 pb-5 why-choose-bg">	
				<div className="container-fluid">
					<div className="head-container-sec mb-5 pb-1">
						<h5>Why Choose Us?</h5>
						<h2 className="text-white">We Always Try To Understand Customer’s Expectation</h2>
					</div>

						
					<div className="row mx-4">
						<div className="col-lg-4">
							<div className="why-choose-card-main">
									<figure>
										<img src="images/rupee-icon.svg"/>
									</figure>
									<div className="why-choose-details">
										<h3>10,000,000+</h3>
										<p>Exchanged So Far </p>
									</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="why-choose-card-main">
									<figure>
										<img src="images/happy-icon.svg"/>
									</figure>
									<div className="why-choose-details">
										<h3>11,000+</h3>
										<p>Happy Clients </p>
									</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="why-choose-card-main">
									<figure>
										<img src="images/bank-icon.svg"/>
									</figure>
									<div className="why-choose-details">
										<h3>500+</h3>
										<p>Banks and Money Exchangers </p>
									</div>
							</div>
						</div>

						
						</div>
					</div>
				</div>

        <div className="container-fluid pt-5 pb-5">	
				<div className="container-fluid">
					<div className="head-container-sec mt-5 mb-5 pb-1">
						<h5>Discover What Our Clients Say</h5>
						<h2>Testimonials That Inspire</h2>
					</div>

						
					<div className="row mb-5">
						<div className="col-lg-4">
							<div className="testimonial-card-main">
								<div className="testimonial-head-sec">
									<figure>
									<img className="user-icon" src="images/user-icon.png" alt="user" />
									</figure>
									<div className="testimonial-details">
										<h3>Nitish Sah</h3>
										<p><img src="images/star-img.png"/></p>
									</div>
									<img className="coman-texticon-set" src="images/coman-text.svg"/>
								</div>
								<p>If you want the best exchange rate, quick service and awesome attitude, then this is the go-to for all your requirements! They respond immediately, self experienced. Do try! </p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="testimonial-card-main">
								<div className="testimonial-head-sec">
									<figure>
										<img className="user-icon" src="images/user-icon.png" alt="user" />
									</figure>
									<div className="testimonial-details">
										<h3>Rahul Mishra</h3>
										<p><img src="images/star-img.png"/></p>
									</div>
									<img className="coman-texticon-set" src="images/coman-text.svg"/>
								</div>
								<p>Highly recommend this place. Very professional and responsive. They have good knowledge and I had the best experience here.</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="testimonial-card-main">
								<div className="testimonial-head-sec">
									<figure>
									<img className="user-icon" src="images/user-icon.png" alt="user" />
									</figure>
									<div className="testimonial-details">
										<h3>John Alba</h3>
										<p><img src="images/star-img.png"/></p>
									</div>
									<img className="coman-texticon-set" src="images/coman-text.svg"/>
								</div>
								<p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts,  Filler text is text that shares some. </p>
							</div>
						</div>
					</div>
				</div>
			</div>

    </main>
    )
}

export default BodyComponent;