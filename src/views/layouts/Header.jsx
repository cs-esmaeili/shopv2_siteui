import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "./../../config.json";
import { CheckToken } from '../../services/Authorization';
import { getCookie, setCookie } from "../../global/cookie";
import { useDispatch, useSelector } from "react-redux";
import { setCartData, setToken } from './../../actions/profile';
import { withRouter } from "react-router-dom";
import { _ListCart } from "../../services/Actions";
import { _CategoryListPyramid } from './../../services/Actions';

const Header = ({ history, update }) => {


    const [check, setCheck] = useState('checking');
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [category, setCategory] = useState(null);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

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
    const categoryListPyramid = async () => {
        try {
            const respons = await _CategoryListPyramid();
            if (respons.data.statusText === "ok") {
                let temp = respons.data.list;
                temp = temp.filter((item) => {
                    if (Array.isArray(item)) {
                        return true;
                    }
                    return false;
                })
                console.log(temp);
                setCategory(temp);
            }
        } catch (error) {
            return false;
        }
    }
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
                    cartList();
                    return true;
                }
            }
            return false;
        }
        checkConditions().then((reuslt) => {
            setCheck(reuslt);
        })
        categoryListPyramid();
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
                            <Link
                                to={config.web_url}
                            >
                                <img src="assets/images/logo.png" alt="" /> روبیک مارکت
                            </Link>
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
                                                        <a href="./contact.html" aria-expanded="false">دسته بندی محصولات<em className="droopmenu-topanim"></em></a><div className="dm-arrow"></div>
                                                        <ul style={{ width: "50vw", padding: "5px" }}>
                                                            <div className="row" >
                                                                <div className="col-2" style={{ borderLeftStyle: "solid", borderLeftWidth: "1px", borderColor: "lightgray" }}>
                                                                    {category != null &&
                                                                        category.map((value, index) => {
                                                                            if (Array.isArray(value)) {
                                                                                return (
                                                                                    <li className="mb-2">
                                                                                        <Link onClick={() => setCategoryIndex(index)} style={{ color: (categoryIndex == index) ? "#fcb941" : "" }}>
                                                                                            {value[0].name}
                                                                                        </Link>
                                                                                    </li>
                                                                                );
                                                                            }
                                                                        })
                                                                    }
                                                                </div>
                                                                <div className="col-6" >
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            {category != null &&
                                                                                category.map((value1, index) => {
                                                                                    if (Array.isArray(value1) && index == categoryIndex) {
                                                                                        let result = value1[1].map((value2, index2) => {
                                                                                            if (index2 < (value1[1].length / 2)) {
                                                                                                return (
                                                                                                    <li className="mb-2">
                                                                                                        <Link to={config.web_url + 'products/' + value2.category_id}>
                                                                                                            {value2.name}
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                );
                                                                                            }
                                                                                            return null;
                                                                                        })
                                                                                        return result;
                                                                                    }
                                                                                    return null;
                                                                                })
                                                                            }
                                                                        </div>
                                                                        <div className="col">
                                                                            {category != null &&
                                                                                category.map((value1, index) => {
                                                                                    if (Array.isArray(value1) && index == categoryIndex) {
                                                                                        let result = value1[1].map((value2, index2) => {
                                                                                            if (index2 >= (value1[1].length / 2)) {
                                                                                                return (
                                                                                                    <li className="mb-2">
                                                                                                        <Link to={config.web_url + 'products/' + value2.category_id}>
                                                                                                            {value2.name}
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                );
                                                                                            }
                                                                                            return null;
                                                                                        })
                                                                                        return result;
                                                                                    }
                                                                                    return null;
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4 p-2" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                                                                    {category != null &&
                                                                        <img src={category[categoryIndex][0].image.image} alt="" />
                                                                    }
                                                                </div>
                                                            </div>

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
                                                        <Link
                                                            aria-expanded="false"
                                                            to={check ? config.web_url + 'profile' : config.web_url + 'logIn'}
                                                        >
                                                            پروفایل
                                                            کاربری
                                                            <em className="droopmenu-topanim"></em>
                                                        </Link>
                                                        <div className="dm-arrow"></div>
                                                        <ul >
                                                            <li>
                                                                <Link
                                                                    aria-expanded="false"
                                                                    to={check ? config.web_url + 'profile' : config.web_url + 'logIn'}
                                                                >
                                                                    مشخصات کاربری
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to={check ? config.web_url + 'factors' : config.web_url + 'logIn'}
                                                                >
                                                                    سفارشات
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to={check ? config.web_url + 'address' : config.web_url + 'logIn'}
                                                                >
                                                                    آدرس ها
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to={check ? config.web_url + 'favorite' : config.web_url + 'logIn'}
                                                                >
                                                                    علاقه مندی ها
                                                                </Link>

                                                            </li>
                                                        </ul>
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
