import React, { useState, useEffect } from "react";
import { _Home } from './../../services/Pages';
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from './../../actions/profile';
const Cart = () => {

    const [data, setData] = useState(null);
    const [productShow, setProductShow] = useState(1);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const factor = () => {
        let price = 0;
        let discount = 0;
        cart.map((value) => {
            price += parseInt(value.price);
            discount += (parseInt(value.price) - parseInt(value.sale_price));
        })
        let finalPrice = price - discount;
        return { price, discount, finalPrice };
    }
    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <section class="inner-page" id="cart-page">
            <div class="container-fluid" id="page-hero">
                <div class="row">
                    <div class="col-12">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 px-0">
                                    <h1>سبد خرید</h1>
                                    <p>مدیریت و خرید همزمان چند محصول</p>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="./index.html">صفحه نخست</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">سبد خرید</li>
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
                                    <div id="cart-products">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-12 py-3">
                                                    <div class="pb-3" id="return-to-shop">می‌خواهید محصولات دیگری اضافه کنید؟ <a href="./products.html">بازگشت به فروشگاه</a></div>
                                                    <div class="d-none d-md-block">
                                                        <div class="row my-2" id="heading">
                                                            <div class="col-4">
                                                                <div>کالا</div>
                                                            </div>
                                                            <div class="col-2">
                                                                <div>قیمت واحد</div>
                                                            </div>
                                                            <div class="col-2 pl-4">
                                                                <div>تعداد</div>
                                                            </div>
                                                            <div class="col-2">
                                                                <div>تخفیف</div>
                                                            </div>
                                                            <div class="col-2 pr-0">
                                                                <div class="pr-3">قیمت نهایی</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {cart != null && cart.map((value, index) => {
                                                        return (
                                                            <div class="row product">
                                                                <div class="col-12 col-md-4">
                                                                    <div class="row">
                                                                        <div class="col-2 col-md-4 pl-0">
                                                                            <img src={value.images[0]} alt="" />
                                                                        </div>
                                                                        <div class="col-10 col-md-8">
                                                                            <a href="./product.html" target="_blank"><div class="title pt-2">{value.name}</div></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-2">
                                                                    <div class="d-md-none font-weight-bold">قیمت</div>
                                                                    <div class="pt-1"><span class="product-price">{value.price}</span> <span>تومان</span></div>
                                                                </div>
                                                                <div class="col-6 col-md-2 pl-4 pr-0 pr-md-3">
                                                                    <div class="d-md-none font-weight-bold">تعداد</div>
                                                                    <div class="input-group mb-3 order-number">
                                                                        <div class="input-group-prepend">
                                                                            <button class="btn btn-outline-secondary btn-plus" type="button" onClick={() => {
                                                                                let cart_c = [...cart];
                                                                                cart_c[index].number = parseInt(cart_c[index].number) + 1;
                                                                                dispatch(setCartData(cart_c));
                                                                            }}>+</button>
                                                                        </div>
                                                                        <input type="text" name="order-number[]" disabled={true} defaultValue={value.number} value={value.number} class="form-control text-center order-number" />
                                                                        <div class="input-group-prepend">
                                                                            <button class="btn btn-outline-secondary btn-minus" type="button" onClick={() => {
                                                                                let cart_c = [...cart];
                                                                                if (parseInt(cart_c[index].number) - 1 > 0)
                                                                                    cart_c[index].number = parseInt(cart_c[index].number) - 1;
                                                                                dispatch(setCartData(cart_c));
                                                                            }}>_</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-2">
                                                                    <div class="d-md-none font-weight-bold">تخفیف</div>
                                                                    <div class="pt-1"><span class="product-discount">{value.price - value.sale_price}</span> <span>تومان</span></div>
                                                                </div>
                                                                <div class="col-6 col-md-2 pr-0">
                                                                    <div class="d-md-none font-weight-bold">قیمت نهایی</div>
                                                                    <div class="pt-1 pr-2 bg-light"><span class="product-total" >{value.sale_price}</span> <span>تومان</span></div>
                                                                    <div class="product-remove btn-remove-from-basket" onClick={() => {
                                                                        let cart_c = [...cart];
                                                                        cart_c.splice(index, 1);
                                                                        dispatch(setCartData(cart_c));
                                                                    }}>
                                                                        <div class="small pl-2"><i class="fa fa-times"></i> حذف</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                    <hr />

                                                    <div class="row product">
                                                        <div class="col-12">
                                                            <div class="product-remove btn-remove-from-basket" data-id="all" onClick={() => {
                                                                dispatch(setCartData(null));
                                                            }}>
                                                                <div class="float-end small pl-2 font-weight-bold">خالی کردن سبد</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3 mt-2 mt-lg-0 pr-3 pr-lg-0">
                                    <div id="factor">
                                        <div class="container">
                                            <div class="row py-2">
                                                <div class="col-6">
                                                    <div>جمع کل فاکتور:</div>
                                                </div>
                                                <div class="col-6">
                                                    <div><span id="factor-total-price">{factor().price}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div class="row py-2 bg-light">
                                                <div class="col-6">
                                                    <div>جمع تخفیف:</div>
                                                </div>
                                                <div class="col-6">
                                                    <div><span id="factor-total-discount">{factor().discount}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div class="row py-2" id="total">
                                                <div class="col-6">
                                                    <div>مبلغ قابل پرداخت:</div>
                                                </div>
                                                <div class="col-6">
                                                    <div><span id="factor-total">{factor().finalPrice}</span> تومان</div>
                                                </div>
                                            </div>
                                            <div class="row py-2">
                                                <div class="col-12">
                                                    <a href="./checkout.html"><input type="submit" value="ادامه ثبت سفارش" class="btn btn-success w-100" /></a>
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
