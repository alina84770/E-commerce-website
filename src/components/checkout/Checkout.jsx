import './Checkout.css';
import { useContext, useEffect } from 'react';
import { CategoryProducts } from '../../context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

function Checkout() {
    const { all_product, cartItems, getTotalAmount } = useContext(CategoryProducts);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="checkout-form flex-center">
                <form className="checkout" data-aos="fade-down">
                    <h3>Basic Information</h3>

                    <div className="form-group flex-center">
                        <input type="text" placeholder="Full Name" />
                        <input type="tel" placeholder="Phone Number" />
                    </div>

                    <div className="form-group flex-center">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="Zip code" />
                    </div>

                    <div className="address">
                        <textarea rows="5" cols="57" placeholder="Full Address"></textarea>
                    </div>

                    <div className="order-btn">
                        <NavLink to="/">
                            <button>Place Order</button>
                        </NavLink>
                    </div>
                </form>

                <div className="order-detail flex-center" data-aos="fade-up">
                    <table className="checkout-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_product.map((item) => {
                                if (cartItems[item.id] > 0) {
                                    return (
                                        <tr key={item.id}>
                                            <td style={{ fontSize: '0.8rem' }}>{item.name}</td>
                                            <td>${item.new_price}</td>
                                            <td>{cartItems[item.id]}</td>
                                            <td>${item.new_price * cartItems[item.id]}</td>
                                        </tr>
                                    );
                                }
                                return null; // Avoids rendering if quantity is 0
                            })}
                            <tr>
                                <th colSpan="2" className="grand-total-price">
                                    Grand Total
                                </th>
                                <th colSpan="2" className="grand-total-price">
                                    ${getTotalAmount()}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Checkout;
