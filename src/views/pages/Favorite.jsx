import React, { useState, useEffect } from "react";
import { _Home } from './../../services/Pages';
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from './../../actions/profile';
import AcountRightPanel from './../components/AcountRightPanel';
import { _FavoriteList } from "../../services/Actions";
import { toast } from 'react-toastify';
import Product from './../components/Product';
import ProductFavorite from './../components/ProductFavorite';
import { _DeleteFavorite } from './../../services/Actions';

const Favorite = () => {

    const [data, setData] = useState(null);

    const favoriteList = async () => {
        try {
            const respons = await _FavoriteList();
            if (respons.data.statusText === "ok") {
                console.log(respons.data.list);
                setData(respons.data.list);
            }
            toast(respons.data.message);
        } catch (error) {
            console.log(error);
        }
    }
    const favoriteDelete = async (product_id) => {
        try {
            const respons = await _DeleteFavorite({ product_id });
            if (respons.data.statusText === "ok") {
                favoriteList();
            }
            toast(respons.data.message);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        favoriteList();
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
                                            <li className="breadcrumb-item active" aria-current="page">محصولات مورد علاقه</li>
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
                                    <AcountRightPanel page="favorite" />
                                </div>
                                <div className="col-12 col-lg-9 pl-lg-0 pr-lg-2 mt-2 mt-lg-0">
                                    <div className="custom-container" id="favorites">
                                        <div className="row pt-2 px-3">
                                            <div className="col-12"><h1>محصولات مورد علاقه</h1></div>
                                        </div>
                                        <div className="container">
                                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-md-4">
                                                {data != null &&
                                                    data.map((value) => {
                                                        return (
                                                            <ProductFavorite data={value} deleteM={(product_id) => favoriteDelete(product_id)} />
                                                        );
                                                    })}
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

export default Favorite;
