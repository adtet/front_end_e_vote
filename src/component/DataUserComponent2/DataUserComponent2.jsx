import React from 'react';
import './DataUserComponent2.css';

function DataUserComponent2(props) {
    return (
        <div className="w-100">
            <div className="data-user d-flex w-100 mb-3 px-2 py-2">
                <i className="fas fa-user-alt align-self-center me-2"></i>
                <p className="mb-0">Biodata</p>
            </div>
            <div className="bio d-flex flex-column px-3">
                <div className="d-flex align-items-stretch">
                    <p>Nama</p>
                    <p className="ms-2 me-2">:</p>
                    <p id="name-admin">{props.name}</p>
                </div>
                <div className="d-flex align-items-stretch">
                    <p>NIM</p>
                    <p className="ms-4 me-2">:</p>
                    <p id="name-admin">{props.nim}</p>
                </div>
                <div className="d-flex align-items-stretch">
                    <p>Prodi</p>
                    <p className="ms-3 me-2">:</p>
                    <p id="name-admin">{props.prodi}</p>
                </div>
            </div>
        </div>
    )
}

export default DataUserComponent2;