import React from "react";
const Product = (data) => {
    const { image, description, name, price, sale_price, product_id, category } = data.data;
    return (
        <div className="product-box">
            <a href="./product.html">
                <div className="image"
                    style={{ backgroundImage: `url('${image}')` }}
                >
                    {(category.name) === 'فروش ویژه' &&
                        <span className="badge on-sale-badge">فروش ویژه</span>
                    }
                </div>
            </a >
            <div className="details p-3">
                <div className="category">
                    <a href="./products.html">{category.name}</a>
                </div>
                <a href="./product.html"><h2>{name}</h2></a>
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


