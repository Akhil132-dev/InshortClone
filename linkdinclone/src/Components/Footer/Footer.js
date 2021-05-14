import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
function Footer() {
    return (

        <section id="footer">
            <img src="img/footer-img.png" className="footerimg" alt="" />
            <div className="footer-row">
                <div className="footer-left">
                    <p>Download App for Android and iso mobile phone</p>
                    <a href="https://apps.apple.com/us/app/news-in-shorts/id892146527"

                    >
                        <img
                            alt="app store"
                            height="30%"
                            src="https://assets.inshorts.com/website_assets/images/appstore.png"
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source=inshorts%20mobile">
                        <img
                            alt="play store"
                            height="30%"
                            src="https://assets.inshorts.com/website_assets/images/playstore.png"
                        />
                    </a>
                </div>
                <div className="footer-right">
                    <h1>get In Touch</h1>
                    <p>
                        30 Raykan pura Colony , Kali Mata mandir ke pass shujalpur City IN
              <i className="fa fa-map-marker"></i>
                    </p>
                    <p>agiri53675@gmail.com<i className="fa fa-paper-plane"></i></p>
                    <p>+91 6261753365<i className="fa fa-phone"></i></p>
                </div>
            </div>
            <div className="social-links">

                <a href="#" target="_blank"><InstagramIcon className="fa" /></a>
                <a href="#" target="_blank"> <LinkedInIcon className="fa" /></a>
               
                <a href="https://twitter.com/inshorts" target="_blank" ><TwitterIcon className="fa" /></a>
                <p style={{ color: "white" }}>Copyright:Inshort.com 2021</p>
            </div>
        </section>

    )
}

export default Footer
