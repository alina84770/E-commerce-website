import breadcrum from '../assets/breadcrum_arrow.png';
import './Breadcrum.css';
function Breadcrum(Props) {
    const { product } = Props;
    return (
        <>
            <div className="breadcrums">
                <p>Home <img src={breadcrum} alt="" /> shop <img src={breadcrum} alt="" /> {product.category} <img src={breadcrum} alt="" /> {product.name}</p>
            </div>
        </>

    )
}
export default Breadcrum;