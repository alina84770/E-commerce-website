import './NewsLetter.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function NewsLetter() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <>
            <div className="news-letter" data-aos="flip-left">
                <div data-aos="zoom-in">
                    <h1>Get Exclusive Offers On Your Emails</h1>
                    <p>Subscribe to our news letter and stay updated</p>
                    <div className="input-field">
                        <input type="text" placeholder='your email id' />
                        <button>subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsLetter;