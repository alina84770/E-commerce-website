import image from "../assets/exclusive_image.png";
import "./Offer.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Offer() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="offer-section">
                <div className="offer-left" data-aos="fade-up">
                    <h1>Exclusive<br />Offers For You</h1>
                    <p>ONLY ON BEST SELLERS PRODUCTS</p>
                    <div className="offer-btn"> <button>check now</button></div>
                </div>
                <div className="offer-right" data-aos="fade-down">
                    <img src={image} alt="" />
                </div>
            </div>
        </>
    )
}
export default Offer;