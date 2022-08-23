import React, { useState, useEffect } from "react";
import { _Home } from './../../services/Pages';
import Product from './../components/Product';
import Post from './../components/Post';

const Home = () => {

    const [data, setData] = useState(null);
    const [productShow, setProductShow] = useState(1);

    const getPageData = async () => {
        try {
            const respons = await _Home();
            if (respons.data.statusText === "ok") {
                setData(respons.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPageData();
    }, []);

    return (
        <>
            <section id="slider" className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9" data-aos="fade-zoom-in" data-aos-duration="700">
                            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    {data !== null && data.slider.map((value, index) => {
                                        if (index === 0) {
                                            return (
                                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to="0" className="active" aria-current="true"
                                                    aria-label="Slide 0">
                                                </button>
                                            )
                                        } else {
                                            return (
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index}
                                                    aria-label={`Slide ${index}`}>
                                                </button>
                                            )
                                        }

                                    })}
                                </div>
                                <div className="carousel-inner">
                                    {data !== null && data.slider.map((value, index) => {
                                        const { url, url_target } = JSON.parse(data.slider[index].value);
                                        if (index === 0) {
                                            return (
                                                <div className="carousel-item active">
                                                    <a href={url_target}>
                                                        <img src={url} className="d-block" alt="..." />
                                                    </a>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="carousel-item">
                                                    <a href={url_target}>
                                                        <img src={url} className="d-block" alt="..." />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-2 mt-sm-1 text-center text-sm-start" id="slider-side-banners">
                            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-1 h-100 gy-2 g-sm-1 g-md-0">
                                <div className="col align-self-start" data-aos="fade-top" data-aos-duration="1000">
                                    <a href="./products.html">
                                        <img src="assets/images/slider/side-slide1.jpg" alt="" width="100%" />
                                    </a>
                                </div>
                                <div className="col align-self-center" data-aos="fade-top" data-aos-duration="1100">
                                    <a href="./products.html">
                                        <img src="assets/images/slider/side-slide2.jpg" alt="" width="100%" />
                                    </a>
                                </div>
                                <div className="col align-self-end" data-aos="fade-top" data-aos-duration="1200">
                                    <a href="./products.html">
                                        <img src="assets/images/slider/side-slide3.jpg" alt="" width="100%" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="featured-products" className="my-5">
                <div className="container">
                    <div className="row pb-2 pb-sm-4">
                        <div className="col-12 text-center">
                            <div className="btn-group" role="group" id="featured-products-nav">
                                <button type="button" className={productShow === 1 ? 'btn featured-categories active' : 'btn featured-categories'} data-val="featured" onClick={() => setProductShow(1)}>محصولات منتخب</button>
                                <button type="button" className={productShow === 2 ? 'btn featured-categories active' : 'btn featured-categories'} data-val="on-sale" onClick={() => setProductShow(2)}>تخفیف خورده</button>
                                <button type="button" className={productShow === 3 ? 'btn featured-categories active' : 'btn featured-categories'} data-val="most-visited" onClick={() => setProductShow(3)}>پربازدیدترین</button>
                            </div>
                        </div>
                    </div>

                    {(productShow === 1) &&
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 featured-product featured" data-aos="fade-up" data-aos-duration="1000">
                            {data != null && data.products3x[0] !== null && data.products3x[0].map((value, index) => {
                                return (
                                    <div className="col">
                                        <Product data={value} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {(productShow === 2) &&
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 featured-product on-sale" data-aos="fade-up" data-aos-duration="1000">
                            {data != null && data.products3x[1] !== null && data.products3x[1].map((value, index) => {
                                return (
                                    <div className="col">
                                        <Product data={value} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {(productShow === 3) &&
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 featured-product most-visited" data-aos="fade-up" data-aos-duration="1000">
                            {data != null && data.products3x[2] !== null && data.products3x[2].map((value, index) => {
                                return (
                                    <div className="col">
                                        <Product data={value} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </section>
            <section id="on-sale-products" className="py-5 mt-5">
                <h1 className="section-title">فروش ویژه</h1>
                <div className="section-subtitle">محصولات دارای تخفیف ویژه به مدت محدود</div>
                <div className="container pt-4">
                    <div className="row">
                        {data != null && data.special != null && data.special.map((value, index) => {
                            if (index === 0) {
                                return (
                                    <div className="col-12 col-lg-6">
                                        <div className="on-sale-product-box h-100 p-3  p-3 aos-init aos-animate" data-aos="fade-zoom-in" data-aos-duration="800">
                                            <div className="row h-100">
                                                <div className="col-12 col-sm-4 col-lg-5">
                                                    <a href="./product.html"><div className="image h-100"
                                                        style={{ backgroundImage: `url('${value.images[0]}')` }}
                                                    ></div></a>
                                                </div>
                                                <div className="col-12 col-sm-8 col-lg-7 py-3">
                                                    <div className="box-title">محصول ویژه امروز</div>
                                                    <div className="box-subtitle">فروش به مدت محدود</div>
                                                    <a href="./product.html">
                                                        <div className="product-title pt-4">{value.name}</div>
                                                    </a>
                                                    <div className="price py-2">
                                                        <span className="discounted">{value.sale_price} تومان</span>
                                                        <br className="d-sm-none" />
                                                        <span className="pre">{value.price} تومان</span>
                                                    </div>
                                                    <div className="cta pt-2">
                                                        <a href="./product.html" className="hvr-icon-back">همین حالا بخرید <i className="fa fa-arrow-left hvr-icon"></i></a>
                                                    </div>
                                                    <div className="counter mt-3">
                                                        <div className="time-counter">
                                                            <div className="seconds count">
                                                                <div className="num">30</div>
                                                                <div className="label">ثانیه</div>
                                                            </div>
                                                            <div className="minutes count">
                                                                <div className="num">59</div>
                                                                <div className="label">دقیقه</div>
                                                            </div>
                                                            <div className="hours count">
                                                                <div className="num">13</div>
                                                                <div className="label">ساعت</div>
                                                            </div>
                                                            <div className="days count">
                                                                <div className="num">38</div>
                                                                <div className="label">روز</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <Product data={value} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </section>
            <section id="benefits" className="pt-4">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-3 text-center">
                        <div className="col" data-aos="fade-zoom-in" data-aos-duration="800">
                            <img src="assets/images/benefits/benefit1.png" alt="" />
                            <span>پشتیبانی 24 ساعته</span>
                        </div>
                        <div className="col" data-aos="fade-zoom-in" data-aos-duration="1000">
                            <img src="assets/images/benefits/benefit2.png" alt="" />
                            <span>ضمانت اصالت کالا</span>
                        </div>
                        <div className="col" data-aos="fade-zoom-in" data-aos-duration="1200">
                            <img src="assets/images/benefits/benefit3.png" alt="" />
                            <span>ضمانت بازگشت وجه</span>
                        </div>
                        <div className="col" data-aos="fade-zoom-in" data-aos-duration="1400">
                            <img src="assets/images/benefits/benefit4.png" alt="" />
                            <span>ارسال سریع و رایگان</span>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            <section id="most-sales-products" className="pt-4">
                <h1 className="section-title">پرفروش ترین محصولات</h1>
                <div className="container pt-4">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-md-4 most-sales-product mobile" data-aos="fade-up" data-aos-duration="1000">

                        {data != null && data.moreSeal != null && data.moreSeal.map((value, index) => {
                            return (
                                <div className="col">
                                    <Product data={value} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <div className="container" data-aos="fade-up" data-aos-duration="1200">
                <div className="row">
                    <div className="col-12 col-md-4 pt-2 text-center">
                        <a href="./products.html">
                            <img src="assets/images/promo-image1.png" alt="" />
                        </a>
                    </div>
                    <div className="col-12 col-md-8 pt-2 text-center">
                        <a href="./products.html">
                            <img src="assets/images/promo-image2.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <section id="blog" className="pt-5">
                <h1 className="section-title">جدیدترین مقالات آموزشی</h1>
                <div className="container pt-4">
                    <div className="row row-cols-1 row-cols-md-3">
                        {data != null && data.latestPosts != null && data.latestPosts.map((value, index) => {
                            return (
                                <div className="col">
                                    <Post data={value} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
