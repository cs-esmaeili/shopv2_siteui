import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { _CategoryProducts, _search } from "../../services/Actions";
import Product from './../components/Product';
import './css/search.css';

const Search = ({ searched = null }) => {

    const [data, setData] = useState(null);
    const [data_c, setData_c] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 12;

    const getPageData = async (name) => {
        try {
            const respons = await _search({ name });
            if (respons.data.statusText === "ok") {
                setData_c(respons.data.list);
                setData(respons.data.list);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const pagination = () => {
        let productCount = parseInt(data.length);

        let pagesCount = parseInt(Math.ceil(productCount / perPage));
        let elements = []
        let tempPage = currentPage;
        for (let index = 0; index < pagesCount; index++) {
            if (index == (tempPage - 2)) {
                elements.push(
                    <li class={(index == tempPage) ? "page-item active" : "page-item "}  >
                        <Link class="page-link">
                            ...
                        </Link>
                    </li>
                );
            }
            if (index == (tempPage - 1)) {
                elements.push(
                    <li class={(index == tempPage) ? "page-item active" : "page-item "} >
                        <Link class="page-link">
                            {index + 1}
                        </Link>
                    </li>
                );
            }
            if (index == tempPage) {
                elements.push(
                    <li class={(index == tempPage) ? "page-item active" : "page-item "} >
                        <Link class="page-link">
                            {index + 1}
                        </Link>
                    </li>
                );
            }
            if (index == (tempPage + 1)) {
                elements.push(
                    <li class={(index == tempPage) ? "page-item active" : "page-item "} >
                        <Link class="page-link">
                            {index + 1}
                        </Link>
                    </li>
                );

            }
            if (index == (tempPage + 2)) {
                elements.push(
                    <li class={(index == tempPage) ? "page-item active" : "page-item "} >
                        <Link class="page-link">
                            ...
                        </Link>
                    </li>
                );
            }
        }
        return elements;
    }
    useEffect(() => {
        if (searched != null) {
            getPageData(searched);
        }
    }, []);
    return (
        <section className="inner-page" id="products-page">
            <div className="container-fluid" id="page-hero">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 px-0">
                                    <h1>فروشگاه روبیک مارکت</h1>
                                    <p>هر آنچه نیاز دارید در این فروشگاه موجود است</p>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="./index.html">صفحه نخست</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">محصولات</li>
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
                                <div className="col-12">
                                    <div className="container">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                            </span>
                                            <input type="text" style={{ direction: "rtl" }}
                                                class="form-control place-holder-center" placeholder="جستجو کنید..."
                                                aria-label="Username" aria-describedby="basic-addon1"
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        getPageData(e.target.value);
                                                    }
                                                }} />
                                        </div>
                                    </div>

                                    <div className="mt-2" id="pager">
                                        <div className="container">
                                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-md-4">
                                                {data != null && data.map((value, index) => {
                                                    if (index >= ((currentPage) * perPage) && index < ((currentPage + 1) * perPage)) {
                                                        return (
                                                            <div className="col">
                                                                <Product data={value} />
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "lightgray" }}>
                                                    <nav aria-label="Page navigation example" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                        <ul class="pagination mb-3 mt-3" >
                                                            <li class="page-item">
                                                                <Link
                                                                    class="page-link"
                                                                    onClick={() => {
                                                                        if (currentPage - 1 >= 0) {
                                                                            setCurrentPage(currentPage - 1);
                                                                        }
                                                                    }}>
                                                                    <span aria-hidden="true">&laquo;</span>
                                                                </Link>
                                                            </li>
                                                            {data != null && pagination()}
                                                            <li class="page-item">
                                                                <Link
                                                                    class="page-link"
                                                                    onClick={() => {
                                                                        if (currentPage + 1 < data.length) {
                                                                            setCurrentPage(currentPage + 1);
                                                                        }
                                                                    }}>
                                                                    <span aria-hidden="true">&raquo;</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
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

export default Search;
