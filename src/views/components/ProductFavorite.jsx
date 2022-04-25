import React from "react";
import { Link } from "react-router-dom";
import config from "../../config.json";


const ProductFavorite = ({ data, deleteM }) => {
    const { images, description, name, price, sale_price, product_id, category } = data;
    return (
        <div className="product-box">
            <Link
                to={config.web_url + 'product/' + product_id}
            >
                <div className="image"
                    style={{ backgroundImage: `url('${images[0]}')` }}
                >
                    {(category.name) === 'فروش ویژه' &&
                        <span className="badge on-sale-badge">فروش ویژه</span>
                    }
                </div>
            </Link>
            <div className="details p-3">
                <div className="category">
                    <Link
                        to={config.web_url + 'product/' + product_id}
                    >
                        {category.name}
                    </Link>
                </div>
                <Link
                    to={config.web_url + 'product/' + product_id}
                >
                    <h2>{name}</h2>
                </Link>
                <div>
                    <span className="discounted">{sale_price} تومان</span>
                    <br className="d-sm-none" />
                    <span className="price">{price} تومان</span>
                </div>
                <button type="button" className="btn btn-danger" style={{ width: "100%" }} onClick={() => deleteM(product_id)}>حذف</button>
            </div>
        </div >
    )
}
export default ProductFavorite;


