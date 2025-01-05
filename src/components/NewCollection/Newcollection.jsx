import NewCollection from "../assets/NewcollectionData";
import Item from "../Item/Item";
import '../Item/Item.css';
import './Newcollection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Newcollection() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <>
            <div className="new-collections" data-aos="fade-left">
                <h2>New Collections</h2>
                <div className="collection-products category-products">
                    {NewCollection.map((item, indx) => {
                        return <Item key={indx} id={item.id} src={item.image} productname={item.productname} newPrice={item.newprice} oldPrice={item.oldprice} />
                    })}
                </div>
            </div>
        </>
    )
}
export default Newcollection;