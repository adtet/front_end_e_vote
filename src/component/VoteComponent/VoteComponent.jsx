import React, { Component, Fragment } from 'react';
import './VoteComponent.css';
import photo from '../../assets/img/patrick.jpg';

class VoteComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleVote = this.handleVote.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            bem: '',
            dpm: '',
            mbti: '',
            akun: ''
        }
    }

    handleChange(e) {
        e.target.parentElement.style.backgroundColor = 'var(--primary-color)';
    }

    handleVote(e) {
        e.target.previousSibling.checked = true
        const allCard = document.querySelectorAll('.card-photo');
        for (let i = 0; i < allCard.length; i++) {
            allCard[i].classList.remove('active');
        }
        const allButton = document.querySelectorAll('.button-vote');
        for (let i = 0; i < allCard.length; i++) {
            allButton[i].classList.remove('button-active');
        }
        e.target.parentElement.classList.add('active')
        e.target.classList.add('button-active')

    }

    handleSubmit(e) {
        e.preventDefault();
        if (window.confirm('Anda sudah yakin?')) {
            window.location.href = '/'
        } else {
            alert('Silahkan pilih')
        }
    }
    render() {
        return (
            <Fragment>
                <p className="text-center type-vote">Ketua BEM</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="row w-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="card-photo p-2 me-2 ms-2 mt-3">
                                <img src={photo} alt="" />
                                <p className="text-center mt-3 mb-3">{this.props.name}</p>
                                <input type="radio" name="vote" value="1" hidden onChange={this.handleChange} />
                                <div className="button-vote font-weight-bold p-3" onClick={this.handleVote}>asep kusnandar</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card-photo p-2 me-2 ms-2 mt-3">
                                <img src={photo} alt="" />
                                <p className="text-center mt-3 mb-3">{this.props.name}</p>
                                <input type="radio" name="vote" value="2" hidden />
                                <div className="button-vote font-weight-bold p-3" onClick={this.handleVote}>ucup pamungkas</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="mt-4 py-2 font-weight-bold btn-success button-submit" type="submit">Submit</button>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default VoteComponent;