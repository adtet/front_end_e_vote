import React, { Fragment } from 'react';
import permira from '../../assets/img/permira.png';
import telkom from '../../assets/img/telkom.png';
import './LogoComponent.css';

function LogoComponent() {
    return (
        <Fragment>
            <img src={telkom} className="logo-telkom align-self-center" alt="" />
            <img src={permira} className="logo-permira align-self-center" alt="" />
        </Fragment>
    )
}

export default LogoComponent;