import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "./../../config.json";
import { CheckToken } from '../../services/Authorization';
import { getCookie, setCookie } from "../../global/cookie";
import { useDispatch, useSelector } from "react-redux";
import { setCartData, setToken } from './../../actions/profile';
import { withRouter } from "react-router-dom";

const Header = ({ history, update }) => {


    const [check, setCheck] = useState('checking');
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const checkToken = async () => {
        try {
            const respons = await CheckToken();
            if (respons.data.statusText === "ok") {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    const logOutHandler = async () => {
        await setCookie(-1, 'token', null);
        dispatch(setToken(null));
        dispatch(setCartData([]));
        update();
        history.replace(config.web_url);
    };

    useEffect(() => {

        const checkConditions = async () => {
            if (getCookie('token') === null) {
                return false;
            } else if (getCookie('token') !== null) {
                const checktoken = await checkToken();
                if (checktoken === true) {
                    dispatch(setToken(getCookie('token')));
                    return true;
                }
            }
            return false;
        }

        checkConditions().then((reuslt) => {
            setCheck(reuslt);
        })

        return () => {
            setCheck('checking');
        };

    }, [update]);

    return (
        <section id="header">
            <div id="top-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-8 d-none d-md-block">
                            <ul>
                                <li>
                                    <Link
                                        to={config.web_url}
                                    >
                                        صفحه نخست
                                    </Link>
                                </li>
                                <li><a href="./about.html">درباره ما</a></li>
                                <li><a href="./contact.html">تماس با ما</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-end" id="top-support-info">
                            <span>تلفن مشاوره و فروش: 09351234567</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="search-nav">
                <div className="container pt-1">
                    <div className="row py-3 align-content-center">
                        <div className="col-12 col-md-3 col-xl-2 text-center text-md-start pb-2" id="header-logo">
                            <a href="./index.html">
                                <img src="assets/images/logo.png" alt="" /> روبیک مارکت
                            </a>
                        </div>
                        <div className="col-12 col-md-5 col-xl-6">
                            <div id="search-bar">
                                <i className="fa fa-search"></i>
                                <input type="text" placeholder="جستجو کنید..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-12 col-md-7 col-lg-6 text-center" id="btn-login-register">
                                    {(check === 'checking') &&
                                        <span >Loading...</span>
                                    }
                                    {(check === true) &&
                                        <div onClick={logOutHandler} style={{ cursor: "pointer" }}>
                                            خروج
                                        </div>
                                    }
                                    {(check === false) &&
                                        <>
                                            <Link
                                                to={config.web_url + 'logIn'}
                                            >
                                                ورود
                                            </Link>
                                            /
                                            <Link
                                                to={config.web_url + 'register'}
                                            >
                                                عضویت
                                            </Link>
                                        </>
                                    }
                                </div>
                                <div className="col-12 col-md-5 col-lg-6">
                                    <Link
                                        to={check === false ? `${config.web_url}logIn` : `${config.web_url}cart`}
                                    >
                                        <div className="btn btn-warning w-100"><i className="fa fa-shopping-cart"></i>&nbsp;<span
                                            className="d-md-none d-lg-inline-block">سبد خرید</span> ({cart != null ? cart.length : ''})</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="droopmenu-navbar dmarrow-down droopmenu-horizontal dmpos-top dmfade">
                                <div className="droopmenu-inner">
                                    <div className="droopmenu-header">
                                        <a href="#" className="droopmenu-toggle"><i className="dm-burg"></i></a>
                                        <span className="d-md-none">منوی فروشگاه</span>
                                    </div>
                                    <div className="droopmenu-nav">
                                        <div className="droopmenu-nav-wrap">
                                            <div className="droopmenu-navi">
                                                <ul className="droopmenu">
                                                    <li className="droopmenu-parent" aria-haspopup="true">
                                                        <a href="#" aria-expanded="false"><i
                                                            className="fa fa-bars"></i>&nbsp;&nbsp;گروه های محصولات<em
                                                                className="droopmenu-topanim"></em></a>
                                                        <div className="dm-arrow"></div>
                                                        <ul className="droopmenu-grid droopmenu-grid-9">
                                                            <li className="droopmenu-tabs droopmenu-tabs-vertical">
                                                                <div className="droopmenu-tabsection" id="droopmenutab14">
                                                                    <a className="droopmenu-tabheader" href="#">سلامت و
                                                                        زیبایی</a>
                                                                    <div className="droopmenu-tabcontent">
                                                                        <div className="droopmenu-row">
                                                                            <ul className="droopmenu-col droopmenu-col4">
                                                                                <li>
                                                                                    <h4>محصولات</h4>
                                                                                </li>
                                                                                <li><a href="products.html">لوازم آرایشی</a>
                                                                                </li>
                                                                                <li><a href="products.html">شامپو</a></li>
                                                                                <li><a href="products.html">نرم کننده</a>
                                                                                </li>
                                                                                <li><a href="products.html">برس و شانه</a>
                                                                                </li>
                                                                                <li><a href="products.html">انواع ماسک</a>
                                                                                </li>
                                                                                <li><a href="products.html">تقویت کننده
                                                                                    مو</a></li>
                                                                                <li><a href="products.html">رنگ مو</a></li>
                                                                                <li><a href="products.html">دستمال کاغذی</a>
                                                                                </li>
                                                                                <li><a href="products.html">سایر محصولات</a>
                                                                                </li>
                                                                            </ul>
                                                                            <ul className="droopmenu-col droopmenu-col4">
                                                                                <li>
                                                                                    <h4>برند ها</h4>
                                                                                </li>
                                                                                <li><a href="products.html">صحت</a></li>
                                                                                <li><a href="products.html">پرژک</a></li>
                                                                                <li><a href="products.html">داروگر</a></li>
                                                                                <li><a href="products.html">طبیعت</a></li>
                                                                                <li><a href="products.html">گلرنگ</a></li>
                                                                                <li><a href="products.html">گلنار</a></li>
                                                                                <li><a href="products.html">کلیر</a></li>
                                                                                <li><a href="products.html">شبنم</a></li>
                                                                                <li><a href="products.html">آیسان</a></li>
                                                                            </ul>
                                                                            <ul
                                                                                className="droopmenu-col droopmenu-col4 d-none d-lg-inline-block">
                                                                                <li><img src="assets/images/megamenu/megamenu-image5.png"
                                                                                    alt="" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="droopmenu-parent" aria-haspopup="true">
                                                        <a href="./blog.html" aria-expanded="false">بلاگ آموزشی<em
                                                            className="droopmenu-topanim"></em></a>
                                                        <div className="dm-arrow"></div>
                                                        <ul >
                                                            <li><a href="./blog.html">آرشیو مطالب</a></li>
                                                            <li><a href="./blog-post.html">داخلی بلاگ</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="droopmenu-parent" aria-haspopup="true">
                                                        {(check === false) ?
                                                            <>
                                                                <Link
                                                                    aria-expanded="false"
                                                                    to={config.web_url + 'logIn'}
                                                                >
                                                                    پروفایل
                                                                    کاربری
                                                                    <em className="droopmenu-topanim"></em>
                                                                </Link>
                                                                <div className="dm-arrow"></div>
                                                                <ul >
                                                                    <li><a href="profile/personal-info.html">مشخصات کاربری</a></li>
                                                                    <li><a href="profile/factors.html">سفارشات</a></li>
                                                                    <li>
                                                                        <Link
                                                                            to={config.web_url + 'logIn'}
                                                                        >
                                                                            آدرس ها
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            to={config.web_url + 'favorite'}
                                                                        >
                                                                            علاقه مندی ها
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </>
                                                            :
                                                            <>
                                                                <Link
                                                                    aria-expanded="false"
                                                                    to={config.web_url + 'logIn'}
                                                                >
                                                                    پروفایل
                                                                    کاربری
                                                                    <em className="droopmenu-topanim"></em>
                                                                </Link>
                                                                <div className="dm-arrow"></div>
                                                                <ul >
                                                                    <li><a href="profile/personal-info.html">مشخصات کاربری</a></li>
                                                                    <li><a href="profile/factors.html">سفارشات</a></li>
                                                                    <li>
                                                                        <Link
                                                                            to={config.web_url + 'address'}
                                                                        >
                                                                            آدرس ها
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            to={config.web_url + 'favorite'}
                                                                        >
                                                                            علاقه مندی ها
                                                                        </Link>

                                                                    </li>
                                                                </ul>
                                                            </>
                                                        }
                                                    </li>
                                                </ul>
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

export default withRouter(Header);
