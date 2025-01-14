import { useContext } from 'react';
import './CartItem.css';
import { CategoryProducts } from '../../context/Context';
import emptyCartImage from '../assets/empty-cart.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function CartItems() {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const { all_product, cartItems, removeFromCart, getTotalAmount } = useContext(CategoryProducts);

    // Check if there are any items in the cart
    const hasItemsInCart = all_product.some((e) => cartItems[e.id] > 0);

    return (
        <>
            {hasItemsInCart ? (
                <div className='caritems-section' >
                    <div className="product-info">
                        <table data-aos="fade-down " className='cart-table'>
                            <tr>
                                <th>Products</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>

                            {all_product.map((e) => {
                                if (cartItems[e.id] > 0) {
                                    return (

                                        <tr>
                                            <td><img src={e.image} alt="" /></td>
                                            <td className='item-name'><p>{e.name}</p></td>
                                            <td>${e.new_price}</td>
                                            <td><button>{cartItems[e.id]}</button></td>
                                            <td>${e.new_price * cartItems[e.id]}</td>
                                            <td><i onClick={() => removeFromCart(e.id)} className="fa-solid fa-xmark" ></i></td>
                                        </tr>


                                    );
                                }
                                return null;
                            })}
                        </table>
                    </div>
                    <div className="cart-total-section" data-aos="fade-right">
                        <div className='cart-total-amount'>
                            <h2>Cart Total Amount</h2>
                            <div className="cart-total">
                                <p>Subtotal</p>
                                <p>${getTotalAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total">
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cart-total">
                                <p>Total</p>
                                <p>${getTotalAmount()}</p>
                            </div>
                            <hr />

                            <NavLink to='/checkout'><button className='btn-checkout'>Proceed to checkout</button></NavLink>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="empty-cart">
                    <h1 data-aos="fade-right">No item <br /> in the cart</h1>
                    <div className="empty-cart-img">
                        <img src={emptyCartImage} alt="" data-aos="fade-left" />
                    </div>
                </div>
            )}
        </>
    );
}

export default CartItems;

