import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './FormLoginComponent.css';
import InputComponent from '../InputComponent/InputComponent';


function FormLoginComponent() {
    function handlePost(e) {
        e.preventDefault();
        let nim = document.getElementById('nim').value;
        let password = document.getElementById('password').value;

        if (nim !== "" && password !== "") {
            if (nim === '123' && password === '123') {
                window.location.href = '/vote';
            } else {
                alert('NIM tidak terdaftar');
                window.location.reload();
            }
            // const formData = new FormData(this);
            // fetch('http://156.67.221.101:3002/user/login', {
            //     method: 'post',
            //     mode: 'no-cors',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: formData
            // })
            //     .then(json => console.log(json));
        } else {
            alert('Masukkan NIM dan Password!');
        }
    }
    return (
        <Fragment>
            <p className="title-form font-weight-bold mb-4">Login</p>
            <form onSubmit={handlePost} method="post">
                <InputComponent type="text" id="nim" placeholder="NIM" />
                <InputComponent type="password" id="password" placeholder="Password" />
                <button className="font-weight-bold py-2 mt-4" type="submit">Login</button>
                <div className="d-flex align-items-center mt-4 link-register ">
                    <p>Belum Registrasi?</p>
                    <Link to="/regis">
                        <p className="ms-1">registrasi pemilih</p>
                    </Link>
                </div>
            </form>
        </Fragment>
    );
}

export default FormLoginComponent;