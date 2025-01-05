import productData from '../assets/popularData';
import Item from '../Item/Item';
import './PopularProducts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function PopularProducts() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="popular-section" data-aos="fade-right">
                <h2 data-aos="fade-down">POPULAR IN WOMEN</h2>
                <div className="products">
                    {productData.map((val, indx) => {
                        return <Item key={indx} id={val.id} productname={val.productName} src={val.image} newPrice={val.newPrice} oldPrice={val.oldPrice} />
                    })}
                </div>
            </div>
        </>
    )
}
export default PopularProducts;