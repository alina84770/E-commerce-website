import './SingleProduct.css';
import starIcon from '../assets/star_icon.png';
import stardullIcon from '../assets/star_dull_icon.png';
import { useContext } from 'react';
import { CategoryProducts } from '../../context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function SingleProduct(Props) {
    const { product } = Props;
    const { addToCart } = useContext(CategoryProducts);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="single-page">
                <div className="single-page-left">
                    <div className="left-images" data-aos="fade-right">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />

                    </div>
                    <div className="right-image" data-aos="fade-left">
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="single-page-right" data-aos="fade-down">
                    <p className='product-name'>{product.name}</p>
                    <div className="rating">
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={starIcon} alt="" />
                        <img src={stardullIcon} alt="" />
                        (122)
                    </div>
                    <div className="price">
                        <p>${product.new_price} <span>${product.old_price}</span></p>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum. Iusto itaque debitis eius magnam!</p>
                    </div>
                    <h4>select size</h4>
                    <div className="product-size">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>
                    <div className="add-to-cart-btn">
                        <button onClick={() => addToCart(product.id)}>Add to cart</button>
                    </div>
                    <div className='catagory-tags'>
                        <p className='category'><span>category</span> : {product.category}</p>
                        <p className='tags'><span>Tags</span> : Modern , Lastest.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleProduct;