import next from "next";

const HeadersComponent = () => {
    return(
        <div><div className="top-header-strip">
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
				
		</header></div>
    )
}

export default HeadersComponent;