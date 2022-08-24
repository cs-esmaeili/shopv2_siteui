import React, { useState, useEffect } from "react";
import { _personProfile } from './../../services/Actions';
import { Link, useLocation, withRouter } from 'react-router-dom';
import config from "./../../config.json";
import { setCartData, setToken } from './../../actions/profile';
import { useDispatch, useSelector } from "react-redux";
import { getCookie, setCookie } from "../../global/cookie";

const AcountRightPanel = ({ history, page, update = null }) => {

    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation();
    page = location.pathname;
    const PersonProfile = async () => {
        try {
            const respons = await _personProfile();
            if (respons.data.statusText === "ok") {
                console.log(respons.data);
                setData(respons.data);
            }
        } catch (error) {
            console.log(error);
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
        PersonProfile();
    }, [update]);
    return (

        <div className="accordion" id="side-panel">
            <div className="accordion-item menu-container">
                <h2 className="accordion-header">
                    <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <span className="row">
                            <span className="col-3 col-sm-2 col-lg-3">
                                <img src="../assets/images/user-no-image.jpg" className="rounded-circle" />
                            </span>
                            {data != null &&
                                <span className="col-7 col-sm-8 col-lg-7 pt-0 pt-sm-2 pt-md-3 pt-lg-0 align-self-center">
                                    <div id="full-name">{`${data.information.name} ${data.information.family} `}</div>
                                    <div className="mt-2" id="email-mobile">{data.information.phoneNumber}</div>
                                </span>
                            }
                        </span>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <Link
                                    className={page === '/profile' ? 'active' : ''}
                                    to={config.web_url + 'profile'}
                                >
                                    <div>
                                        <div className="icon d-inline-block">
                                            <img src="../assets/images/icons/profile-menu/profile.webp" className="pl-2" />
                                        </div>
                                        اطلاعات حساب
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={page === '/factors' ? 'active' : ''}
                                    to={config.web_url + 'factors'}
                                >
                                    <div className="icon d-inline-block">
                                        <img src="../assets/images/icons/profile-menu/orders.webp" className="pl-2" />
                                    </div>
                                    سفارش های من
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={page === '/favorite' ? 'active' : ''}
                                    to={config.web_url + 'favorite'}
                                >
                                    <div>
                                        <div className="icon d-inline-block">
                                            <img src="../assets/images/icons/profile-menu/favorites.webp" className="pl-2" />
                                        </div>
                                        علاقه مندی ها
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={page === '/address' ? 'active' : ''}
                                    to={config.web_url + 'address'}
                                >
                                    <div>
                                        <div className="icon d-inline-block">
                                            <img src="../assets/images/icons/profile-menu/addresses.webp" className="pl-2" />
                                        </div>
                                        آدرس های من
                                    </div>
                                </Link>
                            </li>
                            <li><hr /></li>
                            <li>
                                <Link
                                    onClick={() => {
                                        logOutHandler();
                                    }}
                                >
                                    <div>
                                        <div className="icon d-inline-block">
                                            <img src="../assets/images/icons/profile-menu/exit.webp" className="pl-2" />
                                        </div>
                                        خروج از حساب
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(AcountRightPanel);


