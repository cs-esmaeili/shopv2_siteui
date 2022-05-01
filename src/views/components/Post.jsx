import React from "react";
import { Link } from "react-router-dom";
import config from "./../../config.json";

const Post = (data) => {
    const { image, time, title, description, post_id } = data.data;
    return (
        <div className="blog-post-box aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <Link to={config.web_url + "post/" + post_id}>
                <div className="post-image"
                    style={{ backgroundImage: `url('${image}')` }}
                ></div>
            </Link>
            <div className="details py-3 px-4">
                <div className="post-date">ارسال شده در {time}</div>
                <Link to={config.web_url + "post/" + post_id}>
                    <h2 className="post-title">{title}</h2>
                </Link>
                <Link to={config.web_url + "post/" + post_id}>
                    <div className="post-description text-truncate">{description}</div>
                </Link>
                <div className="read-more">
                    <Link to={config.web_url + "post/" + post_id}>
                        بیشتر خوانید <i className="fa fa-arrow-left hvr-icon"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Post;


