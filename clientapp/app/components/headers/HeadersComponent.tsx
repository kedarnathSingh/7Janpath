import next from "next";
import Link from "next/link";
import './headers.scss';

const HeadersComponent = () => {
    return(
        <div><div className="top-header-strip">
        <div className="custom-container d-flex justify-content-between">
          <ul className="top-contect-sec">
            <li className="pe-5"><img className="pt-2" src="images/call-top.svg"/> <span>+91-9810474842</span></li>
            <li><img className="pt-2" src="images/message-top.svg"/> <span>Business@7travelmoney.com</span></li>
          </ul>
          <ul className="login-nav-sec">
            <li className="pe-4">
				<Link className="normal-link" href={'/user-registration'}>Register</Link>
				</li>
            <li className="ms-4">
				<Link  className="normal-link" href={'/login'}>Login</Link>
				</li>
          </ul>
        </div>
      </div>

      <header className="header-custom-main">
			<nav className="navbar navbar-expand-lg custom-nav ">
				<div className="container-fluid">
				  <Link className="navbar-brand" href={'/home'}>
					<img className="pt-0" src="images/logo.svg"/>
				  </Link>
				  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					  <li className="nav-item">
						<Link className="nav-link active" href={'/home'} aria-current="page" >Home</Link>
					  </li>
					  <li className="nav-item">
						<Link className="nav-link" href={'/about-us'}> About Us</Link>
					  </li>
					
					  {/* <li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Services
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						  <li><a className="dropdown-item" href="#">Action</a></li>
						  <li><a className="dropdown-item" href="#">Another action</a></li>
						  <li><hr className="dropdown-divider"/></li>
						  <li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					  </li> */}
					  <li className="nav-item">
						<Link className="nav-link" href={'/share-security'}>Share & Security</Link>
					  </li>
					  <li className="nav-item">
						<Link className="nav-link" href={'financial-services'}>Financial Services</Link>
					  </li>
					  <li className="nav-item">
						{/* <a className="nav-link" href="#">Send Money Abroad </a> */}
						<Link className="nav-link" href={'/send-money-abroad'}>Send Money Abroad </Link>
					  </li>
					  <li className="nav-item">
						{/* <a className="nav-link" href="#">Contact us </a> */}
						<Link className="nav-link" href={'/contact-us'}>Contact us </Link>
					  </li>
					</ul>
					<form className="d-flex ms-4">
					  <button className="rate-btn-top me-4" > <img className="me-2" src="images/rates-icon.svg"/> <span>
						<Link className="rates-link" href={'/rates'}>Rates</Link></span></button>
					  <button className="offer-btn-top"><img className="me-2" src="images/offer-icon.svg"/> <span>
						<Link className="offers-link" href={'/offers'} >Offers</Link>
						</span></button>
					</form>
				  </div>
				</div>
			  </nav>
				
		</header></div>
    )
}

export default HeadersComponent;