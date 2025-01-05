import { useParams } from "react-router-dom";
import { CategoryProducts } from "../context/Context";
import { useContext } from "react";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import SingleProduct from "../components/singleproduct/SingleProduct";
function Product() {
    const { all_product } = useContext(CategoryProducts);
    const { id } = useParams();
    const product = all_product.find((val) => val.id === Number(id));

    return (
        <>
            <Breadcrum product={product} />
            <SingleProduct product={product}/>
        </>
    )
}
export default Product;