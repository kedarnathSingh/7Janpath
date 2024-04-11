import next from "next";

const FooterComponent = () => {
    return(
        
            <footer className="footer-home-main">
			
			<div className="row">
					
				<div className="col-md-5 footer-home-menu">
					{/* <h3>About Us</h3>
					<p>At 7 Janpath Forex, it’s all about our esteemed customers. They are at the forefront of services we offer. Our Forex rates are the best in the city.</p> */}
					<div className="col-md-3 footer-home-menu pt-4">
						<h3>Quick Links</h3>
							<ul>
									<li><a className="dropdown-item" href="#">Special Offers</a></li>
									<li><a className="dropdown-item" href="#">Currencies</a></li>
									<li><a className="dropdown-item" href="#">Currency Converter</a></li>
									<li><a className="dropdown-item" href="#">Careers</a></li>
									<li><a className="dropdown-item" href="#">faqs</a></li>
									<li><a className="dropdown-item" href="#">our Policies</a></li>
									<li><a className="dropdown-item" href="#">Press release</a></li>
									<li><a className="dropdown-item" href="#">Sitemap</a></li>	
							</ul>
					</div>
						
				</div>
					<div className="col-md-3 footer-home-menu">
						<h3>Our Services </h3>
							<ul>
									<li><a className="dropdown-item" href="#">Home</a></li>
									<li><a className="dropdown-item" href="#">About Us</a></li>
									<li><a className="dropdown-item" href="#">Share & security</a></li>
									<li><a className="dropdown-item" href="#">Financial Services</a></li>
									<li><a className="dropdown-item" href="#">Send Money Abroad</a></li>
									<li><a className="dropdown-item" href="#">Travel insurance</a></li>
									<li><a className="dropdown-item" href="#">International Simcard</a></li>
									
							</ul>
					</div>
					
					<div className="col-md-3 footer-home-menu">
							<h3>More Way to Contact </h3>
							<p><img src="images/location.svg"/> MZ9007 Ansal Fortune Arcade, Sector-18, Noida, UP-201301</p>
								<p><img src="images/phone.svg"/> Mobile: +91-9810474842</p>
								<p><img src="images/time.svg"/> Working Timing - 10.00 AM to 7 PM  </p>
								
					</div>
				</div>
				
				<hr/>
				<div className="clearfix"></div>
			
				<div className="row mt-1">
					<div className="col-md-10 mt-1 text-left footer-create-text">
						Copyright © 2024 7TravelMoney
					</div>

					{/* <div className="col-md-2 mt-1 footer-social text-left">
						<a href=""><i className="fab fa-linkedin"></i></a>
							<a href=""><i className="fab fa-facebook-square"></i></a>
								<a href=""><i className="fab fa-pinterest-square"></i></a>
								<a href=""><i className="fab fa-twitter-square"></i></a>
								<a href="">	<i className="fab fa-google-plus-square"></i></a>
					</div> */}
		</div>
	</footer>
        
    )
}

export default FooterComponent;