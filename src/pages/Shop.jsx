import '../App.css';
import Hero from '../components/Hero/Hero';
import PopularProducts from '../components/Popular-Products/PopularProducts';
import Offer from '../components/Offer/Offer';
import Newcollection from '../components/NewCollection/Newcollection';
import NewsLetter from '../components/NewsLetter/NewsLetter';

function Shop() {
    return (
        <>
            <Hero />
            <PopularProducts />
            <Offer/>
            <Newcollection/>
            <NewsLetter/>
        </>
    )
}
export default Shop;