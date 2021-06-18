import React from 'react';
import './ActionComponent.css';

function DataUserComponent(props) {
    function handleLogout() {
        window.location.href = '/';
    }

    return (
        <div className="w-100">
            <div className="data-user d-flex w-100 mb-3 px-2 py-2" onClick={props.count}>
                <i className="fas fa-user-alt align-self-center me-2"></i>
                <p className="mb-0">Chart</p>
            </div>
            <div className="approve d-flex w-100 mb-3 px-2 py-2">
                <i className="fas fa-user-alt align-self-center me-2"></i>
                <p className="mb-0">Approve</p>
            </div>
            <div className="button-logout d-flex w-100 mt-3 px-2 py-2" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt align-self-center full-rotate me-2"></i>
                <p className="mb-0">Logout</p>
            </div>
        </div>
    )
}

export default DataUserComponent;