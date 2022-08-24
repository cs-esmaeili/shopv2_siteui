import React, { useState, useEffect } from "react";
import AcountRightPanel from '../components/AcountRightPanel';
import { useDispatch, useSelector } from "react-redux";
import config from "./../../config.json";
import { toast } from 'react-toastify';
import { _UserFactors } from "../../services/Actions";
import { Link } from 'react-router-dom';

const Factors = () => {

    const [data, setData] = useState(null);
    const factorList = async () => {
        try {
            const respons = await _UserFactors();
            if (respons.data.statusText === "ok") {
                setData(respons.data.list);
            } else {
                toast(respons.data.message);
            }
        } catch (error) {
            return false;
        }
    }

    const factor = (products) => {
        let price = 0;
        let discount = 0;
        products.map((value) => {
            price += parseInt(value.price) * parseInt(value.number);
            discount += (parseInt(value.price) - parseInt(value.sale_price)) * parseInt(value.number);
        })
        return (`${price - discount}`);
    }

    useEffect(() => {
        factorList();
    }, []);

    return (
        <section className="inner-page" id="profile-page">
            <div className="container-fluid" id="page-hero">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 px-0">
                                    <h1>ناحیه کاربری</h1>
                                    <p>به ناحیه کاربری روبیک مارکت خوش آمدید.</p>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="../index.html">صفحه نخست</a></li>
                                            <li className="breadcrumb-item"><a href="#">ناحیه کاربری</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">سفارشات</li>
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
                                <div className="col-12 col-lg-3">
                                    <AcountRightPanel page="address" />
                                </div>

                                <div className="col-12 col-lg-9 pl-lg-0 pr-lg-2 mt-2 mt-lg-0">
                                    {data != null && data.map((value) => {
                                        return (
                                            <>
                                                <div className="custom-container" id="orders-status">
                                                    <div className="container nowrap">
                                                        <div className="row py-2">
                                                            <div className="col-12 px-0">
                                                                <ul className="px-3">
                                                                    <li>
                                                                        <span style={{ color: "#fcb941" }}>پرداخت شده</span>
                                                                        <div className="badge badge-secondary">1</div>
                                                                    </li>
                                                                    <li>
                                                                        <span style={{ color: (value.status == 2 || value.status == 3 || value.status == 4) ? "#fcb941" : "" }}>درحال آماده سازی</span>
                                                                        <div className="badge badge-secondary">2</div>
                                                                    </li>
                                                                    <li>
                                                                        <span style={{ color: (value.status == 3 || value.status == 4) ? "#fcb941" : "" }}>ارسال شده</span>
                                                                        <div className="badge badge-secondary">3</div>
                                                                    </li>
                                                                    <li>
                                                                        <span style={{ color: (value.status == 4) ? "#fcb941" : "" }}>تکمیل شده</span>
                                                                        <div className="badge badge-secondary">4</div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="custom-container mt-2 order">
                                                    <div className="row pt-2 px-3">
                                                        <div className="col-12 col-sm-6"><h2>سفارش شماره #{value.factor_id}</h2></div>
                                                        <div className="col-12 col-sm-6 text-sm-end"><span>{value.created_at}</span> - <span>پرداخت شده</span></div>
                                                    </div>
                                                    <hr />
                                                    <div className="container">
                                                        <div className="row py-2">
                                                            <div className="col-12">
                                                                <div>
                                                                    <div className="header">
                                                                        {console.log(value.factor_products)}
                                                                        <div className="total py-1"><span>مبلغ کل:</span> {factor(value.factor_products)} تومان</div>
                                                                    </div>
                                                                    <div className="container products px-0">
                                                                        <div className="row">
                                                                            {value.factor_products != null && value.factor_products.map(({ product, name, number, sale_price }) => {
                                                                                return (
                                                                                    <span className="col-12 col-sm-6 col-lg-4 col-xl-3 px-1">
                                                                                        <Link
                                                                                            aria-expanded="false"
                                                                                            to={config.web_url + 'product/' + product.product_id}
                                                                                        >
                                                                                            <div className="product-box">
                                                                                                <div className="image" style={{ backgroundImage: `url('${product.images[0]}')` }}></div>
                                                                                                <div className="text-center px-1 px-sm-3">
                                                                                                    <h2>{product.name}</h2>
                                                                                                    <div className="number">تعداد: {number} عدد</div>
                                                                                                    <div className="price">مبلغ: {sale_price} تومان</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </span>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Factors;
