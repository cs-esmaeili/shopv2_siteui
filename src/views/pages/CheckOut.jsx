import React, { useState, useEffect } from "react";
import { _Home } from './../../services/Pages';
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from './../../actions/profile';
import config from "./../../config.json";
import { Link } from 'react-router-dom';
import { _ListAddress } from './../../services/Actions';
import { toast } from 'react-toastify';

const CheckOut = () => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [list, setList] = useState(null);
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

    useEffect(() => {
        listAddress();
        factor();
    }, [cart]);



    return (
        <section class="inner-page" id="checkout-page">
            <div class="container-fluid" id="page-hero">
                <div class="row">
                    <div class="col-12">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 px-0">
                                    <h1>پیش فاکتور</h1>
                                    <p>با تکیمل پرداخت فاکتور، خرید خود را تکمیل کنید.</p>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="./index.html">صفحه نخست</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">پیش فاکتور</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="content">
                            <div class="row">
                                <div class="col-12 col-lg-9">
                                    <section id="choose-address">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-12 py-3">
                                                    <div class="pb-1 title">آدرس تحویل سفارش</div>
                                                    <div class="row">
                                                        {list != null && list.map((value) => {
                                                            return (
                                                                <div class="col-12 col-md-9 pl-0" id="address-detail">
                                                                    <div class="p-3 ml-3 mb-2 mb-md-0 ml-md-0 address-to-send">
                                                                        <div class="address-title">
                                                                            <span id="province-title">{value.state}</span>،
                                                                            <span id="city-title">{value.city}</span>،
                                                                            <span id="address">{value.address}</span>،
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-12 col-md-4">کدپستی: {value.postal_code}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}


                                                        <div class="col-12 col-md-3">
                                                            <div class="row">
                                                                <div class="col-6 col-md-12 pl-2 px-md-3">
                                                                    <a href="#"><div class="btn btn-light w-100">تغییر آدرس</div></a>
                                                                </div>
                                                                <div class="col-6 col-md-12 pr-2 px-md-3">
                                                                    <Link
                                                                        to={config.web_url + 'address'}
                                                                    >
                                                                        <div class="btn btn-outline-dark mt-0 mt-md-1 w-100">افزودن آدرس جدید</div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section class="mt-3" id="orders">
                                        <div class="container mt-2">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="pb-1 title">سفارشات شما</div>
                                                    <div class="row">
                                                        {cart != null ?
                                                            cart.map((value) => {
                                                                return (
                                                                    <span class="col-6 col-sm-4 col-lg-3 px-0">
                                                                        <Link
                                                                            to={config.web_url + 'checkout'}
                                                                        >
                                                                            <div class="product-box">
                                                                                <div class="image" style={{ backgroundImage: `url('${value.images[0]}')` }}></div>
                                                                                <div class="text-center px-1 px-sm-3">
                                                                                    <h2>{value.name}</h2>
                                                                                    <div >{`قیمت : ${value.sale_price}`}</div>
                                                                                    <div class="number">تعداد: {value.number} عدد</div>
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
                                <div class="col-12 col-lg-3 mt-2 mt-lg-0 pr-3 pr-lg-0">
                                    <div id="factor">
                                        <div class="container">
                                            <div class="row py-2">
                                                <div class="col-6">
                                                    <div>جمع کل فاکتور:</div>
                                                </div>
                                                <div class="col-6">
                                                    <div><span id="factor-total-price">{price}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div class="row py-2 bg-light">
                                                <div class="col-6">
                                                    <div>جمع تخفیف:</div>
                                                </div>
                                                <div class="col-6">
                                                    <div><span id="factor-total-discount">{discount}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div class="row py-2" id="total">
                                                <div class="col-6">
                                                    <div>مبلغ قابل پرداخت:</div>
                                                </div>
                                                <div class="col-6">
                                                    <div><span id="factor-total">{finalPrice}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div class="row py-2">
                                                <div class="col-12">
                                                    <input type="submit" value="ثبت سفارش" class="btn btn-success w-100" />
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

export default CheckOut;
