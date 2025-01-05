import { CategoryProducts } from "../context/Context";
import { useContext } from "react";
import dropdown from '../components/assets/dropdown_icon.png';
import Item from "../components/Item/Item";
import "../components/Item/Item.css";
import "./CSS/Category.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Category(Props) {
    const { all_product } = useContext(CategoryProducts);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="category">
                <div class="banner-section" data-aos="fade-down">
                    <img className="banner" src={Props.banner} alt="" />
                </div>
                <div className="products-sort">
                    <p>
                        <span>showing 1-12 </span> out of 36 products
                    </p>
                    <div className="sort-btn">
                        <button >Sort by <img src={dropdown} alt="" /></button>
                    </div>
                </div>
                <div className="category-products" data-aos="fade-right">
                    {all_product.map((item, indx) => {
                        if (Props.category === item.category) {
                            return <Item key={indx} id={item.id} src={item.image} productname={item.name} newPrice={item.new_price} oldPrice={item.old_price} />
                        }
                        else {
                            return null
                        }
                    })}
                </div>
                <div className="btn-exploremore">
                    <button data-aos="fade-up">Explore More</button>
                </div>
            </div>
        </>
    )
}
export default Category;