import React, { Fragment, Component } from 'react';
import './FormRegisterComponent.css';
import InputComponent from '../InputComponent/InputComponent';
import { storage } from '../../firebase';

class FormRegisterComponent extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            url: ''
        }
        this.handleUpload = this.handleUpload.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleFile() {
        document.getElementById('file').click();
    }

    handleChange(e) {
        document.querySelector('#file-name p').innerText = e.target.value;
        if (e.target.files[0]) {
            this.setState({ image: e.target.files[0] });
        } else {
            this.setState({ image: null });
        }
    }

    handleUpload(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let nim = document.getElementById('nim').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if (this.state.image !== null && name !== "" && nim !== "" && email !== "" && password !== "") {
            const formatFile = this.state.image.type;
            if (formatFile === 'image/png' || formatFile === 'image/jpg' || formatFile === 'image/jpeg' || formatFile === 'application/pdf') {
                const uploadTaks = storage.ref(`${nim}/${this.state.image.name}`).put(this.state.image);
                uploadTaks.on(
                    "state_change",
                    snapshot => { },
                    error => {
                        console.log(error)
                    },
                    () => {
                        storage
                            .ref(nim)
                            .child(this.state.image.name)
                            .getDownloadURL()
                            .then(url => {
                                const data = {
                                    name: name,
                                    nim: nim,
                                    email: email,
                                    password: password,
                                    url: url
                                }
                                alert('Data berhasil terupload!!');
                                window.location.reload();
                            })

                    }
                )
            } else {
                alert('Format file anda salah!');
            }
        } else {
            alert('masukkan data anda!!');
        }
    }
    render() {
        return (
            <Fragment>
                <p className="title-form font-weight-bold">Registrasi Pemilih</p>
                <form onSubmit={this.handleUpload} method="post">
                    <InputComponent type="text" id="name" placeholder="Nama Lengkap" />
                    <InputComponent type="number" id="nim" placeholder="NIM" />
                    <InputComponent type="email" id="email" placeholder="Email SSO" />
                    <p className="ms-2 mt-1 font-weight-bold  sub-title-form">Contoh : ucup@student.telkomuniversity.ac.id</p>
                    <InputComponent type="text" id="password" placeholder="Buat Password" />
                    <div className="d-flex mt-3" >
                        <div className="input-file text-center py-2 px-2 d-flex align-items-center justify-content-center" onClick={this.handleFile}>
                            <i className="fas fa-upload"></i>
                            <p className="mb-0 font-weight-bold">Upload File</p>
                            <input type="file" id="file" hidden onChange={this.handleChange} />
                        </div>
                        <div id="file-name" className="d-flex align-items-center ms-3">
                            <p className="mb-0"></p>
                        </div>
                    </div>
                    <p className="ms-2 mt-1 font-weight-bold sub-title-form">Ket : Foto dengan memeganng KTM</p>
                    <button className="font-weight-bold py-2" type="submit">Daftar</button>
                </form>
            </Fragment >
        )
    }
}

export default FormRegisterComponent;