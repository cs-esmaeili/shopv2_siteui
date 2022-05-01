import React, { useState, useEffect } from "react";
import { _Home } from './../../services/Pages';
import config from "./../../config.json";
import { useLocation } from 'react-router-dom';
import { _lastPosts, _post } from './../../services/Actions';
import { Link } from "react-router-dom";

const Post = () => {

    const [data, setData] = useState(null);
    const [posts, setPosts] = useState(null);
    const location = useLocation();
    const post_id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1, location.pathname.length);

    const getPageData = async () => {
        try {
            const respons = await _post({ post_id });
            if (respons.data.statusText === "ok") {
                console.log(respons.data.data);
                setData(respons.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getLastPosts = async () => {
        try {
            const respons = await _lastPosts();
            if (respons.data.statusText === "ok") {
                console.log(respons.data.list);
                setPosts(respons.data.list);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPageData();
        getLastPosts();
    }, []);

    return (
        <section className="inner-page blog-inner-page" id="blog-page">
            <div className="container-fluid" id="page-hero">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                {data != null &&
                                    <div className="col-12 px-0">
                                        <h1>{data.title}</h1>
                                        <p>{data.description}</p>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="./index.html">صفحه نخست</a></li>
                                                <li className="breadcrumb-item"><a href="./blog.html">بلاگ آموزشی</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">{data.title}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                }
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
                                <div className="col-12 col-lg-9">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="blog-container">
                                                {data != null &&
                                                    <div className="row pt-2 px-3" id="post-title">
                                                        <div className="col-12 col-md-8">
                                                            <h1>{data.title}</h1>
                                                        </div>
                                                        <div className="col-12 col-md-4 text-start text-md-end"><span className="date">ارسال شده در {data.time}</span></div>
                                                    </div>
                                                }
                                                <hr />
                                                <div className="row py-0 px-3" id="post-details">
                                                    <div className="col-8">
                                                        {data != null &&
                                                            <span>دسته بندی: <a href="./blog.html">{data.category.name}</a></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 pt-2 text-justify" id="post-html">
                                                        {data != null &&
                                                            <div className="text-center pt-2 pb-3">
                                                                <img src={data.image} />
                                                            </div>
                                                        }
                                                        {data != null &&
                                                            <div dangerouslySetInnerHTML={{ __html: data.body }} />
                                                        }
                                                    </div>
                                                    <div className="col-12">
                                                        <hr />
                                                        <div id="keywords">
                                                            <span>برچسب ها:</span>
                                                            {data != null &&
                                                                data.meta_keywords.split(' ').map((value) => {
                                                                    return (
                                                                        <Link>
                                                                            <span className="keyword">{value}</span>
                                                                        </Link>
                                                                    );
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="row">

                                        <div className="col-12 col-sm-6 col-lg-12 px-lg-2">
                                            <div className="blog-side-panel">
                                                <div className="row pt-4 pt-sm-2 px-3">
                                                    <div className="col"><div className="title">آخرین مطالب</div></div>
                                                </div>
                                                <hr />
                                                <div className="container">
                                                    <div className="row">
                                                        {posts != null && posts.map((value) => {
                                                            return (
                                                                <div className="col-12 col-lg-12 px-0 mt-2">
                                                                    <div className="side-blog-post">
                                                                        <div className="row pl-3">
                                                                            <div className="col-4 pl-2">
                                                                                <Link to={config.web_url + "post/" + value.post_id}>
                                                                                    <div className="image" style={{ backgroundImage: `url('${value.image}')` }} ></div>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-8 px-0">
                                                                                <Link to={config.web_url + "post/" + value.post_id}>
                                                                                    <h2>{value.title}</h2>
                                                                                </Link>
                                                                                <div className="row">
                                                                                    <div className="col-12 col-xl-12 pl-0">
                                                                                        <span class="category">دسته بندی:<Link to={config.web_url + "post/" + value.post_id}>{value.category.name}</Link></span>
                                                                                    </div>
                                                                                    <div className="col-12 col-xl-12 pr-0 text-start text-xl-end d-none d-xl-block">
                                                                                        <span className="date">{value.time}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                </div>
            </div>
        </section>
    )
}

export default Post;
