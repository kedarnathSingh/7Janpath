import next from "next";
import CurrencyExchange from "../currencyExchange";

const BannerComponent = () => {
    return(
        <div><div className="top-banner-sec-main">
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
         <CurrencyExchange />
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
    </div></div>
    )
}

export default BannerComponent;