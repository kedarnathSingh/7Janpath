import next from "next";

const FooterComponent = () => {
    return(
        
            <footer className="footer-home-main">
			
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
	</footer>
        
    )
}

export default FooterComponent;