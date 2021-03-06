import React, { useState, useEffect } from "react";

const Footer = () => {

    return (
        <>
            <section className="pt-4 pb-3" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-4 col-lg-2">
                            <div className="title">دسترسی سریع</div>
                            <ul>
                                <li><a href="./blog.html">بلاگ آموزشی</a></li>
                                <li><a href="./faq.html">راهنمای خرید</a></li>
                                <li><a href="./faq.html">شیوه های پرداخت</a></li>
                                <li><a href="./contact.html">پیگیری سفارش</a></li>
                                <li><a href="./faq.html">سوالات متداول</a></li>
                                <li><a href="./about.html">درباره ما</a></li>
                                <li><a href="./contact.html">تماس با ما</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2">
                            <div className="title">گروه های محصولات</div>
                            <ul>
                                <li><a href="./products.html">تجهیزات کامپیوتر</a></li>
                                <li><a href="./products.html">گوشی موبایل</a></li>
                                <li><a href="./products.html">جانبی موبایل</a></li>
                                <li><a href="./products.html">ساعت هوشمند</a></li>
                                <li><a href="./products.html">جانبی کامپیوتر</a></li>
                                <li><a href="./products.html">دوربین</a></li>
                                <li><a href="./products.html">لپ تاپ</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2 d-none d-sm-inline-block">
                            <div className="title">ناحیه کاربری</div>
                            <ul>
                                <li><a href="./login.html">ورود به سایت</a></li>
                                <li><a href="./register.html">عضویت در سایت</a></li>
                                <li><a href="./reset-password.html">بازیابی رمز عبور</a></li>
                                <li><a href="./cart.html">سبد خرید</a></li>
                                <li><a href="./checkout.html">پیش فاکتور</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <hr className="d-lg-none"/>
                                <img src="assets/images/logo.png" alt=""/> روبیک مارکت
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                    <div className="row">
                                        <div className="col-12 col-md-6 text-center p-2" id="support-info">
                                            <div>7 روز هفته، 24 ساعت شبانه روز</div>
                                            <div>پاسخگوی شما هستیم</div>
                                            <div>09351234567</div>
                                        </div>
                                        <div className="col-12 col-md-6 pt-2 pt-md-0" id="certificates">
                                            <div className="row">
                                                <div className="col-4 text-center">
                                                    <a href="#"><img src="assets/images/certificates/enamad.png" alt=""/></a>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <a href="#"><img src="assets/images/certificates/samandehi.png" alt=""/></a>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <a href="#"><img src="assets/images/certificates/etehadiye.png" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </section>
            <section className="py-2" id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6" id="social-links">
                            <span>ما را دنبال کنید</span>
                            <a href="#"><img src="assets/images/social/insta.png" alt=""/></a>
                            <a href="#"><img src="assets/images/social/facebook.png" alt=""/></a>
                            <a href="#"><img src="assets/images/social/linkedin.png" alt=""/></a>
                            <a href="#"><img src="assets/images/social/twitter.png" alt=""/></a>
                            <a href="#"><img src="assets/images/social/youtube.png" alt=""/></a>
                        </div>
                        <div className="col-12 col-sm-6 text-sm-end pt-2 pt-sm-0">
                            <span>کلیه حقوق و مادی معنوی محفوط است.</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
