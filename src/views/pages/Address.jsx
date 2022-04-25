import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from 'formik';
import { _AddAddress, _DeleteAddress, _ListAddress } from "../../services/Actions";
import AcountRightPanel from "../components/AcountRightPanel";
import { toast } from 'react-toastify';

const Address = () => {

    const [list, setList] = useState(null);

    const listAddress = async () => {
        try {
            const respons = await _ListAddress();
            if (respons.data.statusText === "ok") {
                console.log(respons.data.list);
                setList(respons.data.list);
            } else {
                toast(respons.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const deleteAddress = async (person_address_id) => {
        try {
            const respons = await _DeleteAddress({ person_address_id });
            if (respons.data.statusText === "ok") {
                listAddress();
            }
            toast(respons.data.message);
        } catch (error) {
            console.log(error);
        }
    }
    const addAddress = async (values, reset) => {
        console.log(values);
        try {
            const respons = await _AddAddress(values);
            if (respons.data.statusText === "ok") {
                reset();
                listAddress();
            }
            toast(respons.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listAddress();
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
                                            <li className="breadcrumb-item active" aria-current="page">آدرس های من</li>
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
                                    <AcountRightPanel page="address" />
                                </div>
                                <div className="col-12 col-lg-9 pl-lg-0 pr-lg-2 mt-2 mt-lg-0">
                                    <div className="custom-container mb-2" id="new-address">
                                        <div className="row pt-2 px-3">
                                            <div className="col-12"><h1>افزودن آدرس جدید</h1></div>
                                        </div>
                                        <hr />
                                        <div className="container">
                                            <Formik
                                                initialValues={{
                                                    address: '',
                                                    postal_code: '',
                                                    state: 'tehran',
                                                    city: 'tehran',
                                                }}
                                                onSubmit={(values, { resetForm }) => {
                                                    addAddress(values, resetForm);
                                                }}
                                            >
                                                {({ errors, touched, values, setFieldValue }) => (
                                                    <Form >
                                                        <div className="row">
                                                            <div className="col-12 pt-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-md-4 pl-2">
                                                                        <div className="form-group m-1">
                                                                            <label htmlFor="province">استان:</label>
                                                                            <select name="state" id="province" className="form-control"
                                                                                onChange={(e) => {
                                                                                    setFieldValue("state", e.target.value);
                                                                                }}>
                                                                                <option value="tehran">تهران</option>
                                                                                <option value="fars">فارس</option>
                                                                                <option value="esfehan">اصفهان</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-md-4 pl-2">
                                                                        <div className="form-group m-1">
                                                                            <label htmlFor="city">شهر:</label>
                                                                            <select name="city" id="city" className="form-control"
                                                                                onChange={(e) => {
                                                                                    setFieldValue("city", e.target.value);
                                                                                }}>
                                                                                <option value="tehran">تهران</option>
                                                                                <option value="shiraz">شیراز</option>
                                                                                <option value="esfehan">اصفهان</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-md-8 pl-2">
                                                                        <div className="form-group m-1">
                                                                            <label htmlFor="address">نشانی کامل:</label>
                                                                            <Field className="form-control" type="text" name="address" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-md-4 pl-2">
                                                                        <div className="form-group m-1">
                                                                            <label htmlFor="postal_code">کد پستی:</label>
                                                                            <Field className="form-control" type="text" name="postal_code" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12">
                                                                        <div className="form-group m-1 pb-3">
                                                                            <Field className="btn btn-primary px-5" type="submit" value="ذخیره آدرس" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik >
                                        </div>
                                    </div>
                                    <div className="custom-container" id="addresses">
                                        <div className="row pt-2 px-3">
                                            <div className="col-12"><h1>آدرس های من</h1></div>
                                        </div>
                                        <hr />
                                        <div className="container">
                                            <div className="row">
                                                {list != null && list.map((value, index) => {
                                                    return (
                                                        <div className="col-12 address py-2">
                                                            <div className="row">
                                                                <div className="col-12 col-sm-10">
                                                                    <div className="title">{value.address}</div>
                                                                    <div className="sub-title">{`${value.state} ${value.city}`}</div>
                                                                    <div className="sub-title">{value.postal_code}</div>
                                                                </div>
                                                                <div className="col-12 col-sm-2 text-lg-end" onClick={() => {
                                                                    deleteAddress(value.person_address_id);
                                                                }}>
                                                                    <i className="fa fa-trash-alt font-weight-normal" ></i>
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
        </section>
    )
}

export default Address;
