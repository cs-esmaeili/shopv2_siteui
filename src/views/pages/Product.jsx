import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { _Product } from './../../services/Pages';
import { toast } from 'react-toastify';

const Product = () => {

    const [data, setData] = useState(null);
    const [show, setShow] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const location = useLocation();

    const getPageData = async () => {
        const product_id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1, location.pathname.length);
        try {
            const respons = await _Product({ product_id });
            if (respons.data.statusText === "ok") {
                setData(respons.data.data);
                console.log(respons.data.data);
            } else {
                toast(respons.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPageData();
    }, []);

    return (
        <section className="inner-page" id="product-page">
            <div className="container-fluid" id="page-hero">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 px-0">
                                    {data != null &&
                                        <h1>{data.name}</h1>
                                    }

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="./index.html">صفحه نخست</a></li>
                                            <li className="breadcrumb-item"><a href="./products.html">فروشگاه</a></li>
                                            {data != null &&
                                                <li className="breadcrumb-item active" aria-current="page">{data.category.name}</li>
                                            }
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
                                <div className="col-12 col-lg-5 px-lg-0">
                                    <div className="swiper-container gallery-top">
                                        {data != null &&
                                            <ul className="swiper-wrapper">
                                                <li id="1" className="swiper-slide">
                                                    <img src={data.images[activeImage]} itemProp="thumbnail" alt={data.name} />
                                                </li>
                                            </ul>
                                        }
                                        <div title="قبلی" className="swiper-button-prev swiper-button-white"></div>
                                        <div title="بعدی" className="swiper-button-next swiper-button-white"></div>
                                    </div>
                                    <div className="swiper-container gallery-thumbs">
                                        <div className="swiper-wrapper">
                                            {data != null &&
                                                data.images.map((value, index) => {
                                                    if (activeImage === index) {
                                                        return (
                                                            <div className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                                                                style={{ backgroundImage: `url('${value}')` }}
                                                                onClick={() => setActiveImage(index)}></div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div className="swiper-slide" style={{ backgroundImage: `url('${value}')` }}
                                                                onClick={() => setActiveImage(index)}
                                                            ></div>
                                                        );
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-7 mt-5 mt-lg-0 pl-lg-0" id="product-intro">
                                    <a href="./product.html">
                                        {data != null &&
                                            <h1>{data.name}</h1>
                                        }
                                    </a>
                                    {data != null &&
                                        <div className="price-container py-2">
                                            <span className="pre-price">{data.price}</span>
                                            <span className="price">{data.sale_price}<span>تومان</span></span>
                                        </div>
                                    }
                                    {data != null &&
                                        <p>{data.description}</p>
                                    }
                                    <hr />
                                    <div className="variables">
                                        <div className="title">گزینه های موجود:</div>
                                        <div className="row">
                                            <div className="col-12 col-sm-4 col-lg-3">
                                                <div className="variable">
                                                    <div className="sub-title pt-2 pb-2">تعداد</div>
                                                    <input type="number" min="1" max="10" className="form-control" value="1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cta-container pt-3 pt-md-5">
                                        <div className="row">
                                            <div className="col-12">
                                                <a href="./cart.html">
                                                    <div className="btn btn-success px-4 px-lg-2 px-xl-4 btn-add-to-basket"><i className="fa fa-shopping-cart"></i> افزودن به سبد خرید</div>
                                                </a>
                                                <br className="d-sm-none" />
                                                <div className="btn btn-outline-secondary btn-favorite mt-1 mt-sm-0" data-toggle="tooltip" data-placement="top" title="افزودن به علاقه‌مندی"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div id="product-nav-tabs">
                                        <div className="row pt-3 px-md-3">
                                            <div className="col-12">
                                                <div id="tabs-panel">
                                                    <button className={show ? "tab-item tablink px-3 selected" : "tab-item tablink px-3"} onClick={() => setShow(true)}>نقد و بررسی</button>
                                                    <button className={show ? "tab-item tablink px-3" : "tab-item tablink px-3 selected"} onClick={() => setShow(false)}>جدول مشخصات</button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 pt-2 px-0 px-lg-0">
                                                    {show ?

                                                        <div id="html-tab" className="tabs-container text-justify p-0 p-md-3">
                                                            {data != null &&
                                                                <p>
                                                                    {data.review}
                                                                </p>
                                                            }
                                                        </div>
                                                        :
                                                        <div id="details-tab" className="tabs-container px-0 px-md-3 pb-0 pb-md-3"  >
                                                            {data != null &&
                                                                data.items.map((value, index) => {
                                                                    if (value.value === 'عنوان') {
                                                                        return (
                                                                            <div className="row">
                                                                                <div className="col-12 my-2">
                                                                                    <span className="detail-title"><i className="fa fa-chevron-left small"></i>{value.key}</span>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            <div className="row mb-2">
                                                                                <div className="col-12 col-md-3 font-weight-bold"><div className="bg-light p-2">{value.key}</div></div>
                                                                                <div className="col-12 col-md-9 pr-md-0"><div className="bg-light p-2">{value.value}</div></div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </div>
                                                    }
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
        </section >
    );
}

export default Product;
