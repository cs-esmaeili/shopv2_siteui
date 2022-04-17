import React, { useState, useEffect } from "react";

const Home = () => {

    return (
        <>
            <section id="slider" class="mt-3">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-9" data-aos="fade-zoom-in" data-aos-duration="700">
                            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="assets/images/slider/slide1.jpg" class="d-block" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/images/slider/slide2.jpg" class="d-block" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mt-2 mt-sm-1 text-center text-sm-start" id="slider-side-banners">
                            <div class="row row-cols-1 row-cols-sm-3 row-cols-md-1 h-100 gy-2 g-sm-1 g-md-0">
                                <div class="col align-self-start" data-aos="fade-top" data-aos-duration="1000">
                                    <a href="./products.html">
                                        <img src="assets/images/slider/side-slide1.jpg" alt="" width="100%" />
                                    </a>
                                </div>
                                <div class="col align-self-center" data-aos="fade-top" data-aos-duration="1100">
                                    <a href="./products.html">
                                        <img src="assets/images/slider/side-slide2.jpg" alt="" width="100%" />
                                    </a>
                                </div>
                                <div class="col align-self-end" data-aos="fade-top" data-aos-duration="1200">
                                    <a href="./products.html">
                                        <img src="assets/images/slider/side-slide3.jpg" alt="" width="100%" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="featured-products" class="my-5">
                <div class="container">
                    <div class="row pb-2 pb-sm-4">
                        <div class="col-12 text-center">
                            <div class="btn-group" role="group" id="featured-products-nav">
                                <button type="button" class="btn active featured-categories" data-val="featured">محصولات منتخب</button>
                                <button type="button" class="btn featured-categories" data-val="on-sale">تخفیف خورده</button>
                                <button type="button" class="btn featured-categories" data-val="most-visited">پربازدیدترین</button>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 featured-product featured" data-aos="fade-up" data-aos-duration="1000">
                        <div class="col">
                            <div class="col">
                                <div class="product-box">
                                    <a href="./product.html"><div class="image"
                                        style={{ backgroundImage: "url('assets/images/products/p100.png')" }}
                                    ></div></a>
                                    <div class="icons">
                                        <div class="btn btn-outline-secondary btn-favorite"></div>
                                        <div class="btn btn-outline-secondary btn-compare"></div>
                                    </div>
                                    <div class="details p-3">
                                        <div class="category">
                                            <a href="./products.html">گوشی موبایل</a>
                                            &nbsp;/&nbsp;
                                            <a href="./products.html">سامسونگ</a>
                                        </div>
                                        <a href="./product.html"><h2>گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت</h2></a>
                                        <div class="price">6.000.000 تومان</div>
                                        <div class="rate">
                                            <i class="fa fa-star-half-alt"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <span class="reviews">(14 رای دهنده)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p200.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA-DM905</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p300.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>هدفون بی سیم سامسونگ مدل Galaxy Buds Live</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p400.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال کانن مدل EOS 2000D به همراه لنز 18-55 میلی متر DC III</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 featured-product on-sale">
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html">
                                    <div class="image"
                                        style={{ backgroundImage: "url('assets/images/products/p303.png')" }}
                                    >
                                        <span class="badge on-sale-badge">فروش ویژه</span>
                                    </div>
                                </a>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>مودم روتر ADSL2 Plus بی‌ سیم N300 دی-لینک مدل DSL-2740U</h2></a>
                                    <div>
                                        <span class="discounted">4.500.000 تومان</span>
                                        <br class="d-sm-none" />
                                        <span class="price">4.800.000 تومان</span>
                                    </div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html">
                                    <div class="image"
                                        style={{ backgroundImage: "url('assets/images/products/p403.png')" }}
                                    >
                                        <span class="badge on-sale-badge">فروش ویژه</span>
                                    </div>
                                </a>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال مدل AX6065</h2></a>
                                    <div>
                                        <span class="discounted">4.500.000 تومان</span>
                                        <br class="d-sm-none" />
                                        <span class="price">4.800.000 تومان</span>
                                    </div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html">
                                    <div class="image"
                                        style={{ backgroundImage: "url('assets/images/products/p301.png')" }}
                                    >
                                        <span class="badge on-sale-badge">فروش ویژه</span>
                                    </div>
                                </a>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>هدفون بلوتوثی مدل P39 2021</h2></a>
                                    <div>
                                        <span class="discounted">4.500.000 تومان</span>
                                        <br class="d-sm-none" />
                                        <span class="price">4.800.000 تومان</span>
                                    </div>
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html">
                                    <div class="image"
                                        style={{ backgroundImage: "url('assets/images/products/p402.png')" }}
                                    >
                                        <span class="badge on-sale-badge">فروش ویژه</span>
                                    </div>
                                </a>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال نیکون مدل D3500 به همراه لنز 18-55 میلی متر VR AF-P</h2></a>
                                    <div>
                                        <span class="discounted">4.500.000 تومان</span>
                                        <br class="d-sm-none" />
                                        <span class="price">4.800.000 تومان</span>
                                    </div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 featured-product most-visited">
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p403.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال مدل AX6065</h2></a>
                                    <div class="price">3.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p303.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>مودم روتر ADSL2 Plus بی‌ سیم N300 دی-لینک مدل DSL-2740U</h2></a>
                                    <div class="price">3.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p204.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 15 اینچی لنوو مدل Lenovo Ideapad 330 - E</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p302.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>اسپیکر بلوتوثی قابل حمل تی اند جی مدل Tg-113</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="on-sale-products" class="py-5 mt-5">
                <h1 class="section-title">فروش ویژه</h1>
                <div class="section-subtitle">محصولات دارای تخفیف ویژه به مدت محدود</div>
                <div class="container pt-4">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="on-sale-product-box h-100 p-3" data-aos="fade-zoom-in" data-aos-duration="800">
                                <div class="row h-100">
                                    <div class="col-12 col-sm-4 col-lg-5">
                                        <a href="./product.html"><div class="image h-100"
                                            style={{ backgroundImage: "url('assets/images/products/p1000.png')" }}
                                        ></div></a>
                                    </div>
                                    <div class="col-12 col-sm-8 col-lg-7 py-3">
                                        <div class="box-title">محصول ویژه امروز</div>
                                        <div class="box-subtitle">فروش به مدت محدود</div>
                                        <a href="./product.html">
                                            <div class="product-title pt-4">گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت</div>
                                        </a>
                                        <div class="price py-2">
                                            <span class="discounted">4.500.000 تومان</span>
                                            <br class="d-sm-none" />
                                            <span class="pre">4.800.000 تومان</span>
                                        </div>
                                        <div class="cta pt-2">
                                            <a href="./product.html" class="hvr-icon-back">همین حالا بخرید <i class="fa fa-arrow-left hvr-icon"></i></a>
                                        </div>
                                        <div class="counter mt-3">
                                            <div class="time-counter">
                                                <div class="seconds count">
                                                    <div class="num">30</div>
                                                    <div class="label">ثانیه</div>
                                                </div>
                                                <div class="minutes count">
                                                    <div class="num">59</div>
                                                    <div class="label">دقیقه</div>
                                                </div>
                                                <div class="hours count">
                                                    <div class="num">13</div>
                                                    <div class="label">ساعت</div>
                                                </div>
                                                <div class="days count">
                                                    <div class="num">38</div>
                                                    <div class="label">روز</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="product-box">
                                <a href="./product.html">
                                    <div class="image"
                                        style={{ backgroundImage: "url('assets/images/products/p303.png')" }}
                                    >
                                        <span class="badge on-sale-badge">فروش ویژه</span>
                                    </div>
                                </a>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>مودم روتر ADSL2 Plus بی‌ سیم N300 دی-لینک مدل DSL-2740U</h2></a>
                                    <div>
                                        <span class="discounted">4.500.000 تومان</span>
                                        <br class="d-sm-none" />
                                        <span class="price">4.800.000 تومان</span>
                                    </div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="product-box">
                                <a href="./product.html">
                                    <div class="image"
                                        style={{ backgroundImage: "url('assets/images/products/p403.png')" }}
                                    >
                                        <span class="badge on-sale-badge">فروش ویژه</span>
                                    </div>
                                </a>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال مدل AX6065</h2></a>
                                    <div>
                                        <span class="discounted">4.500.000 تومان</span>
                                        <br class="d-sm-none" />
                                        <span class="price">4.800.000 تومان</span>
                                    </div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="benefits" class="pt-4">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-3 text-center">
                        <div class="col" data-aos="fade-zoom-in" data-aos-duration="800">
                            <img src="assets/images/benefits/benefit1.png" alt="" />
                            <span>پشتیبانی 24 ساعته</span>
                        </div>
                        <div class="col" data-aos="fade-zoom-in" data-aos-duration="1000">
                            <img src="assets/images/benefits/benefit2.png" alt="" />
                            <span>ضمانت اصالت کالا</span>
                        </div>
                        <div class="col" data-aos="fade-zoom-in" data-aos-duration="1200">
                            <img src="assets/images/benefits/benefit3.png" alt="" />
                            <span>ضمانت بازگشت وجه</span>
                        </div>
                        <div class="col" data-aos="fade-zoom-in" data-aos-duration="1400">
                            <img src="assets/images/benefits/benefit4.png" alt="" />
                            <span>ارسال سریع و رایگان</span>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            <section id="most-sales-products" class="pt-4">
                <h1 class="section-title">پرفروش ترین محصولات</h1>
                <div class="container pt-4">
                    <div class="row pb-2 pb-sm-4">
                        <div class="col-12 text-center">
                            <div class="btn-group" role="group" id="most-sales-products-nav">
                                <button type="button" class="btn active most-sales-categories" data-val="mobile">گوشی موبایل</button>
                                <button type="button" class="btn most-sales-categories" data-val="laptop">لپ تاپ</button>
                                <button type="button" class="btn most-sales-categories" data-val="computer">تجهیزات کامپیوتر</button>
                                <button type="button" class="btn most-sales-categories" data-val="camera">دوربین</button>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 most-sales-product mobile" data-aos="fade-up" data-aos-duration="1000">
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p100.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p101.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت</h2></a>
                                    <div class="price">5.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p102.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p103.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>گوشی موبایل شیائومی مدل POCO X3 M2007J20CG دو سیم‌ کارت</h2></a>
                                    <div class="price">3.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p104.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌ کارت</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p102.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p101.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت</h2></a>
                                    <div class="price">5.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p100.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 most-sales-product laptop" data-aos="fade-up" data-aos-duration="1000">
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p200.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA-DM905</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p201.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 14 اینچی ایسوس مدل ZenBook UM433IQ - A5023</h2></a>
                                    <div class="price">5.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p202.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 15.6 اینچی ایسوس مدل R565JF-BQ078</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p203.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA - A</h2></a>
                                    <div class="price">3.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p204.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 15 اینچی لنوو مدل Lenovo Ideapad 330 - E</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p203.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA - A</h2></a>
                                    <div class="price">3.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p201.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 14 اینچی ایسوس مدل ZenBook UM433IQ - A5023</h2></a>
                                    <div class="price">5.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p202.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>لپ تاپ 15.6 اینچی ایسوس مدل R565JF-BQ078</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 most-sales-product computer" data-aos="fade-up" data-aos-duration="1000">
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p300.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>هدفون بی سیم سامسونگ مدل Galaxy Buds Live</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p301.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>هدفون بلوتوثی مدل P39 2021</h2></a>
                                    <div class="price">5.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p302.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>اسپیکر بلوتوثی قابل حمل تی اند جی مدل Tg-113</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p303.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>مودم روتر ADSL2 Plus بی‌ سیم N300 دی-لینک مدل DSL-2740U</h2></a>
                                    <div class="price">3.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p304.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>ماوس تسکو مدل TM2018N</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p300.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>هدفون بی سیم سامسونگ مدل Galaxy Buds Live</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p301.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>هدفون بلوتوثی مدل P39 2021</h2></a>
                                    <div class="price">5.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p302.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>اسپیکر بلوتوثی قابل حمل تی اند جی مدل Tg-113</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 most-sales-product camera" data-aos="fade-up" data-aos-duration="1000">
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p400.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال کانن مدل EOS 2000D به همراه لنز 18-55 میلی متر DC III</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p401.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال آکسون مدل AX6062</h2></a>
                                    <div class="price">5.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p402.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال نیکون مدل D3500 به همراه لنز 18-55 میلی متر VR AF-P</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p403.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال مدل AX6065</h2></a>
                                    <div class="price">3.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p404.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال سونی مدل Cyber-shot DSC-W800</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p400.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال کانن مدل EOS 2000D به همراه لنز 18-55 میلی متر DC III</h2></a>
                                    <div class="price">6.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p401.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال آکسون مدل AX6062</h2></a>
                                    <div class="price">5.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="product-box">
                                <a href="./product.html"><div class="image"
                                    style={{ backgroundImage: "url('assets/images/products/p402.png')" }}
                                ></div></a>
                                <div class="icons">
                                    <div class="btn btn-outline-secondary btn-favorite"></div>
                                    <div class="btn btn-outline-secondary btn-compare"></div>
                                </div>
                                <div class="details p-3">
                                    <div class="category">
                                        <a href="./products.html">گوشی موبایل</a>
                                        &nbsp;/&nbsp;
                                        <a href="./products.html">سامسونگ</a>
                                    </div>
                                    <a href="./product.html"><h2>دوربین دیجیتال نیکون مدل D3500 به همراه لنز 18-55 میلی متر VR AF-P</h2></a>
                                    <div class="price">4.000.000 تومان</div>
                                    <div class="rate">
                                        <i class="fa fa-star-half-alt"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="reviews">(14 رای دهنده)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container" data-aos="fade-up" data-aos-duration="1200">
                <div class="row">
                    <div class="col-12 col-md-4 pt-2 text-center">
                        <a href="./products.html">
                            <img src="assets/images/promo-image1.png" alt="" />
                        </a>
                    </div>
                    <div class="col-12 col-md-8 pt-2 text-center">
                        <a href="./products.html">
                            <img src="assets/images/promo-image2.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <section id="blog" class="pt-5">
                <h1 class="section-title">جدیدترین مقالات آموزشی</h1>
                <div class="container pt-4">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col">
                            <div class="blog-post-box" data-aos="fade-up" data-aos-duration="1000">
                                <a href="./blog-post.html"><div class="post-image"
                                    style={{ backgroundImage: "url('assets/images/blog/post100.jpg')" }}
                                ></div></a>
                                <div class="details py-3 px-4">
                                    <div class="post-date">ارسال شده در 30 خرداد 1400</div>
                                    <a href="./blog-post.html">
                                        <h2 class="post-title">بررسی آیفون 12 پرو مکس اپل</h2>
                                    </a>
                                    <a href="./blog-post.html">
                                        <div class="post-description">آیفون ۱۲ پرو مکس با ابعاد غول‌پیکر، دوربین توانمندتر و باتری حجمیش، تمام‌عیارترین پرچم‌دار کنونی اپل به‌حساب می‌آید.</div>
                                    </a>
                                    <div class="read-more"><a href="./blog-post.html" class="hvr-icon-back">بیشتر خوانید <i class="fa fa-arrow-left hvr-icon"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="blog-post-box" data-aos="fade-up" data-aos-duration="1000">
                                <a href="./blog-post.html"><div class="post-image"
                                    style={{ backgroundImage: "url('assets/images/blog/post101.jpg')" }}
                                ></div></a>
                                <div class="details py-3 px-4">
                                    <div class="post-date">ارسال شده در 30 خرداد 1400</div>
                                    <a href="./blog-post.html">
                                        <h2 class="post-title">سامسونگ گلکسی S21 اولترا 5G</h2>
                                    </a>
                                    <a href="./blog-post.html">
                                        <div class="post-description">سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد.</div>
                                    </a>
                                    <div class="read-more"><a href="./blog-post.html" class="hvr-icon-back">بیشتر خوانید <i class="fa fa-arrow-left hvr-icon"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="blog-post-box" data-aos="fade-up" data-aos-duration="1000">
                                <a href="./blog-post.html"><div class="post-image"
                                    style={{ backgroundImage: "url('assets/images/blog/post102.jpg')" }}
                                ></div></a>
                                <div class="details py-3 px-4">
                                    <div class="post-date">ارسال شده در 30 خرداد 1400</div>
                                    <a href="./blog-post.html">
                                        <h2 class="post-title">دریافت گواهی بلوتوث گلکسی A03s سامسونگ</h2>
                                    </a>
                                    <a href="./blog-post.html">
                                        <div class="post-description">ماه گذشته، برای اولین‌بار اطلاعاتی از گلکسی A03s فاش شد و اکنون با دریافت گواهی بلوتوث، به زمان رونمایی این گوشی نزدیک شده‌ایم.</div>
                                    </a>
                                    <div class="read-more"><a href="./blog-post.html" class="hvr-icon-back">بیشتر خوانید <i class="fa fa-arrow-left hvr-icon"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;