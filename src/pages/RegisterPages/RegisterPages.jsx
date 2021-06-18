import React from 'react';
import './RegisterPages.css';
import IlustrationComponent from '../../component/IlustrationComponent/IlustrationComponent';
import FormRegisterComponent from '../../component/FormRegisterComponent/FormRegisterComponent';
import LogoComponent from '../../component/LogoComponent/LogoComponent'
import ContactComponent from '../../component/ContactComponent/ContactComponent'

function RegisterPages() {
    return (
        <section id="register-page">
            <div className="d-flex h-100">
                <div className="left">
                    <IlustrationComponent />
                </div>
                <div className="right">
                    <div className="logo w-100 d-flex justify-content-end">
                        <LogoComponent />
                    </div>
                    <div className="main w-100 d-flex align-items-center justify-content-center">
                        <div className="w-75">
                            <FormRegisterComponent />
                        </div>
                    </div>
                    <div className="footer d-flex align-items-center justify-content-center">
                        <div className="w-75">
                            <ContactComponent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterPages;