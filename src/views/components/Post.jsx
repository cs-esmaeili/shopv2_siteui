import React from "react";
const Post = (data) => {
    const { image, time, title, description } = data.data;
    return (
        <div className="blog-post-box aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <a href="./blog-post.html"><div className="post-image"
                style={{ backgroundImage: `url('${image}')` }}
            ></div></a>
            <div className="details py-3 px-4">
                <div className="post-date">ارسال شده در {time}</div>
                <a href="./blog-post.html">
                    <h2 className="post-title">{title}</h2>
                </a>
                <a href="./blog-post.html">
                    <div className="post-description text-truncate">{description}</div>
                </a>
                <div className="read-more"><a href="./blog-post.html" className="hvr-icon-back">بیشتر خوانید <i className="fa fa-arrow-left hvr-icon"></i></a></div>
            </div>
        </div>
    )
}
export default Post;


