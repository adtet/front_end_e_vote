import React, { Component } from 'react';
import './VotePage.css';
import VoteComponent from '../../component/VoteComponent/VoteComponent';
import telkom from '../../assets/img/telkom.png';
import permira from '../../assets/img/permira.png';
import DataUserComponent2 from '../../component/DataUserComponent2/DataUserComponent2';

// window.addEventListener('resize', (e) => {
//     if (window.innerWidth > 425) {
//         document.querySelector('.hamberger-button').style.display = 'none';
//         document.querySelector('.close-button').style.display = 'none';
//     } else {
//         document.querySelector('.hamberger-button').style.display = 'block';
//         document.querySelector('.main-content .sidebar').style.left = '-100%';
//     }
// })


class VotePage extends Component {
    constructor() {
        super();
        this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
        this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
        this.state = {
            time: 100
        }
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.time > 0) {
                this.setState({
                    time: this.state.time - 1
                })
            } else {
                window.location.href = '/';
            }
        }, 1000)
    }

    handleOpenSidebar() {
        if (window.innerWidth < 425) {
            document.querySelector('.main-content .sidebar').style.left = '0';
            document.querySelector('.hamberger-button').style.display = 'none';
            document.querySelector('.close-button').style.display = 'block';
        }
    }

    handleCloseSidebar() {
        if (window.innerWidth < 425) {
            document.querySelector('.main-content .sidebar').style.left = '-100%';
            document.querySelector('.hamberger-button').style.display = 'block';
            document.querySelector('.close-button').style.display = 'none';
        }
    }

    render() {
        return (
            <section id="vote-page" >
                <nav className="w-100">
                    <div className="container d-flex align-items-center h-100">
                        <i className="fas fa-bars hamberger-button align-self-center" onClick={this.handleOpenSidebar}></i>
                        <i className="fas fa-times close-button" onClick={this.handleCloseSidebar}></i>
                        <p className="mb-0 font-weight-bold">e-VOTE</p>
                    </div>
                </nav>
                <div className="main-content">
                    <div className="sidebar d-flex justify-content-center h-100">
                        <div className="w-100">
                            <div className="timeout h-25 d-flex align-items-center justify-content-center">
                                {this.state.time}
                            </div>
                            <div className="biodata h-50 d-flex align-items-center justify-content-center">
                                <DataUserComponent2 name="ilham maulana" nim="1103184207" prodi="Teknik Komputer" />
                            </div>
                            <div className="logo-sidebar h-25 pt-0 pb-0 d-flex justify-content-between align-items-end">
                                <img className="align-self-center" src={telkom} alt="" />
                                <img className="align-self-center" src={permira} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="vote-content">
                        <VoteComponent />
                    </div>
                </div>
            </section>
        )
    }
}

export default VotePage;