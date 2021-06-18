import React, { Component } from 'react';
import './DashboardPages.css';
import CountComponent from '../../component/CountComponent/CountComponent';
import ApproveComponent from '../../component/ApproveComponent/ApproveComponent';
import telkom from '../../assets/img/telkom.png';
import permira from '../../assets/img/permira.png';

class DashboardPages extends Component {
    constructor() {
        super();
        this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
        this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleClickCount = this.handleClickCount.bind(this);
        this.handleClickApprove = this.handleClickApprove.bind(this);

        this.state = {
            component: <CountComponent />
        }
    }
    handleOpenSidebar = () => {
        if (window.innerWidth < 425) {
            document.querySelector('.main-content .sidebar').style.left = '0';
            document.querySelector('.hamberger-button').style.display = 'none';
            document.querySelector('.close-button').style.display = 'block';
        }
    }

    handleLogout() {
        window.location.href = '/';
    }

    handleCloseSidebar() {
        if (window.innerWidth < 425) {
            document.querySelector('.main-content .sidebar').style.left = '-100%';
            document.querySelector('.hamberger-button').style.display = 'block';
            document.querySelector('.close-button').style.display = 'none';
        }
    }

    handleClickCount() {
        this.setState({
            component: <CountComponent />
        })
    }

    handleClickApprove() {
        this.setState({
            component: <ApproveComponent />
        })
    }
    render() {
        return (
            <section>
                <nav className="w-100">
                    <div className="container d-flex align-items-center h-100">
                        <i className="fas fa-bars hamberger-button align-self-center" onClick={this.handleOpenSidebar}></i>
                        <i className="fas fa-times close-button" onClick={this.handleCloseSidebar}></i>
                        <p className="mb-0 font-weight-bold">e-VOTE</p>
                    </div>
                </nav>
                <div className="main-content">
                    <div className="sidebar d-flex justify-content-center h-100 overflow-hidden">
                        <div className="w-100">
                            <div className="profile h-25 d-flex justify-content-center">
                                <div className="bio d-flex flex-column px-3 py-3">
                                    <div className="d-flex align-items-stretch">
                                        <p>Nama</p>
                                        <p className="ms-2 me-2">:</p>
                                        <p id="name-admin">ilham maulana</p>
                                    </div>
                                    <div className="d-flex align-items-stretch">
                                        <p>NIM</p>
                                        <p className="ms-4 me-2">:</p>
                                        <p id="name-admin">1103184207</p>
                                    </div>
                                    <div className="d-flex align-items-stretch">
                                        <p>Prodi</p>
                                        <p className="ms-3 me-2">:</p>
                                        <p id="name-admin">Teknik Komputer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="biodata h-50 d-flex justify-content-center">
                                <div className="w-100">
                                    <div className="data-user d-flex w-100 mb-3 px-2 py-2" onClick={this.handleClickCount}>
                                        <i className="fas fa-user-alt align-self-center me-2"></i>
                                        <p className="mb-0">Chart</p>
                                    </div>
                                    <div className="approve d-flex w-100 mb-3 px-2 py-2" onClick={this.handleClickApprove}>
                                        <i className="fas fa-user-alt align-self-center me-2"></i>
                                        <p className="mb-0">Approve</p>
                                    </div>
                                    <div className="button-logout d-flex w-100 mt-3 px-2 py-2" onClick={this.handleLogout}>
                                        <i className="fas fa-sign-out-alt align-self-center full-rotate me-2"></i>
                                        <p className="mb-0">Logout</p>
                                    </div>
                                </div>
                            </div>
                            <div className="logo-sidebar d-flex justify-content-between px-3">
                                <img className="align-self-center" src={telkom} alt="" />
                                <img className="align-self-center" src={permira} alt="" />
                            </div>
                        </div>
                    </div>
                    {this.state.component}
                </div>
            </section>
        )
    }
}

export default DashboardPages;