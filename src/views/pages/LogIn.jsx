import React, { useState } from "react";
import { LogInSchema } from '../../global/validator_Schemas';
import { setCookie } from '../../global/cookie';
import config from "../../config.json";
import { LogIn } from "../../services/Authorization";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import axios from "axios";

const Login = ({ history, update }) => {
    const [show, setShow] = useState(false);
    const handelSubmit = async ({ username, password }) => {
        const obj = {
            username,
            password,
        };
        try {
            const respons = await LogIn(obj);
            if (respons.data.statusText === "ok") {
                const token = respons.data.token;
                await setCookie(config.timeOut, 'token', token);
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                history.replace(config.web_url);
                update();
            } else {
                setShow(true);
            }
        } catch (error) {
        }
    };
    return (
        <section class="inner-page" id="contact-page">
            <div class="container-fluid" id="page-hero">
                <div class="row">
                    <div class="col-12">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 px-0">
                                    <h1>ورود به ناحیه کاربری</h1>
                                    <p>وارد ناحیه کاربری خود در روبیک مارکت شوید.</p>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="./index.html">صفحه نخست</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">ورود</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-2 py-md-5">
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={LogInSchema}
                    onSubmit={values => {
                        handelSubmit(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form onChange={() => { setShow(false) }}>
                            <div className="row">
                                <div className="col-12 col-sm-10 offset-sm-1">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-12 col-lg-5 text-center">
                                                <img src="assets/images/login.png" alt="" />
                                            </div>
                                            <div className="col-12 col-lg-7 pt-5 pt-md-0 align-self-center">
                                                <div className="title">وارد شوید</div>
                                                <p>با ورود به ناحیه کاربری خود از همه امکانات سایت بهره مند شوید.</p>
                                                <div className="form-group">
                                                    <label htmlFor="email">پست الکترونیک :</label>
                                                    <Field className="form-control" name="username" placeholder="نام کاربری"
                                                        style={{ textAlign: "left", direction: 'ltr' }}
                                                    />
                                                    {errors.username && touched.username ? (
                                                        <div>{errors.username}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">رمز عبور :</label>
                                                    <Field className="form-control" type="password" name="password" placeholder="رمز عبور"
                                                        style={{ textAlign: "left", direction: 'ltr' }}
                                                    />
                                                    {errors.password && touched.password ? (
                                                        <div>{errors.password}</div>
                                                    ) : null}
                                                </div>
                                                {show &&
                                                    <div className="alert alert-danger" role="alert" style={{ textAlign: "center" }}>
                                                        نام کاربری یا رمز عبور اشتباه است
                                                    </div>
                                                }
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-success" >
                                                        ورود به ناحیه کاربری
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik >
            </div >
        </section>
    );
}

export default withRouter(Login);
