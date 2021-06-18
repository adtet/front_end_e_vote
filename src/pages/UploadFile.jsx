import React, { useState } from 'react';
import { storage } from '../firebase';

const UploadFile = () => {
    const [image, setImage] = useState(null);

    function handleChange(e) {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    function handleUpload() {
        const uploadTaks = storage.ref(`images/ilham.png`).put(image);
        uploadTaks.on(
            "state_change",
            snapshot => { },
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                    })
            }
        )
    }
    console.log(image);

    return (
        <div>
            <input type="file" name="file" id="file" onChange={handleChange} />
            <button onClick={handleUpload}>upload</button>
        </div>
    )
}

export default UploadFile;