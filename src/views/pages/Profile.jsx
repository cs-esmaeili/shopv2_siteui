import React, { useState, useEffect } from "react";
import AcountRightPanel from "../components/AcountRightPanel";
import { toast } from 'react-toastify';
import config from "./../../config.json";
import { _EditPerson, _personProfile } from './../../services/Actions';

const Profile = () => {

    const [showName, setShowName] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [showPssword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);

    const [name, setName] = useState(null);
    const [password1, setPassword1] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [data, setData] = useState(null);

    const PersonProfile = async () => {
        try {
            const respons = await _personProfile();
            if (respons.data.statusText === "ok") {
                console.log(respons.data);
                setData(respons.data);
            }
        } catch (error) {
            console.log(error);
        }
    }



    const handelSubmit = async () => {
        let obj = { person_id: data.information.person_id };
        if (password1 !== null && password1 !== "") {
            obj.password = password1;
        }
        if (name !== null && name !== "") {
            let temp = name.split(" ", 2);
            obj.name = temp[0];
            obj.family = temp[1];
        }
        if (phoneNumber !== null && phoneNumber !== "") {
            obj.phoneNumber = phoneNumber;
        }
        try {
            console.log(obj);
            const response = await _EditPerson(obj);
            if (response.data.statusText === "ok") {
                setShowName(false);
                setShowPhoneNumber(false);
                setShowPassword(false);
                PersonProfile();
            }
            toast(response.data.message);
        } catch (error) {
            toast(error.response.data.message);
            console.log(error);
        }
    }

    useEffect(() => {
        PersonProfile();
    }, []);

    return (
        <section className="inner-page" id="profile-page">
            <div className="container-fluid" id="page-hero">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 px-0">
                                    <h1>?????????? ????????????</h1>
                                    <p>???? ?????????? ???????????? ?????????? ?????????? ?????? ??????????.</p>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="../index.html">???????? ????????</a></li>
                                            <li className="breadcrumb-item"><a href="#">?????????? ????????????</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">???????????? ??????????????</li>
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
                                    <AcountRightPanel page="profile" update={data} />
                                </div>
                                <div className="col-12 col-lg-9 pl-lg-0 pr-lg-2 mt-2 mt-lg-0">
                                    <div className="custom-container bg-light" id="profile-fields">
                                        <div className="row pt-2 px-3 ">
                                            <div className="col-12"><h1>?????????????? ????????</h1></div>
                                        </div>
                                        <hr />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 profile-field py-2">
                                                    <div className="row">
                                                        {data != null &&
                                                            <div className="col-10">
                                                                <div className="title">?????? ?? ?????? ????????????????</div>
                                                                <div className="value">{`${data.information.name} ${data.information.family} `}</div>
                                                            </div>
                                                        }
                                                        <div className="col-2" onClick={() => setShowName(true)}>
                                                            <i className="fa fa-edit"></i>
                                                        </div>
                                                        {showName &&
                                                            <div className="row">
                                                                <div className="col-10">
                                                                    <input className="form-control form-control-user" type="text" placeholder="?????? ?? ?????? ????????????????" onChange={(e) => {
                                                                        setName(e.target.value);
                                                                    }} />
                                                                </div>
                                                                <div className="col-2">
                                                                    <button type="submit" className="btn btn-primary btn-user btn-block" onClick={() => {
                                                                        handelSubmit();
                                                                    }}>
                                                                        ??????
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 profile-field py-2">
                                                    <div className="row">
                                                        {data != null &&
                                                            <div className="col-10">
                                                                <div className="title">?????????? ???????? ??????????</div>
                                                                <div className="value">{data.information.phoneNumber}</div>
                                                            </div>
                                                        }
                                                        <div className="col-2" onClick={() => setShowPhoneNumber(true)}>
                                                            <i className="fa fa-edit"></i>
                                                        </div>
                                                        {showPhoneNumber &&
                                                            <div className="row">
                                                                <div className="col-10">
                                                                    <input className="form-control form-control-user" type="text" placeholder="???????? ?????????? " onChange={(e) => {
                                                                        setPhoneNumber(e.target.value);
                                                                    }} />
                                                                </div>
                                                                <div className="col-2">
                                                                    <button type="submit" className="btn btn-primary btn-user btn-block" onClick={() => {
                                                                        handelSubmit();
                                                                    }}>
                                                                        ??????
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 profile-field py-2">
                                                    <div className="row">
                                                        <div className="col-10">
                                                            <div className="title">?????? ????????</div>
                                                            <div className="value">******</div>
                                                        </div>
                                                        <div className="col-2" onClick={() => setShowPassword(true)}>
                                                            <i className="fa fa-edit"></i>
                                                        </div>
                                                        {showPssword &&
                                                            <div className="row">
                                                                <div className="col-10">
                                                                    <input className="form-control form-control-user" type="text" placeholder="?????? ???????? ????????" style={{ textAlign: "left", direction: "ltr" }} onChange={(e) => {
                                                                        setPassword1(e.target.value);
                                                                    }} />
                                                                    <input className="form-control form-control-user" type="text" placeholder="?????????? ?????? ???????? ????????" style={{ textAlign: "left", direction: "ltr" }} onChange={(e) => {
                                                                        setPassword2(e.target.value);
                                                                        if (e.target.value !== password1) {
                                                                            setShowError(true);
                                                                        } else {
                                                                            setShowError(false);
                                                                        }
                                                                    }} />
                                                                </div>
                                                                {showError &&
                                                                    <div className="alert alert-danger" role="alert" style={{ textAlign: "center" }}>
                                                                        ?????? ???????? ?? ?????????? ?????? ???????? ?????????? ????????
                                                                    </div>
                                                                }
                                                                <div className="col-2 d-flex justify-content-center">
                                                                    <button type="submit" className="btn btn-primary btn-user btn-block" onClick={() => {
                                                                        handelSubmit();
                                                                    }}>
                                                                        ??????
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        }
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
        </section >
    );
}

export default Profile;
