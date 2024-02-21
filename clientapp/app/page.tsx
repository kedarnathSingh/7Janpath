import Image from 'next/image';
import BannerComponent from './components/banner/BannerComponent';
import HeadersComponent from './components/headers/HeadersComponent';
import FooterComponent from './components/footer/FooterComponent';
import BodyComponent from './components/body/BodyComponent';

export default function Home() {
  return (
    <main className="wrapper">
		<HeadersComponent />
        {/* <div className="top-header-strip">
        <div className="custom-container d-flex justify-content-between">
          <ul className="top-contect-sec">
            <li className="pe-5"><img className="pt-2" src="images/call-top.svg"/> <span>+918882382276</span></li>
            <li><img className="pt-2" src="images/message-top.svg"/> <span>info@7janpathforex.com</span></li>
          </ul>
          <ul className="login-nav-sec">
            <li className="pe-4">Sign In</li>
            <li className="ms-4">Log In</li>
          </ul>
        </div>
      </div>

      <header className="header-custom-main">
			<nav className="navbar navbar-expand-lg custom-nav ">
				<div className="container-fluid">
				  <a className="navbar-brand" href="#">
					<img className="pt-2" src="images/logo.svg"/>
				  </a>
				  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					  <li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" href="#">About us</a>
					  </li>
					
					  <li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Services
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						  <li><a className="dropdown-item" href="#">Action</a></li>
						  <li><a className="dropdown-item" href="#">Another action</a></li>
						  <li><hr className="dropdown-divider"/></li>
						  <li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" href="#">Share & Security </a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" href="#">Financial Services</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" href="#">Send Money Abroad </a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" href="#">Contact us </a>
					  </li>
					</ul>
					<form className="d-flex ms-4">
					  <button className="rate-btn-top me-4" > <img className="me-2" src="images/rates-icon.svg"/> <span>Rates</span></button>
					  <button className="offer-btn-top"><img className="me-2" src="images/offer-icon.svg"/> <span>Offers</span></button>
					</form>
				  </div>
				</div>
			  </nav>
				
		</header> */}

    {/* <div className="top-banner-sec-main">
			<div className="top-tab-nav-sec">
				<ul>
					<li className="active-tab"><img src="images/tab-icon-1.svg"/> <span>Currency</span></li>
					<li><img src="images/tab-icon-2.svg"/> <span>Transfer Money Abroad</span></li>
					<li><img src="images/tab-icon-3.svg"/> <span>Reload/ Unload Forex Card</span></li>
					<li><img src="images/tab-icon-4.svg"/> <span>International Sim Card</span></li>
					<li><img src="images/tab-icon-5.svg"/> <span>Corporate Solutions</span></li>
					<li><img src="images/tab-icon-6.svg"/> <span>Travel Insurance</span></li>
				</ul>
			</div>


			<div id="carouselExampleCaptions" className="carousel custom-carusel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
				  <div className="carousel-item active">
					<div className="carousel-caption d-none d-md-block">
						<figure>
							<img src="images/banner-icon-1.svg"/>
						</figure>
					  <h2>24*7 Online International Money Transfer via BookMyForex</h2>
					  <ul>
						<li>Zero transfer charges | Use Promo code ZEROBANKFEE</li>
						<li>Say NO to Bank Visits | Transfer Anytime, Anywhere</li>
						<li>Live Exchange Rate | Lowest Rates Guaranteed</li>
						<li>Funds received abroad within 12 - 48 hours</li>
					  </ul>
					  <button className="transfer-btn-top">Transfer Money Now</button>
					</div>
				  </div>
				  <div className="carousel-item">
					<div className="carousel-caption d-none d-md-block">
						<figure>
							<img src="images/banner-icon-1.svg"/>
						</figure>
					  <h2>24*7 Online International Money Transfer via BookMyForex</h2>
					  <ul>
						<li>Zero transfer charges | Use Promo code ZEROBANKFEE</li>
						<li>Say NO to Bank Visits | Transfer Anytime, Anywhere</li>
						<li>Live Exchange Rate | Lowest Rates Guaranteed</li>
						<li>Funds received abroad within 12 - 48 hours</li>
					  </ul>
					</div>
				  </div>
				  <div className="carousel-item">
					<div className="carousel-caption d-none d-md-block">
						<figure>
							<img src="images/banner-icon-1.svg"/>
						</figure>
					  <h2>24*7 Online International Money Transfer via BookMyForex</h2>
					  <ul>
						<li>Zero transfer charges | Use Promo code ZEROBANKFEE</li>
						<li>Say NO to Bank Visits | Transfer Anytime, Anywhere</li>
						<li>Live Exchange Rate | Lowest Rates Guaranteed</li>
						<li>Funds received abroad within 12 - 48 hours</li>
					  </ul>
					</div>
				  </div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				  <span className="carousel-control-next-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Next</span>
				</button>
			  </div>

			  <div className="book-order-search-box">
					<div className="book-order-tab-box">
						<form>
							<p className="book-order-input-box">
								<select>
									<option>item1</option>
									<option>item1</option>
									<option>item1</option>
									<option>item1</option>
									<option>item1</option>
								</select>
							</p>
							<div className="book-order-input-box book-cus-inputset">
								<p className="mb-0">
									<label>Currency You Have</label>
									<select>
										<option>item1</option>
										<option>item1</option>
										<option>item1</option>
										<option>item1</option>
										<option>item1</option>
									</select>
								</p>
								<p className="mb-0">
									<label>Currency You Want</label>
									<select>
										<option>item1</option>
										<option>item1</option>
										<option>item1</option>
										<option>item1</option>
										<option>item1</option>
									</select>
								</p>
							</div>
						
							<p className="book-order-input-box">
								<select>
									<option>item1</option>
									<option>item1</option>
									<option>item1</option>
									<option>item1</option>
									<option>item1</option>
								</select>
							</p>
							<p className="book-order-input-box">
								<input type="text" placeholder="7janpath Amount"/>
							</p>
							<p className="book-order-input-box">
								<input type="text" placeholder="7janpath Amount"/>
							</p>
						</form>
						<div className="total-book-order">
							<h2>Total Amount</h2>
							<h2>Rs. 0.00</h2>
						</div>
						<button className="book-btn-set">Book This Order</button>
					</div>
			  </div>
		</div>

    <div className="top-banner-card-main">
			<div className="custom-container">
			<div className="row">
				<div className="col-lg-4">
					<div className="top-banner-card">
						<figure>
							<img src="images/request-back.svg"/>
						</figure>
						<h3>Request Call Back</h3>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="top-banner-card">
						<figure>
							<img src="images/rate-alert.svg"/>
						</figure>
						<h3>Set Rate Alert</h3>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="top-banner-card">
						<figure>
							<img src="images/better-rate.svg"/>
						</figure>
						<h3>Request Better Rate</h3>
					</div>
				</div>
				
			</div>
			</div>
		</div> */}
	<BannerComponent />
	<BodyComponent />

    {/* <main className="main-middle-content-section pt-5 pb-5">

    <div className="container-fluid pb-5">	
				<div className="custom-container">
					
					<table className="table custom-table-set">
						<thead>
						  <tr>
							<th scope="col">Currency</th>
							<th scope="col">Amount</th>
							<th scope="col">Buy</th>
							<th scope="col">Sell</th>
							<th scope="col">Our Rate</th>
						  </tr>
						</thead>
						<tbody>
						  <tr>
							<td><img className="me-3" src="images/flag-1.svg"/>US Dollar (USD)</td>
							<td>₹ 79.97</td>
							<td> <span className="text-green"> + 0.32 %</span></td>
							<td><span className="text-green"> ₹+ 0.22 %</span></td>
							<td>₹ 69.97</td>
						  </tr>
						  <tr>
							<td> <img className="me-3" src="images/flag-2.svg"/> Euro (EUR)</td>
							<td>₹ 79.97</td>
							<td> <span className="text-green"> + 0.32 %</span></td>
							<td><span className="text-green"> ₹+ 0.22 %</span></td>
							<td>₹ 69.97</td>
						  </tr>
						  <tr>
							<td><img className="me-3" src="images/flag-1.svg"/> Ringgit (MYR)</td>
							<td>₹ 79.97</td>
							<td> <span className="text-green"> + 0.32 %</span></td>
							<td><span className="text-green"> ₹+ 0.22 %</span></td>
							<td>₹ 69.97</td>
						  </tr>
						  <tr>
							<td> <img className="me-3" src="images/flag-3.svg"/>US Dollar (USD)</td>
							<td>₹ 79.97</td>
							<td> <span className="text-red"> + 0.32 %</span></td>
							<td><span className="text-red"> ₹+ 0.22 %</span></td>
							<td>₹ 69.97</td>
						  </tr>
						  <tr>
							<td> <img className="me-3" src="images/flag-4.svg"/> Sterling Pound (GBP)</td>
							<td>₹ 79.97</td>
							<td> <span className="text-green"> + 0.32 %</span></td>
							<td><span className="text-green"> ₹+ 0.22 %</span></td>
							<td>₹ 69.97</td>
						  </tr>
						  <tr>
							<td> <img className="me-3" src="images/flag-2.svg"/> British Pound</td>
							<td>₹ 79.97</td>
							<td> <span className="text-red"> + 0.32 %</span></td>
							<td><span className="text-red"> ₹+ 0.22 %</span></td>
							<td>₹ 69.97</td>
						  </tr>
						  
						  <tr>
							<td> <img className="me-3" src="images/flag-1.svg"/>Euro (EUR)</td>
							<td>₹ 79.97</td>
							<td> <span className="text-green"> + 0.32 %</span></td>
							<td><span className="text-green"> ₹+ 0.22 %</span></td>
							<td>₹ 69.97</td>
						  </tr>
						</tbody>
					  </table>
				</div>
			</div>

      <div className="container-fluid pt-5 pb-5">	
				<div className="custom-container">
					<div className="head-container-sec mb-5">
						<h5>Most Popular Currency Tools</h5>
						<h2>Set Up & Exchanges Money Form  Your Cards in a Minute</h2>
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
				<div className="custom-container">		
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
				<div className="custom-container">
					<div className="head-container-sec mt-5 mb-5 pb-2">
						<h5>Most Popular Currency Tools</h5>
						<h2>Set Up & Exchanges Money Form  Your Cards in a Minute</h2>
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
				<div className="custom-container">
					<div className="head-container-sec mb-5 pb-1">
						<h5>Why Choose Us?</h5>
						<h2 className="text-white">We Always Try To Understand Customer’s Expectation</h2>
					</div>

						
					<div className="row">
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
				<div className="custom-container">
					<div className="head-container-sec mt-5 mb-5 pb-1">
						<h5>Most Popular Currency Tools</h5>
						<h2>Set Up & Exchanges Money Form  Your Cards in a Minute</h2>
					</div>

						
					<div className="row mb-5">
						<div className="col-lg-4">
							<div className="testimonial-card-main">
								<div className="testimonial-head-sec">
									<figure>
										<img src="images/user-img.png"/>
									</figure>
									<div className="testimonial-details">
										<h3>Satish Singh</h3>
										<p><img src="images/star-img.png"/></p>
									</div>
									<img className="coman-texticon-set" src="images/coman-text.svg"/>
								</div>
								<p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts,  Filler text is text that shares some. </p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="testimonial-card-main">
								<div className="testimonial-head-sec">
									<figure>
										<img src="images/user-img.png"/>
									</figure>
									<div className="testimonial-details">
										<h3>Satish Singh</h3>
										<p><img src="images/star-img.png"/></p>
									</div>
									<img className="coman-texticon-set" src="images/coman-text.svg"/>
								</div>
								<p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts,  Filler text is text that shares some. </p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="testimonial-card-main">
								<div className="testimonial-head-sec">
									<figure>
										<img src="images/user-img.png"/>
									</figure>
									<div className="testimonial-details">
										<h3>Satish Singh</h3>
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

    </main> */}

    {/* <footer className="footer-home-main">
			
			<div className="row">
					
				<div className="col-md-5 footer-home-menu">
					<h3>About Us</h3>
					<p>At 7 Janpath Forex, it’s all about our esteemed customers. They are at the forefront of services we offer. Our Forex rates are the best in the city.</p>
					<div className="col-md-3 footer-home-menu pt-4">
						<h3>Our Services </h3>
							<ul>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									
							</ul>
					</div>
						
				</div>
					<div className="col-md-3 footer-home-menu">
						<h3>Our Services </h3>
							<ul>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									<li><a className="dropdown-item" href="">Item 1</a></li>
									
							</ul>
					</div>
					
					<div className="col-md-3 footer-home-menu">
							<h3>More Way to Contact </h3>
							<p><img src="images/location.svg"/> 909, Logix City Centre, Sector-32, Noida, Gautam Budh Nagar, UP-201301</p>
								<p><img src="images/phone.svg"/> Phone: 011 4243 7078</p>
								<p><img src="images/time.svg"/> Working Timing - 10.00 AM to 7 PM  </p>
								
					</div>
				</div>
				
				<hr/>
				<div className="clearfix"></div>
			
				<div className="row mt-1">
					<div className="col-md-10 mt-1 text-left footer-create-text">
						Copyright © 2021 7TravelMoney
					</div>

					<div className="col-md-2 mt-1 footer-social text-left">
						<a href=""><i className="fab fa-linkedin"></i></a>
							<a href=""><i className="fab fa-facebook-square"></i></a>
								<a href=""><i className="fab fa-pinterest-square"></i></a>
								<a href=""><i className="fab fa-twitter-square"></i></a>
								<a href="">	<i className="fab fa-google-plus-square"></i></a>
					</div>
		</div>
	</footer> */}

	<FooterComponent />

    </main>
  )
}
