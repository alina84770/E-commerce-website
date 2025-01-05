import handIcon from '../assets/hand_icon.png';
import heroImage from '../assets/hero_image.png';
import './Hero.css';
import './ResponsiveStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function Hero() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="hero-section">
                <div className="hero-left" data-aos="fade-right">
                    <p className="head">NEW ARRIVALS ONLY</p>
                    <div>
                        <div className="hand-icon">
                            <p className='hero-text'>new</p>
                            <img src={handIcon} alt="" />
                        </div>
                        <p className='hero-text'>collections<br /> for everyone</p>
                    </div>
                    <button>Lastest collections<i class="fa-solid fa-arrow-right-long"></i></button>
                </div>

                <div className="hero-right">
                    <img src={heroImage} alt="" data-aos="fade-down-left" />
                </div>
            </div>
        </>
    )
}
export default Hero;