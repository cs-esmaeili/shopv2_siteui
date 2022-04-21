import React from "react";
import { Link } from "react-router-dom";
import config from "../../config.json";


const Product = (data) => {
    const { image, description, name, price, sale_price, product_id, category } = data.data;
    return (
        <div className="product-box">
            <Link
                to={config.web_url + 'product/' + product_id}
            >
                <div className="image"
                    style={{ backgroundImage: `url('${image}')` }}
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
            </div>
        </div >
    )
}
export default Product;


