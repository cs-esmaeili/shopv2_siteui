import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { _CategoryProducts } from "../../services/Actions";
import Product from './../components/Product';

const Products = () => {

    const [data, setData] = useState(null);
    const [data_c, setData_c] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const location = useLocation();
    const category_id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1, location.pathname.length);
    const perPage = 12;

    const getPageData = async () => {
        try {
            const respons = await _CategoryProducts({ category_id });
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
        getPageData();
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
                                <div className="col-12 col-lg-3 px-3 px-lg-0">

                                    <div className="accordion filters-container mt-3">
                                        <div className="accordion-item">
                                            <div id="collapseThree" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body pb-2">
                                                    <div id="search-bar">
                                                        <input type="text" placeholder="جستجو کنید..." style={{ width: "100%" }} onChange={(e) => {
                                                            let temp = [...data_c];
                                                            temp = temp.filter((value) => {
                                                                if (value.name.includes(e.target.value)) {
                                                                    return true;
                                                                }
                                                                return false;
                                                            });
                                                            setCurrentPage(0);
                                                            setData(temp);
                                                        }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion filters-container mt-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                    محدوده قیمت
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div className="row">
                                                        <div className="col-12 py-1 px-4 mt-3">
                                                            <div id="steps-slider" dir="rtl"></div>
                                                        </div>
                                                        <div className="col-6 text-center price-range mt-3">
                                                            <div>از</div>
                                                            <div id="price-range-from" >10000</div>
                                                            <div>تومان</div>
                                                        </div>
                                                        <div className="col-6 text-center price-range mt-3">
                                                            <div>تا</div>
                                                            <div id="price-range-to">500000</div>
                                                            <div>تومان</div>
                                                        </div>
                                                        <div className="col-12 text-center py-2" onClick={() => {
                                                            let from = document.querySelector('#price-range-from').innerHTML.replaceAll(',', '');
                                                            let to = document.querySelector(' #price-range-to').innerHTML.replaceAll(',', '');

                                                            let temp = [...data_c];
                                                            temp = temp.filter((value) => {
                                                                if (parseInt(value.sale_price) >= parseInt(from) && parseInt(value.sale_price) <= parseInt(to)) {
                                                                    return true;
                                                                }
                                                                return false;
                                                            });
                                                            setCurrentPage(0);
                                                            setData(temp);
                                                        }}>
                                                            <div className="btn btn-warning">اعمال محدوده قیمت</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion filters-container mt-3">
                                        <div className="accordion-item">
                                            <div id="collapseThree" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body pb-2">
                                                    <div className="form-group">
                                                        <input type="checkbox" id="only-available" onChange={(e) => {
                                                            if (e.target.checked) {
                                                                let temp = [...data_c];
                                                                temp = temp.filter((value) => {
                                                                    if (parseInt(value.status) == 0) {
                                                                        return true;
                                                                    }
                                                                    return false;
                                                                });
                                                                setCurrentPage(0);
                                                                setData(temp);
                                                            } else {
                                                                setCurrentPage(0);
                                                                setData(data_c);
                                                            }
                                                        }} />
                                                        <label htmlFor="only-available">فقط کالاهای موجود</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 col-lg-9 px-0 pl-lg-0 pr-lg-2 mt-2 mt-lg-0">
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

export default Products;
