import React, { useState, useEffect } from "react";
import config from "./../../config.json";
import { _lastPosts, _posts } from './../../services/Actions';
import { Link } from "react-router-dom";
import Post from './../components/Post';

const Posts = () => {

    const [data, setData] = useState(null);
    const [posts, setPosts] = useState(null);

    const getPageData = async () => {
        try {
            const respons = await _posts();
            if (respons.data.statusText === "ok") {
                console.log(respons.data.list);
                setData(respons.data.list);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getLastPosts = async () => {
        try {
            const respons = await _lastPosts();
            if (respons.data.statusText === "ok") {
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
                                                <div className="row py-2 px-3">
                                                    <div className="col"><h1 className="title">مرکز آموزش روبیک مارکت</h1></div>
                                                </div>
                                                <div className="container px-2 pb-3">
                                                    <div className="row row-cols-1 row-cols-md-2">
                                                        {data != null && data.map((value, index) => {
                                                            return (
                                                                <div className="col">
                                                                    <Post data={value} />
                                                                </div>
                                                            )
                                                        })}
                                                        {/* <div className="col">
                                                            <div className="blog-post-box" data-aos="fade-up" data-aos-duration="1000">
                                                                <a href="./blog-post.html"><div className="post-image" style="background-image: url('assets/images/blog/post100.jpg')"></div></a>
                                                                <div className="details py-3 px-4">
                                                                    <div className="post-date">ارسال شده در 30 خرداد 1400</div>
                                                                    <a href="./blog-post.html">
                                                                        <h2 className="post-title">بررسی آیفون 12 پرو مکس اپل</h2>
                                                                    </a>
                                                                    <a href="./blog-post.html">
                                                                        <div className="post-description">آیفون ۱۲ پرو مکس با ابعاد غول‌پیکر، دوربین توانمندتر و باتری حجمیش، تمام‌عیارترین پرچم‌دار کنونی اپل به‌حساب می‌آید.</div>
                                                                    </a>
                                                                    <div className="read-more"><a href="./blog-post.html" className="hvr-icon-back">بیشتر خوانید <i className="fa fa-arrow-left hvr-icon"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
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
                                                                                        <span className="category">دسته بندی:<Link to={config.web_url + "post/" + value.post_id}>{value.category.name}</Link></span>
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

export default Posts;
