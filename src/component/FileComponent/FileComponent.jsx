import React, { Component } from 'react';
import './FileComponent.css';
import { storage } from '../../firebase';

class FileComponent extends Component {
    constructor(props) {
        super();
        this.handleFile = this.handleFile.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
    }

    handleFile() {
        document.getElementById('file').click();
    }
    handleChangeFile(e) {
        document.querySelector('#file-name p').innerText = e.target.value;
        if (e.target.files[0]) {
            const image = e.target.files[0];
            storage.ref(`images/${image.name}`).put(image)
        }
    }


    render() {
        return (
            <div className="d-flex mt-3" >
                <div className="input-file text-center py-2 px-2 d-flex align-items-center justify-content-center" onClick={this.handleFile}>
                    <i className="fas fa-upload"></i>
                    <p className="mb-0 font-weight-bold">Upload File</p>
                    <input type="file" id="file" hidden onChange={this.handleChangeFile} />
                </div>
                <div id="file-name" className="d-flex align-items-center ms-3">
                    <p className="mb-0"></p>
                </div>
            </div>
        );
    }
}

export default FileComponent;