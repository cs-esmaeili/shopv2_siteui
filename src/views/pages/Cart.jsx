import React, { useState, useEffect } from "react";
import { _Home } from './../../services/Pages';
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from './../../actions/profile';
import config from "./../../config.json";
import { Link } from 'react-router-dom';
import { _ChangeCartNumber, _DeleteCart } from "../../services/Actions";
import { toast } from 'react-toastify';
import { _ListCart } from './../../services/Actions';

const Cart = () => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const factor = () => {
        console.log(cart);
        let price = 0;
        let discount = 0;
        cart.map((value) => {
            price += parseInt(value.price) * parseInt(value.number);
            discount += (parseInt(value.price) - parseInt(value.sale_price)) * parseInt(value.number);
        })
        setFinalPrice(price - discount);
        setPrice(price);
        setDiscount(discount);
    }

    const cartList = async () => {
        try {
            const respons = await _ListCart();
            if (respons.data.statusText === "ok") {
                dispatch(setCartData(respons.data.list));
            }
        } catch (error) {
            return false;
        }
    }
    const cartChangeNumber = async (product_id, number) => {
        try {
            const respons = await _ChangeCartNumber({ product_id, number });
            if (respons.data.statusText === "ok") {
                cartList();
            }
            toast(respons.data.message);
        } catch (error) {
            return false;
        }
    }

    const cartDelete = async (product_id) => {
        try {
            const respons = await _DeleteCart({ product_id });
            if (respons.data.statusText === "ok") {
                cartList();
            }
            toast(respons.data.message);
        } catch (error) {
            return false;
        }
    }

    useEffect(() => {
        factor();
    }, [cart]);

    return (
        <section className="inner-page" id="cart-page">
            <div className="container-fluid" id="page-hero">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 px-0">
                                    <h1>سبد خرید</h1>
                                    <p>مدیریت و خرید همزمان چند محصول</p>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="./index.html">صفحه نخست</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">سبد خرید</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="content">
                            <div className="row">
                                <div className="col-12 col-lg-9">
                                    <div id="cart-products">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 py-3">
                                                    <div className="pb-3" id="return-to-shop">می‌خواهید محصولات دیگری اضافه کنید؟ <a href="./products.html">بازگشت به فروشگاه</a></div>
                                                    <div className="d-none d-md-block">
                                                        <div className="row my-2" id="heading">
                                                            <div className="col-4">
                                                                <div>کالا</div>
                                                            </div>
                                                            <div className="col-2">
                                                                <div>قیمت واحد</div>
                                                            </div>
                                                            <div className="col-2 pl-4">
                                                                <div>تعداد</div>
                                                            </div>
                                                            <div className="col-2">
                                                                <div>تخفیف</div>
                                                            </div>
                                                            <div className="col-2 pr-0">
                                                                <div className="pr-3">قیمت نهایی</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {cart != null && cart.map((value, index) => {
                                                        return (
                                                            <div className="row product">
                                                                <div className="col-12 col-md-4">
                                                                    <div className="row">
                                                                        <div className="col-2 col-md-4 pl-0">
                                                                            {console.log(value)}
                                                                            <img src={value.images[0]} alt="" />
                                                                        </div>
                                                                        <div className="col-10 col-md-8">
                                                                            <a href="./product.html" target="_blank"><div className="title pt-2">{value.name}</div></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 col-md-2">
                                                                    <div className="d-md-none font-weight-bold">قیمت</div>
                                                                    <div className="pt-1"><span className="product-price">{value.price}</span> <span>تومان</span></div>
                                                                </div>
                                                                <div className="col-6 col-md-2 pl-4 pr-0 pr-md-3">
                                                                    <div className="d-md-none font-weight-bold">تعداد</div>
                                                                    <div className="input-group mb-3 order-number">
                                                                        <div className="input-group-prepend">
                                                                            <button className="btn btn-outline-secondary btn-plus" type="button" onClick={() => {
                                                                                let cart_c = [...cart];
                                                                                cartChangeNumber(value.product_id, parseInt(cart_c[index].number) + 1);
                                                                            }}>+</button>
                                                                        </div>
                                                                        <input type="text" name="order-number[]" disabled={true} defaultValue={value.number} value={value.number} className="form-control text-center order-number" />
                                                                        <div className="input-group-prepend">
                                                                            <button className="btn btn-outline-secondary btn-minus" type="button" onClick={() => {
                                                                                let cart_c = [...cart];
                                                                                if (parseInt(cart_c[index].number) - 1 > 0)
                                                                                    cartChangeNumber(value.product_id, parseInt(cart_c[index].number) - 1);
                                                                            }}>_</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 col-md-2">
                                                                    <div className="d-md-none font-weight-bold">تخفیف</div>
                                                                    <div className="pt-1"><span className="product-discount">{value.price - value.sale_price}</span> <span>تومان</span></div>
                                                                </div>
                                                                <div className="col-6 col-md-2 pr-0">
                                                                    <div className="d-md-none font-weight-bold">قیمت نهایی</div>
                                                                    <div className="pt-1 pr-2 bg-light"><span className="product-total" >{parseInt(value.sale_price) * parseInt(value.number)}</span> <span>تومان</span></div>
                                                                    <div className="product-remove btn-remove-from-basket" onClick={() => {
                                                                        cartDelete(value.product_id);
                                                                    }}>
                                                                        <div className="small pl-2"><i className="fa fa-times"></i> حذف</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                    <hr />

                                                    <div className="row product">
                                                        <div className="col-12">
                                                            <div className="product-remove btn-remove-from-basket" data-id="all" onClick={() => {
                                                                dispatch(setCartData(null));
                                                            }}>
                                                                <div className="float-end small pl-2 font-weight-bold">خالی کردن سبد</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 mt-2 mt-lg-0 pr-3 pr-lg-0">
                                    <div id="factor">
                                        <div className="container">
                                            <div className="row py-2">
                                                <div className="col-6">
                                                    <div>جمع کل فاکتور:</div>
                                                </div>
                                                <div className="col-6">
                                                    <div><span id="factor-total-price">{price}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div className="row py-2 bg-light">
                                                <div className="col-6">
                                                    <div>جمع تخفیف:</div>
                                                </div>
                                                <div className="col-6">
                                                    <div><span id="factor-total-discount">{discount}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div className="row py-2" id="total">
                                                <div className="col-6">
                                                    <div>مبلغ قابل پرداخت:</div>
                                                </div>
                                                <div className="col-6">
                                                    <div><span id="factor-total">{finalPrice}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div className="row py-2">
                                                <div className="col-12">
                                                    <Link
                                                        to={config.web_url + 'checkout'}
                                                    >
                                                        <input type="submit" value="ادامه ثبت سفارش" className="btn btn-success w-100" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;
