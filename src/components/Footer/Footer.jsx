import pinterest from '../assets/pintester_icon.png';
import Whatsapp from '../assets/whatsapp_icon.png';
import footerLogo from '../assets/logo_big.png';
import instagram from '../assets/instagram_icon.png';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (

        <div className="footer flex-center">
            <div>
                <div className="footer-logo flex-center">
                    <img src={footerLogo} alt="Shopper logo" data-aos="fade-right" />
                    <h2>SHOPPER</h2>
                </div>
                <div className="footer-links" data-aos="fade-down">
                    <ul className='flex-center'>
                        <li>Company</li>
                        <li>Products</li>
                        <li>Offices</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-social-icons flex-center" data-aos="fade-up">
                    <img src={instagram} alt="Instagram icon" />
                    <img src={pinterest} alt="pinterest icon" />
                    <img src={Whatsapp} alt="Whatsapp icon" />
                </div>
                <hr />
                <div className='footer-text flex-center'>
                    <p>Copyright &copy; 2024 _ All Rights Reserved.</p>
                </div>
            </div>
        </div>

    )
}
export default Footer;