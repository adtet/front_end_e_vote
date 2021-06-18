import React, { Fragment } from 'react';
import './ContactComponent.css';
import line from '../../assets/icons/line.svg';

function ContactComponent() {
    return (
        <Fragment>
            <p className="title-contact mb-0 font-weight-bold">Hubungi kami :</p>
            <div className="contact-line d-flex mt-1">
                <img src={line} alt="" />
                <p className="mb-0 align-self-center ms-2 font-weight-bold">@016ogprk</p>
            </div>
        </Fragment>
    )
}

export default ContactComponent;