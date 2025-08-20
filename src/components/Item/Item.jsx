import { useContext } from 'react';
import './Item.css';
import { Link, useNavigate } from 'react-router-dom';
import { CategoryProducts } from '../../context/Context';

function Item(Props) {
    const { addToCart, islogin } = useContext(CategoryProducts);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (islogin === true) {
            addToCart(Props.id);
        } else {
            alert("Login is required to add products to the cart."); // Show an alert
            navigate('/signuplogin'); // Redirect to the login page
        }
    };

    return (
        <>
            <div className='product-Card'>
                <div className='card'>
                    <Link to={`/product/${Props.id}`} ><img src={Props.src} alt="product-img" loading="lazy" /></Link>
                    <div className="product-content">
                        <p className="product-name">{Props.productname}</p>
                        <div class="price">
                            <p class="new-price">${Props.newPrice}</p>
                            <p class="old-price">${Props.oldPrice}</p>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item;