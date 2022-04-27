import React, { useState, useEffect } from "react";
import { _Home } from './../../services/Pages';
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from './../../actions/profile';
import config from "./../../config.json";
import { Link } from 'react-router-dom';
import { _ListAddress, _Purchase, _ListCart } from './../../services/Actions';
import { toast } from 'react-toastify';
import { withRouter } from "react-router-dom";

const CheckOut = ({history}) => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [list, setList] = useState(null);
    const [address, setAddress] = useState(1);
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

    const listAddress = async () => {
        try {
            const respons = await _ListAddress();
            if (respons.data.statusText === "ok") {
                setList(respons.data.list);
            } else {
                toast(respons.data.message);
            }
        } catch (error) {
            console.log(error);
        }
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
    const purchase = async () => {
        try {
            const respons = await _Purchase({ person_address_id: address });
            if (respons.data.statusText === "ok") {
                cartList();
                history.replace(config.web_url + 'factors');
            }
            toast(respons.data.message);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listAddress();
        factor();
    }, [cart]);



    return (
        <section className="inner-page" id="checkout-page">
            <div className="container-fluid" id="page-hero">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 px-0">
                                    <h1>پیش فاکتور</h1>
                                    <p>با تکیمل پرداخت فاکتور، خرید خود را تکمیل کنید.</p>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="./index.html">صفحه نخست</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">پیش فاکتور</li>
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
                                    <section id="choose-address">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 py-3">
                                                    <div className="pb-1 title">آدرس تحویل سفارش</div>
                                                    <div className="row">
                                                        {list != null ? list.map((value) => {
                                                            return (
                                                                <div className="col-12 col-md-9 pl-0" id="address-detail" onClick={() => {
                                                                    setAddress(value.person_address_id);
                                                                }}>
                                                                    <div className="p-3 ml-3 mb-2 mb-md-0 ml-md-0 address-to-send" style={{ borderColor: (value.person_address_id === address) ? "blue" : "" }}>
                                                                        <div className="row">
                                                                            <div className="col-10">
                                                                                <div className="address-title">
                                                                                    <span id="province-title">{value.state}</span>،
                                                                                    <span id="city-title">{value.city}</span>،
                                                                                    <span id="address">{value.address}</span>،
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-12 col-md-4">کدپستی: {value.postal_code}</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-2 d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
                                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={(value.person_address_id === address) ? true : false} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                            :
                                                            <div>هیچ آدرسی ثبت نشده است</div>
                                                        }
                                                        <div className="col-12 col-md-3">
                                                            <div className="row">
                                                                <div className="col-6 col-md-12 pr-2 px-md-3">
                                                                    <Link
                                                                        to={config.web_url + 'address'}
                                                                    >
                                                                        <div className="btn btn-outline-dark mt-0 mt-md-1 w-100">افزودن آدرس جدید</div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="mt-3" id="orders">
                                        <div className="container mt-2">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="pb-1 title">سفارشات شما</div>
                                                    <div className="row">
                                                        {cart != null ?
                                                            cart.map((value) => {
                                                                return (
                                                                    <span className="col-6 col-sm-4 col-lg-3 px-0">
                                                                        <Link
                                                                            to={config.web_url + 'checkout'}
                                                                        >
                                                                            <div className="product-box">
                                                                                <div className="image" style={{ backgroundImage: `url('${value.images[0]}')` }}></div>
                                                                                <div className="text-center px-1 px-sm-3">
                                                                                    <h2>{value.name}</h2>
                                                                                    <div >{`قیمت : ${value.sale_price}`}</div>
                                                                                    <div className="number">تعداد: {value.number} عدد</div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </span>
                                                                );
                                                            })
                                                            :
                                                            <div>هیچ آدرسی ثبت نشده است</div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
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
                                                    <input type="submit" value="ثبت سفارش" className="btn btn-success w-100" onClick={() => {
                                                        purchase();
                                                    }} />
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
export default withRouter(CheckOut);
