import "../styles/styles.scss"

import flogo from '../images/icon-white-facebook.png'
import inlogo from '../images/icon-white-linkedin.png'
import phone1 from '../images/2048px-Circle-icons-phone.svg.png'
import waveblue from '../images//wave-blue-light.png'
import logo2 from '../images/logo-2.png'
import logo1 from '../images/logo-1.jpg'

function Footer() {
    return (     
      <>
      <div class="waveBlueLine">
      </div>
      <footer id="footer">
        <div className="footer-content">
          <div class="footer-logo img">
            <img src={logo2} alt="" className="logo"/>
          </div>
          <div class="footer-links">
            <ul class="footer-Ulist">

              <li class="footer-social facebook">
                <a href="#0" aria-label="Facebook">
                  <img src={flogo} alt="facebook" />
                </a>
              </li>
              {/* <li class="footer-social linkedin">
                <a href="#1" aria-label="Linkdin">  
                  <img src={inlogo} alt="linkdin" />
                </a>
              </li> */}
              <li class="telephone">
                <a href="#0" aria-label="Call">
                  <i class="demo-icon icon-phone-circled">&#xe801;</i>
                  {/* <a href="contact" className="btn-primary">+1 778-995-8205</a> */}
                  <span >+1 712-642-2755</span>
                </a>
              </li>                      
              <li class="contact-Us email">
                <a href="/contact" class="email">
                  <i class="demo-icon icon-mail">&#xe800;</i>
                  <span href='contact'>Contact Us</span>
                </a>
              </li>
              <li className="copyright">
                <span>Copyright 2023. All Rights Reserved</span>
              </li>               
            </ul>
          </div>
        </div>
       
      </footer>
      </>
      )
  }

  
  export default Footer;
